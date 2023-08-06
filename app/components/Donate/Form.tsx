/* eslint-disable @next/next/no-img-element */
"use client";
import { useState, useEffect } from "react";
import { countries } from "@/app/data/countries";

type FormProps = {
  isFinal: boolean;
  handleIsFinal: () => void;
};

type Form = {
  id: number;
  header: string;
  tag: string;
};

type PaymentOption = {
  id: number;
  name: string;
};

type Input = {
  name: string;
  value: string;
  handleChange: (e: any) => void;
  placeholder: string;
};

type DonationAmount = {
  amount: string;
  selectedAmount: string;
  handleSelectAmount: (value: string) => void;
  handleChange: (e: any) => void;
  handleNext: (id: number) => void;
};

type ContactBilling = {
  firstName: string;
  lastName: string;
  email: string;
  address: string;
  city: string;
  state: string;
  zipCode: string;
  country: string;
  handleChange: (e: any) => void;
  handleNext: (id: number) => void;
};

type PaymentDetails = {
  amount: string;
  paymentOptions: PaymentOption[];
  selectedPaymentOption: number;
  selectedAmount: string;
  handleSelectedPaymentOption: (id: number) => void;
  handleIsFinal: () => void;
};

function Input({ name, value, handleChange, placeholder }: Input) {
  return (
    <input
      type="text"
      name={name}
      value={value}
      onChange={handleChange}
      placeholder={placeholder}
      className="placeholder:gray-400 h-[40px] w-full border-b border-[#E8E8E8] px-2 py-3 font-general-sans text-base font-medium text-primary outline-none focus:border-primary md:h-[50px] lg:text-xl"
      required
    />
  );
}

function DonationAmount({ amount, selectedAmount, handleSelectAmount, handleChange, handleNext }: DonationAmount) {
  const [isDisabled, setIsDisabled] = useState(true);
  const amounts = ["£20", "£50", "£100"];

  const extractNumber = () => {
    const num = amount.match(/\d+/g);
    if (num) {
      const convertedAmount = Number(num[0]);
      if (convertedAmount > 0) {
        setIsDisabled(false);
      } else {
        setIsDisabled(true);
      }
    } else {
      setIsDisabled(true);
    }
  };

  useEffect(() => {
    extractNumber();

    if (selectedAmount) {
      setIsDisabled(false);
    }
  }, [amount, selectedAmount]);

  return (
    <div className="md:mx-auto md:max-w-xl lg:max-w-3xl">
      <div className="flex items-center space-x-10 lg:justify-center lg:space-x-5">
        {amounts.map((amountVal, index) => (
          <button
            onClick={() => handleSelectAmount(amountVal)}
            key={index}
            className={`
            ${selectedAmount === amountVal ? "bg-[#F1F3FF] text-primary" : "bg-[#F6F6F6] text-[#CFCFCF]"}
            rounded-[64px] px-6 py-2 text-center font-general-sans text-bt-m font-medium lg:py-3 lg:text-bt-d`}
          >
            {amountVal}
          </button>
        ))}
      </div>

      <div className="mt-7 flex flex-col space-y-7 lg:mt-10 lg:space-y-8">
        <Input
          name="amount"
          value={amount}
          handleChange={handleChange}
          placeholder="Name your own amount here maybe £200"
        />

        <div className="w-full md:flex md:justify-end">
          <button
            disabled={isDisabled}
            onClick={() => handleNext(1)}
            type="button"
            className={`
              text-para-1x w-full rounded-[64px] px-8 py-4 text-center text-white md:w-auto md:px-14 md:py-3 md:text-lg lg:px-16 lg:py-4
              ${isDisabled ? "cursor-not-allowed bg-primary opacity-50" : "bg-primary"}
              `}
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
}

function ContactBilling({
  firstName,
  lastName,
  email,
  address,
  city,
  state,
  zipCode,
  country,
  handleChange,
  handleNext,
}: ContactBilling) {
  return (
    <div className="md:mx-auto md:max-w-xl lg:max-w-3xl">
      <div className="mb-7 flex flex-col space-y-4 lg:mb-8">
        <div className="flex flex-col space-y-4 md:flex-row md:justify-between md:space-x-3 md:space-y-0">
          <Input name="firstName" value={firstName} handleChange={handleChange} placeholder="First name" />
          <Input name="lastName" value={lastName} handleChange={handleChange} placeholder="Last name" />
        </div>
        <Input name="email" value={email} handleChange={handleChange} placeholder="Email Address" />
        <Input name="address" value={address} handleChange={handleChange} placeholder="Address" />
        <div className="flex flex-col space-y-4 md:flex-row md:justify-between md:space-x-3 md:space-y-0">
          <Input name="city" value={city} handleChange={handleChange} placeholder="City" />
        </div>
        <div className="flex flex-col space-y-4 md:flex-row md:items-center md:justify-between md:space-x-3 md:space-y-0">
          <Input name="zipCode" value={zipCode} handleChange={handleChange} placeholder="ZIP/Postal code" />{" "}
          <div className="w-full">
            <select
              name="country"
              className={`
                    ${country ? "text-primary" : "text-gray-400"}
                    placeholder:gray-400 h-[50px] w-full border-b border-[#E8E8E8] px-2 py-3 font-general-sans text-base font-medium outline-none focus:border-primary lg:text-xl`}
              required
              value={country}
              onChange={(e) => handleChange(e)}
            >
              <option value="">Select country</option>
              {countries.map((country, index) => (
                <option key={index} value={country}>
                  {country}
                </option>
              ))}
            </select>
          </div>
        </div>
      </div>

      <div className="w-full md:flex md:justify-end">
        <button
          disabled={!email}
          type="button"
          onClick={() => handleNext(2)}
          className={`
              text-para-1x w-full rounded-[64px] px-8 py-4 text-center text-white md:w-auto md:px-14 md:py-3 md:text-lg lg:px-16 lg:py-4
              ${email ? "bg-primary" : "cursor-not-allowed bg-primary opacity-50"}
              `}
        >
          Next
        </button>
      </div>
    </div>
  );
}

function PaymentDetails({
  amount,
  selectedAmount,
  paymentOptions,
  selectedPaymentOption,
  handleSelectedPaymentOption,
  handleIsFinal,
}: PaymentDetails) {
  const handlePayment = () => {
    if (selectedPaymentOption === 1) {
      console.log("pay with paypal - redirect to paypal");
    }

    if (selectedPaymentOption === 2) {
      console.log("pay with card - redirect to stripe");
    }

    if (selectedPaymentOption === 3) {
      handleIsFinal();
    }
  };

  return (
    <div className="md:mx-auto md:max-w-xl lg:max-w-3xl">
      <div className="mb-6">
        <p className="mb-2 font-general-sans text-xs-t font-medium text-[#A3A3A3] md:text-sm-t lg:text-p1-t">
          Total amount to be donated:
        </p>
        <p className="text-h4-m font-bold md:text-base lg:text-p1-t">
          {selectedAmount
            ? `£${
                parseFloat(selectedAmount.slice(1)).toFixed(2) === "0.00"
                  ? "0.00"
                  : parseFloat(selectedAmount.slice(1)).toFixed(2)
              }`
            : `£${parseFloat(amount).toFixed(2) === "0.00" ? "0.00" : parseFloat(amount).toFixed(2)}`}
        </p>
      </div>

      <div>
        <p className="mb-2 font-general-sans text-xs-t font-medium text-[#A3A3A3] md:text-sm-t lg:text-p1-t">
          Payment method:
        </p>
        <div className="flex flex-col space-y-3">
          {paymentOptions.map((option) => (
            <div
              onClick={() => handleSelectedPaymentOption(option.id)}
              className="flex cursor-pointer items-center space-x-3"
              key={option.id}
            >
              <div
                className={`
            ${selectedPaymentOption === option.id ? "border-primary" : "border-[#AAAAAA]"}
            flex h-5 w-5 items-center justify-center rounded-full border-2`}
              >
                <div
                  className={`h-3 w-3 rounded-full ${
                    selectedPaymentOption === option.id ? "bg-primary" : "bg-transparent"
                  }`}
                ></div>
              </div>
              <p
                className={`
              ${selectedPaymentOption === option.id ? "text-black" : "text-[#AAAAAA]"}
              font-general-sans text-p1-m font-medium md:text-base lg:text-p1-t`}
              >
                {option.name}
              </p>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-7 w-full md:flex md:justify-end lg:mt-8">
        <button
          onClick={handlePayment}
          type="button"
          className={`
              text-para-1x w-full rounded-[64px] px-8 py-4 text-center text-white md:w-auto md:px-14 md:py-3 md:text-lg lg:px-16 lg:py-4
              ${selectedPaymentOption ? "bg-primary" : "bg-primary opacity-50"}
              `}
        >
          Pay
        </button>
      </div>
    </div>
  );
}

export default function Form({ isFinal, handleIsFinal }: FormProps) {
  const headers: Form[] = [
    {
      id: 1,
      header: "Enter your donation amount",
      tag: "Donation amount",
    },
    {
      id: 2,
      header: "Enter your contact billing address",
      tag: "Contact/billing address",
    },
    {
      id: 3,
      header: "Choose payment method",
      tag: "Payment method",
    },
  ];

  const paymentOptions: PaymentOption[] = [
    { id: 1, name: "PayPal" },
    { id: 2, name: "Credit Card(Stripe)" },
    { id: 3, name: "Bank Transfer" },
  ];
  const [currentForm, setCurrentForm] = useState<Form>(headers[0]);
  const [formData, setFormData] = useState({
    amount: "",
    selectAmount: "",
    firstName: "",
    lastName: "",
    email: "",
    address: "",
    city: "",
    state: "",
    zipCode: "",
    country: "",
  });

  const [selectedPaymentOption, setSelectedPaymentOption] = useState<number>(0);
  const [filledForms, setFilledForms] = useState<number[]>([]);
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSelectAmount = (value: string) => {
    setFormData({ ...formData, selectAmount: value });
  };

  const handleSelectedPaymentOption = (id: number) => {
    setSelectedPaymentOption(id);
  };

  const handleNext = (id: number) => {
    setCurrentForm(headers[id]);
    // console.log(formData);

    if (formData.amount !== "" || formData.selectAmount !== "") {
      setFilledForms([...filledForms, 1]);
    }

    if (formData.firstName !== "") {
      setFilledForms([...filledForms, 2]);
    }
  };

  const switchForm = (form: number) => {
    switch (form) {
      case 1:
        return (
          <DonationAmount
            amount={formData.amount}
            selectedAmount={formData.selectAmount}
            handleSelectAmount={handleSelectAmount}
            handleChange={handleChange}
            handleNext={handleNext}
          />
        );
      case 2:
        return <ContactBilling {...formData} handleChange={handleChange} handleNext={handleNext} />;
      case 3:
        return (
          <PaymentDetails
            amount={formData.amount}
            selectedAmount={formData.selectAmount}
            paymentOptions={paymentOptions}
            selectedPaymentOption={selectedPaymentOption}
            handleIsFinal={handleIsFinal}
            handleSelectedPaymentOption={handleSelectedPaymentOption}
          />
        );
      default:
        return (
          <DonationAmount
            amount={formData.amount}
            selectedAmount={formData.selectAmount}
            handleSelectAmount={handleSelectAmount}
            handleChange={handleChange}
            handleNext={handleNext}
          />
        );
    }
  };

  return (
    <section className="bg-white lg:py-10">
      <div className="px-5 py-8 lg:mx-auto lg:-mt-64 lg:mb-10 lg:max-w-5xl lg:rounded-[40px] lg:bg-[#FEFEFE] lg:p-10">
        {isFinal ? (
          <>
            <div className="mb-3 lg:mb-6">
              <button onClick={handleIsFinal} className="inline-flex items-center space-x-3">
                <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M11.165 6.91846L4.08337 14.0001L11.165 21.0818"
                    stroke="#292D32"
                    strokeWidth="1.5"
                    strokeMiterlimit="10"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M23.9165 14H4.2815"
                    stroke="#292D32"
                    strokeWidth="1.5"
                    strokeMiterlimit="10"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                <span className="font-general-sans text-xs-m uppercase md:text-xs-t lg:text-xs-d">Go back</span>
              </button>
            </div>
            <div className="flex flex-col space-y-6 text-center lg:space-y-8">
              <h2 className="mx-auto w-[185px] text-h4-m font-bold text-black md:w-4/12 md:text-h3-t lg:text-h4-d lg:font-medium">
                Make payments into the account details below.
              </h2>

              <div className="mx-auto flex w-[117px] items-center justify-center">
                <img src="/images/natwest.png" alt="natwest" className="" />
              </div>

              <div className="flex flex-col space-y-1">
                <p className="font-general-sans text-sm-m uppercase tracking-wider text-[#A3A3A3]">ACCOUNT NAME:</p>
                <p className="text-h4-m font-bold text-black md:text-h4-t lg:text-h4-d">Hour of Solution ministry</p>
              </div>

              <div className="flex flex-col space-y-1">
                <p className="font-general-sans text-sm-m uppercase tracking-wide text-[#A3A3A3]">SORT CODE:</p>
                <p className="text-h4-m font-bold text-black md:text-h4-t lg:text-h4-d">56-00-18</p>
              </div>

              <div className="flex flex-col space-y-1">
                <p className="font-general-sans text-sm-m uppercase tracking-wide text-[#A3A3A3]">ACCOUNT NUMBER:</p>
                <p className="text-h4-m font-bold text-black md:text-h4-t lg:text-h4-d">24195782</p>
              </div>
            </div>
          </>
        ) : (
          <>
            {currentForm.id !== 1 && (
              <div className="mb-3 lg:mb-6">
                <button
                  onClick={() => setCurrentForm(headers[currentForm.id - 2])}
                  className="inline-flex items-center space-x-3"
                >
                  <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="M11.165 6.91846L4.08337 14.0001L11.165 21.0818"
                      stroke="#292D32"
                      strokeWidth="1.5"
                      strokeMiterlimit="10"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M23.9165 14H4.2815"
                      stroke="#292D32"
                      strokeWidth="1.5"
                      strokeMiterlimit="10"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                  <span className="font-general-sans text-xs-m uppercase md:text-xs-t lg:text-xs-d">Go back</span>
                </button>
              </div>
            )}

            <div className="md:mx-auto md:max-w-xl lg:max-w-3xl">
              <h2 className="mb-7 text-h3-m font-bold md:text-h3-t lg:mb-5 lg:text-center lg:text-h3-d lg:font-medium">
                {currentForm.header}
              </h2>
            </div>

            <div className="mb-8 flex flex-col space-y-4 md:flex-row md:items-center md:justify-center md:space-x-7 md:space-y-0">
              {headers.map((header) => (
                <div className="flex max-w-[300px] items-center space-x-3" key={header.id}>
                  <button
                    className={`
              ${
                filledForms.includes(header.id) || currentForm.id === header.id
                  ? "bg-primary text-white"
                  : "bg-[#F6F6F6] text-[#B7B7B7]"
              }
              flex h-5 w-5 items-center justify-center rounded-full p-2  font-general-sans text-xs-m font-medium md:h-6 md:w-6 md:text-xs-t`}
                  >
                    {header.id}
                  </button>
                  <span
                    className={`
              ${filledForms.includes(header.id) ? " text-primary" : ""}
              ${currentForm.id === header.id ? " text-black" : ""}
              ${currentForm.id !== header.id && !filledForms.includes(header.id) ? " text-[#B7B7B7]" : ""}
              font-general-sans text-xs-m font-medium sm:text-xs-t md:text-p1-m lg:text-xs-d`}
                  >
                    {header.tag}
                  </span>
                </div>
              ))}
            </div>

            {switchForm(currentForm.id)}
          </>
        )}
      </div>
    </section>
  );
}
