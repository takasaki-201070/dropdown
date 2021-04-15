import { Dialog, Transition } from "@headlessui/react";
import clsx from "clsx";
import { DOMAttributes, Fragment, ReactNode, VFC } from "react";

type Props = {
  className?: string;
  open: boolean;
  onClick?: DOMAttributes<HTMLButtonElement>["onClick"];
  onClose: () => void;
  children?: ReactNode;
  drawer?: boolean;
};
export const Modal: VFC<Props> = (props) => {
  return (
    <Transition show={props.open} as={Fragment}>
      <Dialog
        as="div"
        open={props.open}
        onClose={props.onClose}
        static
        className="fixed inset-0 z-10 overflow-y-auto"
      >
        <div className="min-h-screen px-4 text-center">
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <Dialog.Overlay className="fixed inset-0" />
          </Transition.Child>

          {/* <Dialog.Overlay
              as="div"
              className="fixed inset-0 bg-black opacity-20 w-full h-screen z-20"
            /> */}

          {/* <div
        className={clsx(
          "fixed w-full h-full inset-0 flex justify-center transition-all outline-none focus:outline-none",
          {
            "items-center": !props.drawer,
            "items-end": props.drawer,
          }
        )}
      > */}
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0 scale-95"
            enterTo="opacity-100 scale-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100 scale-100"
            leaveTo="opacity-0 scale-95"
          >
            <div className="inline-block w-full max-w-md p-6 my-8 overflow-hidden text-left align-middle transition-all transform bg-white shadow-xl rounded-2xl">
              <Dialog.Title>削除してもよいでしょうか</Dialog.Title>
              <div className="mt-2">
                <p className="text-sm text-gray-500">
                  Your payment has been successfully submitted. We’ve sent your
                  an email with all of the details of your order.
                </p>
              </div>

              {/* <div
            className={clsx(
              "border-0 rounded-lg shadow-lg relative flex flex-col w-full z-50 bg-white outline-none focus:outline-none",
              props.className
            )} 
           > */}
              {props.children}
              {/* </div> */}
            </div>
          </Transition.Child>
        </div>
        {/* <div className="opacity-20 fixed inset-0 z-10 bg-black" /> */}
        {/* </div> */}
      </Dialog>
    </Transition>
  );
};
