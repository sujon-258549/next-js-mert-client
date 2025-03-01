import Image from "next/image";
import location from "../../../../../assets/contact/location.png";
import phone from "../../../../../assets/contact/phone.png";
import quentin from "../../../../../assets/contact/questen.png";

const ProductContact = () => {
  const contactItems = [
    {
      img: quentin,
      alt: "Customer Support",
      title: "Having Queries?",
      text: "Contact our support team for quick assistance and answers to your questions.",
    },
    {
      img: phone,
      alt: "Call Support",
      title: "Call Us Anytime",
      text: "Need urgent help? Reach us via phone and get real-time support.",
    },
    {
      img: location,
      alt: "Find Us",
      title: "Visit Our Office",
      text: "Find us at our headquarters or nearest branch for in-person assistance.",
    },
  ];

  return (
    <div className="flex flex-wrap justify-center gap-5 mb-10">
      {contactItems.map((item, index) => (
        <div
          key={index}
          className="border rounded-md p-5 bg-white text-center w-full lg:w-[32%] md:w-[48%]"
        >
          <Image
            src={item.img}
            width={50}
            height={50}
            alt={item.alt}
            aria-label={item.alt}
          />
          <h4 className="text-2xl text-left font-semibold mt-3">
            {item.title}
          </h4>
          <p className="text-gray-600 text-left mt-2">{item.text}</p>
        </div>
      ))}
    </div>
  );
};

export default ProductContact;
