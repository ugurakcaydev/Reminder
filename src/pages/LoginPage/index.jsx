
import React from 'react'
import { Link } from 'react-router-dom'

export default function LoginPage() {
    return (
        <div className='w-full h-[100vh] flex justify-center items-center bg-[#3e3e3e] '>
            <div className='max-w-[880px] flex-col justify-center items-center text-white text-center '>
                <div className=' flex justify-between p-2  rounded-3xl  bg-[#1e1c1c]'>
                    <div className='w-1/2 flex items-center'>
                        <div className='flex flex-col  p-7 text-center break-words'>
                            <img className='' src="./src/assets/images/loginimage1.png" alt='resim' />
                            <p className='text-xl font-bold'>Ekibinizin farklı saat dilimlerindeki kullanılabilirliğini yönetin.</p>
                            <Link to={'#'}>Daha fazlası için tıkla</Link>
                        </div>
                    </div>
                    <div className='w-[1px] h-auto bg-[#252525]' />
                    <div className='w-1/2 '>
                        <div className='flex flex-col  px-8 py-7 text-center break-words'>
                            <div>
                                <p className='text-xl font-bold'>Hesabınıza Giriş Yapın</p>
                                <div className='flex flex-col gap-y-2 p-8'>
                                    <div className='relative'>
                                        <button className='w-full flex items-center gap-x-10 p-2 bg-[#252525] font-semibold rounded-full '>
                                            <span className='w-8 p-2 bg-[#383838] rounded-full'>
                                                <svg viewBox="0 0 24 24"><path d="M5.32 14.5l-.84 3.12-3.05.07a11.95 11.95 0 01-.1-11.2h.01l2.72.49 1.19 2.7a7.13 7.13 0 00.07 4.82" fill="#FBBC04"></path><path d="M23.79 9.76a12.01 12.01 0 01-4.28 11.6l-3.42-.18-.49-3.02a7.15 7.15 0 003.08-3.65h-6.42V9.76H23.8" fill="#4285F4"></path><path d="M19.51 21.36a12 12 0 01-18.08-3.67l3.89-3.19a7.14 7.14 0 0010.28 3.66l3.91 3.2" fill="#34A853"></path><path d="M19.66 2.76l-3.89 3.19A7.14 7.14 0 005.25 9.69l-3.91-3.2a12 12 0 0118.32-3.73" fill="#EA4335"></path></svg>
                                            </span>
                                            Google ile Giriş Yap</button>
                                    </div>
                                    <div className='relative'>
                                        <button className='w-full flex items-center gap-x-10 p-2 bg-[#252525] font-semibold rounded-full '>
                                            <span className='w-8 p-2 bg-[#383838] rounded-full'>
                                                <svg viewBox="0 0 24 24"><path fill="#FF3D00" d="M0 0h11v11H0z"></path><path fill="#70BE00" d="M13 0h11v11H13z"></path><path fill="#FFB700" d="M13 13h11v11H13z"></path><path fill="#00A5F5" d="M0 13h11v11H0z"></path></svg>
                                            </span>
                                            Microsoft ile Giriş Yap</button>
                                    </div>
                                </div>
                            </div>
                            <div className='flex justify-normal items-center'>
                                <span className='w-full h-[1px] bg-[#616161]'></span>
                                <div className=' p-2 rounded-full bg-[#6161617e] text-xs font-semibold whitespace-nowrap'>ya da</div>
                                <span className='w-full h-[1px] bg-[#616161]'></span>
                            </div>
                            <div className='flex flex-col gap-y-2 p-8'>
                                <div className='flex flex-col gap-y-1'>
                                    <span className='text-base font-bold text-left'>E-posta Adresi</span>
                                    <input className='bg-[#616161] rounded-lg py-2 pl-2 placeholder:text-[#c1c1c1]' type="text" placeholder='email@example.com' />
                                </div>
                                <div className='flex flex-col gap-y-1'>
                                    <div className='flex justify-between'>
                                        <span className='text-base font-bold text-left'>Şifre</span>
                                        <button>Göster</button></div>
                                    <input className='bg-[#616161] rounded-lg py-2 pl-2' type="text" />
                                </div>
                                <div>
                                    <button className='w-full text-xl p-2 font-bold bg-[#252525] rounded-full'>Giriş Yap</button>
                                </div>
                                <div className='text-left mt-1'><Link to={'#'}>Şifreni mi unuttun?</Link> </div>

                            </div>
                        </div>
                    </div>
                </div>
                <div className='text-base'>Buralarda yeni misin? <Link to={'#'}>Hesap Oluştur</Link></div>
            </div>

        </div>
    )
}
