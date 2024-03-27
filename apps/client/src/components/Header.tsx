'use client';

import { useTranslations } from 'next-intl';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import profile_pic from '../lib/assets/icons/profil-skeltone.jpg';
import logo from '../lib/assets/icons/tdaal-logo.png';

function Header() {
  const t = useTranslations('Header');
  const [profile, setProfile] = useState(false);

  return (
    <nav className="fixed top-0 flex items-center justify-between w-full h-16 py-0 overflow-hidden border-b border-gray-300 px-7">
      {/* <div className="lg:max-w-[96%] max-w-full"> */}
      <Link
        href="/home"
        className="hover:bg-[#052c4b] hover:text-[#fff] cursor-pointer block p-2 text-[#052c4b] transition capitalize"
        onClick={() => window.scroll(0, 0)}
      >
        <Image
          src={logo}
          className="h-20 rounded-lg lg:h-12 w-9"
          alt="tdaal logo"
          width={36}
          height={48}
        />
      </Link>
      <div className="flex items-center justify-center">
        <div className="hover:bg-secondary hover:text-white hover:shadow-[0_7px_25px_rgba(0,0,0,0.08)] px-5 py-1 text-xs font-bold text-center uppercase block min-w-fit h-fit min-h-[30px] transition-[300ms] duration-[ease-in] rounded-sm cursor-pointer tr text-primary-foreground bg-primary">
          <Link href="/auth/sign_up">{t('createAccount')}</Link>
          <span>/</span>

          <Link href="/auth/sign_in">{t('login')}</Link>
        </div>
        <Link href="/auth/sign_in" className="hover:bg-secondary hover:text-white hover:shadow-[0_7px_25px_rgba(0,0,0,0.08)] px-5 py-1 text-xs font-bold text-center uppercase block min-w-fit h-fit min-h-[30px] transition-[300ms] duration-[ease-in] rounded-sm cursor-pointer tr text-primary-foreground bg-primary">
          {t('login')}
        </Link>
        <span className="border-l-2 border-l-[#052c4b] translate-x-1/2 h-6">
          &nbsp;
        </span>
        <Link href="/track" className="button_p">
          {t('bookings')}
        </Link>

        <div
          className={
            profile
              ? 'relative flex hover:bg-[#ecf6fd] items-center px-3 py-1 rounded-sm cursor-pointer transition rounded-tr-2xl'
              : 'relative flex hover:bg-[#ecf6fd] items-center px-3 py-1 rounded-sm cursor-pointer transition'
          }
          onClick={() => setProfile(!profile)}
        >
          <span className="text-[#ecf6fd] capitalize">{t('userName')}</span>
          <Image
            src={profile_pic}
            className="w-8 h-8 mx-2 rounded-[50%]"
            alt="profile_pic"
            width={32}
            height={32}
          />
          {profile ? (
            <i className="fa-solid fa-caret-up"></i>
          ) : (
            <i className="fa-solid fa-caret-down"></i>
          )}
          {profile && (
            <div className="absolute p-1 top-full w-full left-0 right-0 z-50 rounded-e-lg bg-[#fff]">
              <Link href="/account" onClick={() => window.scroll(0, 0)}>
                {t('accountSettings')}
              </Link>
              <Link href="/my_trips">{t('myTrips')}</Link>
              {/* <Link href="#" onClick={() => window.scroll(0, 0)}>
                {t('myTrips')}
              </Link> */}
              <button
                // href="/auth/sign_in"
                onClick={() => console.log('logout')}
              >
                {t('logout')}
              </button>
            </div>
          )}
        </div>

        {/* <LanguageSwitcher /> */}
      </div>
      {/* </div> */}
    </nav>
  );
}

export default Header;
