import {
  Avatar,
  AvatarImage,
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuTrigger,
  cn,
} from '@tdaal/libs';
import { ChevronDown } from 'lucide-react';
import Link from 'next/link';

import Image from 'next/image';
import avatar from '../../../lib/assets/icons/tdaal-logo.png';

const NavbarProfile = () => {
  return (
    <div className={cn('relative cursor-pointer text-base')}>
      <DropdownMenu>
        <DropdownMenuTrigger className="flex min-w-52 items-center gap-2.5 border-none p-2 pr-4 outline-none">
          {/* <Image
            alt="avatar"
            width={32}
            height={32}
            className="rounded-full"
          /> */}
          <Avatar>
        <AvatarImage src={`${avatar}`} />
      </Avatar>

          <p className="flex flex-col flex-1 text-base">
            <span className="text-left text-sm font-normal text-[#212b35]">
              name
            </span>
            <span className="text-sm font-normal text-left text-primary">
              role
              </span>
          </p>
          <ChevronDown size={16} strokeWidth={1} />
        </DropdownMenuTrigger>
        <DropdownMenuContent className="absolute -top-1 w-52 rounded-none p-0 ltr:-right-[102px] rtl:-left-[102px]">
        <DropdownMenuItem
                  className={cn(
                    'hover:bg-primary-300 hover:text-white-50 focus:bg-primary-300 focus:text-white-50 cursor-pointer rounded-none px-6 py-2 text-sm font-normal ltr:justify-start rtl:justify-end ',

                  )}
                >
                  <Link
                    className="flex items-center justify-start gap-2"
                    href={'#'}
                  >
                    title
                  </Link>
                </DropdownMenuItem>

        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
};

export default NavbarProfile;
