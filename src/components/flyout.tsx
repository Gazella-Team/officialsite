import { Fragment } from 'react';
import { Popover, Transition } from '@headlessui/react';
import { ChevronDownIcon, PhoneIcon, PlayCircleIcon } from '@heroicons/react/20/solid';
import {
  ArrowPathIcon,
  ChartPieIcon,
  CursorArrowRaysIcon,
  FingerPrintIcon,
  SquaresPlusIcon,
} from '@heroicons/react/24/outline';

import Link from 'next/link';

interface Sublink {
  name: string;
  description: string;
  href: string;
  icon: any; // Adjust the type according to the actual type of icon
}

interface FlyoutProps {
  linkName: string;
  sublinks: Sublink[];
}

export default function Flyout({ linkName, sublinks }: FlyoutProps) {
  return (
    <Popover className="relative">
      <Popover.Button className="inline-flex items-center gap-x-1 text-[15px] font-[500] leading-6 text-main">
        <span>{linkName}</span>
        <ChevronDownIcon className="h-5 w-5" aria-hidden="true" />
      </Popover.Button>

      <Transition
        as={Fragment}
        enter="transition ease-out duration-200"
        enterFrom="opacity-0 translate-y-1"
        enterTo="opacity-100 translate-y-0"
        leave="transition ease-in duration-150"
        leaveFrom="opacity-100 translate-y-0"
        leaveTo="opacity-0 translate-y-1"
      >
        <Popover.Panel className="absolute left-14 w-screen right-0 z-10 top-[50px] flex max-w-max -translate-x-1/2 px-4">
          <div className="w-screen max-w-md flex-auto overflow-hidden rounded-[14px] bg-white text-sm leading-6 shadow-lg ring-1 ring-gray-900/5">
            <div className="p-4">
              {sublinks.map((item: Sublink) => (
                <div key={item.name} className="group relative flex gap-x-6 rounded-lg p-4 hover:bg-[#f1faff]">
                  <div>
                    <Link target={item.href === "https://dk.trustpilot.com/review/gazellateam.com" ? "_blank":""} href={item.href} className="font-[600] text-[16px] text-main">
                      {item.name}
                      <span className="absolute inset-0" />
                    </Link>
                    <p className="mt-1 text-gray-600 font-[400] text-[16px]">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </Popover.Panel>
      </Transition>
    </Popover>
  );
}
