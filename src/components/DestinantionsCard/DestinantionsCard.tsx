import Image, { StaticImageData } from "next/image";
import React from "react";

interface DestinantionsCardProps {
  image: string | StaticImageData;
  title: string;
  price: string;
  date: string;
  time: string;
  desc: string;
}

const DestinantionsCard = ({
  image,
  title,
  price,
  date,
  time,
  desc,
}: DestinantionsCardProps) => {
  return (
    <div className="w-1/3  max-lg:w-6/12 max-724:w-4/5">
      <div className="mb-4">
        <Image src={image} alt={title} className="w-full" />
      </div>

      <div className="flex flex-col gap-3">
        <h3 className="text-xl font-bold">{title}</h3>
        <p className="font-semibold text-lg text-myBlack max-1187:text-sm mr-1">
          from
          <span className="text-main-color font-bold text-2xl ml-1">
            {price}&euro;
          </span>
        </p>

        <div className="flex justify-between items-center text-main-color font-semibold">
          <div className="flex gap-x-1.5 items-center">
            <svg
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M0.857147 5.42858H19.1429M3.14286 0.857147H16.8571C17.4634 0.857147 18.0447 1.09796 18.4734 1.52662C18.902 1.95527 19.1429 2.53665 19.1429 3.14286V16.8571C19.1429 17.4634 18.902 18.0447 18.4734 18.4734C18.0447 18.902 17.4634 19.1429 16.8571 19.1429H3.14286C2.53665 19.1429 1.95527 18.902 1.52662 18.4734C1.09796 18.0447 0.857147 17.4634 0.857147 16.8571V3.14286C0.857147 2.53665 1.09796 1.95527 1.52662 1.52662C1.95527 1.09796 2.53665 0.857147 3.14286 0.857147V0.857147Z"
                stroke="#FA8B02"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M10 11.1429C10.6312 11.1429 11.1429 10.6312 11.1429 10C11.1429 9.36882 10.6312 8.85715 10 8.85715C9.36882 8.85715 8.85715 9.36882 8.85715 10C8.85715 10.6312 9.36882 11.1429 10 11.1429Z"
                fill="#FA8B02"
              />
              <path
                d="M5.42858 11.1429C6.05976 11.1429 6.57144 10.6312 6.57144 10C6.57144 9.36882 6.05976 8.85715 5.42858 8.85715C4.7974 8.85715 4.28572 9.36882 4.28572 10C4.28572 10.6312 4.7974 11.1429 5.42858 11.1429Z"
                fill="#FA8B02"
              />
              <path
                d="M14.5714 11.1429C15.2026 11.1429 15.7143 10.6312 15.7143 10C15.7143 9.36882 15.2026 8.85715 14.5714 8.85715C13.9402 8.85715 13.4286 9.36882 13.4286 10C13.4286 10.6312 13.9402 11.1429 14.5714 11.1429Z"
                fill="#FA8B02"
              />
              <path
                d="M10 15.7143C10.6312 15.7143 11.1429 15.2026 11.1429 14.5714C11.1429 13.9402 10.6312 13.4286 10 13.4286C9.36882 13.4286 8.85715 13.9402 8.85715 14.5714C8.85715 15.2026 9.36882 15.7143 10 15.7143Z"
                fill="#FA8B02"
              />
              <path
                d="M5.42858 15.7143C6.05976 15.7143 6.57144 15.2026 6.57144 14.5714C6.57144 13.9402 6.05976 13.4286 5.42858 13.4286C4.7974 13.4286 4.28572 13.9402 4.28572 14.5714C4.28572 15.2026 4.7974 15.7143 5.42858 15.7143Z"
                fill="#FA8B02"
              />
              <path
                d="M14.5714 15.7143C15.2026 15.7143 15.7143 15.2026 15.7143 14.5714C15.7143 13.9402 15.2026 13.4286 14.5714 13.4286C13.9402 13.4286 13.4286 13.9402 13.4286 14.5714C13.4286 15.2026 13.9402 15.7143 14.5714 15.7143Z"
                fill="#FA8B02"
              />
            </svg>

            <p className="capitalize max-1187:text-sm">{date}</p>
          </div>

          <div className="flex gap-x-1.5 items-center">
            <svg
              width="25"
              height="16"
              viewBox="0 0 25 16"
              fill="#FA8B02"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M8.42817 3.73352C9.12437 1.29283 10.5301 0.0724757 12.56 0.0924814C14.5246 0.112487 15.9277 1.36351 16.5705 3.73886C16.6559 3.49479 16.7119 3.32541 16.7732 3.15736C17.252 1.86632 18.179 1.09677 19.542 0.984737C20.7957 0.883375 21.8093 1.4342 22.4415 2.52251C23.1257 3.69351 23.0484 4.87518 22.2401 5.96083C21.96 6.3356 21.9827 6.43697 22.3988 6.64769C23.7966 7.35189 24.4821 8.5269 24.4968 10.0887C24.5154 12.0039 24.5141 12.0052 22.6656 12.6134C22.1827 12.7845 21.6821 12.9004 21.1732 12.9588C20.8677 12.9868 20.625 12.8868 20.577 12.5681C20.529 12.2493 20.7317 12.0679 21.0304 12.0186C21.7556 11.91 22.4627 11.7036 23.1324 11.4051C23.3098 11.3237 23.5325 11.2717 23.5325 11.0116C23.5325 10.2807 23.6259 9.53652 23.2924 8.84699C22.8803 7.99474 22.2321 7.40791 21.2705 7.29321C20.2753 7.18852 19.2721 7.18584 18.2763 7.28521C18.0118 7.31695 17.7544 7.39268 17.5148 7.50927C16.7346 7.86271 16.7252 7.98141 17.3134 8.60025C18.1173 9.41699 18.5896 10.5029 18.6391 11.6478C18.6631 12.1813 18.5831 12.7228 18.6604 13.2482C18.7938 14.1192 18.3804 14.5019 17.6255 14.8194C14.0138 16.3371 10.4581 16.2718 6.91841 14.5966C6.49562 14.3966 6.31423 14.1445 6.34758 13.6737C6.38492 13.1402 6.36225 12.6067 6.34758 12.0732C6.32357 10.6062 6.82638 9.36847 7.91603 8.39886C8.2788 8.0761 8.16143 7.93206 7.85468 7.716C6.84505 7.00379 3.58679 7.0198 2.58917 7.75201C1.68891 8.41753 1.16743 9.98331 1.47151 11.0556C1.54087 11.2957 1.73826 11.3437 1.90764 11.4211C2.5365 11.7034 3.2011 11.8981 3.88287 11.9999C4.19763 12.0466 4.46704 12.1826 4.42303 12.5454C4.37368 12.9455 4.06026 12.9962 3.71749 12.9455C2.69586 12.7948 1.74493 12.4307 0.821995 11.9826C0.737409 11.9512 0.663762 11.8959 0.610012 11.8235C0.556263 11.751 0.524727 11.6645 0.519241 11.5744C0.531245 10.5368 0.367198 9.48584 0.821995 8.48689C1.19136 7.64324 1.86045 6.96655 2.69987 6.58768C2.96661 6.46364 3.09998 6.39695 2.85724 6.08353C1.96365 4.95521 1.84629 3.72419 2.5905 2.4825C3.23602 1.40619 4.25364 0.863369 5.50734 0.991405C6.98909 1.14212 7.91869 2.02103 8.31881 3.45478C8.33615 3.51746 8.36949 3.57615 8.42817 3.73352ZM12.504 8.12812C11.9705 8.12812 11.437 8.10944 10.9035 8.12812C9.96236 8.17328 9.07244 8.57021 8.41 9.24032C7.74755 9.91042 7.36087 10.8048 7.32652 11.7465C7.31185 12.1906 7.35587 12.6387 7.30785 13.0802C7.25184 13.5937 7.48124 13.8284 7.9307 14.0138C10.8155 15.1901 13.715 15.2542 16.6385 14.1819C17.6935 13.7937 17.6895 13.7817 17.6882 12.6868C17.6882 12.376 17.6882 12.0652 17.6802 11.7532C17.6465 10.8111 17.2604 9.91607 16.5981 9.24523C15.9359 8.57438 15.046 8.17665 14.1045 8.13078C13.571 8.10811 13.0375 8.12812 12.504 8.12812ZM15.5542 4.08029C15.5494 3.27097 15.2234 2.4967 14.6477 1.9278C14.0721 1.3589 13.294 1.04198 12.4847 1.04675C11.6753 1.05153 10.9011 1.37761 10.3322 1.95326C9.76328 2.52891 9.44636 3.30698 9.45113 4.1163C9.4618 5.76077 10.8862 7.17451 12.5213 7.16117C14.1565 7.14784 15.5716 5.72476 15.5542 4.08029ZM5.2766 6.25158C5.84942 6.24384 6.39579 6.00922 6.79584 5.59916C7.19589 5.18911 7.41696 4.63712 7.41055 4.06429C7.39054 2.89328 6.37692 1.89833 5.21659 1.91967C4.05625 1.94101 3.0493 2.97464 3.0693 4.1243C3.0867 4.69686 3.32734 5.2399 3.73979 5.6374C4.15224 6.0349 4.7038 6.25533 5.2766 6.25158ZM19.7541 6.25158C20.3266 6.24787 20.875 6.0208 21.2826 5.61873C21.6901 5.21665 21.9246 4.67135 21.936 4.09896C21.9216 3.52664 21.6886 2.98157 21.2847 2.57576C20.8809 2.16994 20.337 1.93421 19.7648 1.917C19.1913 1.92765 18.6444 2.16055 18.2393 2.56661C17.8343 2.97267 17.6027 3.52015 17.5935 4.09363C17.5949 4.6661 17.823 5.21471 18.2279 5.61939C18.6329 6.02406 19.1816 6.25186 19.7541 6.25291V6.25158ZM9.96995 7.20385C9.12479 6.46794 8.58493 5.44292 8.45618 4.32969C8.30947 4.76849 8.25346 5.0339 8.13609 5.2633C7.9427 5.64874 7.46923 6.0902 7.55726 6.37028C7.65462 6.6877 8.30014 6.79573 8.60022 7.09982C9.01901 7.52794 9.40312 7.5893 9.96995 7.20385ZM14.974 7.27721C15.4529 7.33722 15.7423 7.712 16.101 7.35189C16.4425 7.00254 16.8507 6.72542 17.3014 6.53699C17.5001 6.45564 17.6201 6.36094 17.4227 6.15955C16.968 5.69675 16.7852 5.09258 16.5345 4.33103C16.3878 5.58339 15.8476 6.45564 14.9727 7.27721H14.974Z"
                fill="#FA8B02"
              />
            </svg>

            <p className="max-1187:text-sm">{time} PP</p>
          </div>
        </div>

        <p className="text-lg text-myBlack max-1187:text-sm max-1187:text-base">{desc}</p>
      </div>
    </div>
  );
};

export default DestinantionsCard;
