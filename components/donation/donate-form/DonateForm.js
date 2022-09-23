import Image from "next/image";
import React, { useState } from "react";
import Layout from "../../../components/layout/layout";
import pattern from "../../../assets/images/pattern.png";

const DonateForm = () => {
  const [FullName, setFullName] = useState("");
  const [Email, setEmail] = useState("");
  const [Amount, setAmount] = useState("");
  const [CreditCard, setCreditCard] = useState("");
  const [DonationFor, setDonationFor] = useState("");

  const donateForm = (e) => {
    e.preventDefault();
    console.log("FirstName", FirstName);
    console.log("Email", Email);
    console.log("Amount", Amount);
    console.log("CreditCard", CreditCard);
    console.log("DonationFor", DonationFor);
  };
  return (
    <section className="relative overflow-hidden pt-[30px] md:pt-[50px]  pb-[30px] md:pb-[50px]">
      <div className="absolute left-0 right-0 top-0 w-full h-[100%]">
        <div className="scale-[1.1]">
          {/* <Image src={pattern} /> */}
        </div>
      </div>
   
   
    </section>
  );
};

export default DonateForm;
