"use client";
import { useClickOutside } from "@/app/hooks/useClickOutside";
import { useRouter } from "next/navigation";
import { FC, ReactNode, useRef } from "react";

interface ModalUIProps {
  title?: string;
  children: ReactNode;
}

const ModalUI: FC<ModalUIProps> = ({ children }) => {
  const modalRef = useRef<HTMLDivElement | null>(null);
  const router = useRouter();
  console.log(modalRef.current);

  const close = () => {
    router.back();
  };
  useClickOutside(modalRef, close);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50">
      <div
        ref={modalRef}
        className="bg-white  rounded-lg shadow-lg w-11/12 max-w-md p-3 relative"
      >
        <div className="">{children}</div>
      </div>
    </div>
  );
};

export default ModalUI;
