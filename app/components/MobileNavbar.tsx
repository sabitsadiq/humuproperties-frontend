"use client";
import React, { Fragment, useRef } from "react"
import { useDispatch, useSelector } from "react-redux";
import { setOpenSidebar } from "../redux/slices/authSlices";
import { Transition } from "@headlessui/react";
import { IoClose } from "react-icons/io5";
import clsx from "clsx";
import { RootState } from "../redux/store";
import { useRouter } from "next/navigation";

const MobileNavbar = () => {
    const router = useRouter()
    const { isSidebarOpen } = useSelector((state: RootState) => state.auth);
    const mobileMenuRef = useRef<HTMLDivElement | undefined>(null);
    const dispatch = useDispatch();


    const closeSidebar = () => {
        dispatch(setOpenSidebar(false));
    };

    return (
        <>
            <Transition
                show={isSidebarOpen}
                as={Fragment}
                enter='transition-opacity duration-700'
                enterFrom='opacity-x-10'
                enterTo='opacity-x-100'
                leave='transition-opacity duration-700'
                leaveFrom='opacity-x-100'
                leaveTo='opacity-x-0'
            >
                {(ref) => (
                    <div
                        ref={(node) => (mobileMenuRef.current = node)}
                        className={clsx(
                            "absolute top-0 z-50 lg:hidden w-full h-full bg-black/40 transition-all duration-700 transform ",
                            isSidebarOpen ? "translate-x-0" : "translate-x-full"
                        )}
                        onClick={() => closeSidebar()}
                    >
                        <div className='bg-white w-3/4 min-h-screen h-full'>
                            <div className='w-full flex justify-end px-5 mt-5'>
                                <button
                                    onClick={() => closeSidebar()}
                                    className='flex justify-end items-end'
                                >
                                    <IoClose size={25} />
                                </button>
                            </div>

                            <div className='-mt-10 h-full px-5'>
                                <div className='flex flex-col justify-between mt-28 gap-10'>
                                    <div className='cursor-pointer'>How it works</div>
                                    <div className='cursor-pointer'>Features</div>
                                    <div className='cursor-pointer'>Pricing</div>
                                    <div className='cursor-pointer'>Resources</div>
                                </div>
                                <div className='flex flex-col gap-3'>
                                    <button
                                        type="submit"
                                        className="w-32 h-10 bg-transparent hover:text-white hover:bg-[#120B59]  rounded-lg"
                                    >login</button>
                                    <button
                                        type="button"
                                        onClick={() => router.push('/auth/get-started')}
                                        className="w-[10rem] h-10 bg-[#120B59] hover:text-[#120B59] hover:bg-transparent hover:border border-[#120B59] rounded-lg text-white"
                                    >Get started</button>
                                </div>
                            </div>
                        </div>
                    </div>
                )}
            </Transition>
        </>
    );
};

export default MobileNavbar;