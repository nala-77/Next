import Image, { StaticImageData } from "next/image";
import React from "react";
import BookForm from "../BookForm/BookForm";
import Title from "../Title/Title";

interface bookProps {
  img: string | StaticImageData;
  head: string;
}

const Book = ({ img, head }: bookProps) => {
  return (
    <section className="relative px-60 py-15 bg-pattern max-2xl:px-9% max-594:px-30 bg-no-repeat bg-cover max-1187:flex max-1187:justify-center max-1187:items-center">
      <div className="max-w-[734px]  text-center  max-1187:z-10 relative">
        <Title head={head} />
        <BookForm />
      </div>

      <div className="absolute right-[5%] -bottom-[10%] w-5/12  max-1187:w-3/5 max-1187:top-2/4 max-1187:left-2/4 max-1187:-translate-x-1/2 max-1187:-translate-y-1/2 ">
        <Image src={img} alt={head} className="w-full" />
      </div>
    </section>
  );
};

export default Book;
