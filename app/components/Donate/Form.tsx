"use client";
import { useState } from "react";

type Form = {
  id: number;
  header: string;
  tag: string;
};

function DonationAmount({
  amount,
  selectedAmount,
  handleSelectAmount,
  handleChange,
}: {
  amount: string;
  selectedAmount: string;
  handleSelectAmount: (value: string) => void;
  handleChange: (e: any) => void;
}) {
  const amounts = ["£20", "£50", "£100"];

  return (
    <div className="">
      <div className="mb-6 flex items-center space-x-10">
        {amounts.map((amountVal, index) => (
          <button
            onClick={() => handleSelectAmount(amountVal)}
            key={index}
            className={`
            ${selectedAmount === amountVal ? "bg-[#F1F3FF] text-primary" : "bg-[#F6F6F6] text-[#CFCFCF]"}
            rounded-[64px] px-6 py-2 text-center font-general-sans text-bt-m font-medium lg:text-bt-d`}
          >
            {amountVal}
          </button>
        ))}
      </div>

      <div className="">
        <div className="mb-5">
          <input
            type="text"
            name="amount"
            value={amount}
            onChange={handleChange}
            placeholder="Name your own amount here maybe £200"
            className="placeholder:gray-400 h-[50px] w-full border-b border-[#E8E8E8] px-2 py-3 font-general-sans text-base font-medium text-primary outline-none focus:border-primary lg:text-xl"
            required
          />
        </div>
      </div>
    </div>
  );
}

function ContactBilling() {
  return <div>contact billing</div>;
}

function PaymentDetails() {
  return <div>payment details</div>;
}

export default function Form() {
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

  const [currentForm, setCurrentForm] = useState<Form>(headers[0]);
  const [formData, setFormData] = useState({
    amount: "",
    selectAmount: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSelectAmount = (value: string) => {
    setFormData({ ...formData, selectAmount: value });
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
          />
        );
      case 2:
        return <ContactBilling />;
      case 3:
        return <PaymentDetails />;
      default:
        return (
          <DonationAmount
            amount={formData.amount}
            selectedAmount={formData.selectAmount}
            handleSelectAmount={handleSelectAmount}
            handleChange={handleChange}
          />
        );
    }
  };

  return (
    <section className="px-5 py-10">
      <div className="container-block mx-auto">
        <h2 className="mb-5 text-h3-m font-bold md:text-h3-t lg:text-h3-d">Enter your donation amount</h2>

        <div className="mb-8 flex flex-col space-y-4">
          {headers.map((header) => (
            <div
              onClick={() => setCurrentForm(header)}
              className="flex max-w-[300px] cursor-pointer items-center space-x-3"
              key={header.id}
            >
              <button
                className={`
              ${header.id === currentForm.id ? "bg-primary text-white" : "bg-[#F6F6F6] text-[#B7B7B7]"}
              flex h-5 w-5 items-center justify-center  rounded-full p-2 font-general-sans text-xs-m font-medium`}
              >
                {header.id}
              </button>
              <span
                className={`
              ${header.id === currentForm.id ? " text-black" : "text-[#B7B7B7]"}
              font-general-sans text-xs-m font-medium md:text-xs-t lg:text-xs-d`}
              >
                {header.tag}
              </span>
            </div>
          ))}
        </div>

        {switchForm(currentForm.id)}

        <button
          type="submit"
          className={`
              text-para-1x w-full rounded-[64px] px-8 py-4 text-center text-white md:w-auto md:px-14 md:text-lg lg:px-16
              ${formData.selectAmount || formData.amount ? "bg-primary" : "bg-primary opacity-50"}
              `}
        >
          Submit
        </button>
      </div>
    </section>
  );
}
