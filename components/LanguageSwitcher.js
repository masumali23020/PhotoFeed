import Image from 'next/image';
import { usePathname, useRouter } from 'next/navigation';
import { useState } from 'react';

const LanguageSwitcher = () => {
    const [showMenu, setShowMenu] = useState(false);
    const router = useRouter();
    const pathName = usePathname();
    const languages = [
        {
            'code': 'en',
            'language': "English",
            'flag': "/images/usa.png"
        },
        {
            'code': 'bn',
            'language': "Bangla",
            'flag': "/images/bd.png"
        },
    ]
    const found = languages.find(lang => pathName.includes(lang.code))
    const [selecteLanguage, setSelectedLanguage] = useState(found ?? languages[0] )
  

    const handleLanguageChange = lang => {
        setSelectedLanguage({...selecteLanguage, code: lang, language: lang === "en" ?  'English' : 'Bangla'})
        setShowMenu(false)
        router.push(`/${lang}`)

    }

   
  return (
    <div className="flex gap-4 items-center">

       
        <div className="relative">
          <button className="flex items-center gap-2" onClick={() => setShowMenu(!showMenu)}>
            <Image className="max-w-8" src={selecteLanguage.flag} alt="bangla" width={100} height={100} />
           {selecteLanguage.language}
          </button>

       
         {showMenu && (
            <div className="absolute right-0 top-full mt-2 w-40 rounded-md bg-white p-2 z-10 shadow-lg">
            {
              languages.map(entry => (
                <li
                  key={entry.code}
                  onClick={() => handleLanguageChange(entry.code)}
                  className="flex items-center gap-2 p-2 rounded-md cursor-pointer hover:bg-gray-100"
                >
                  <Image
                    className="max-w-8"
                    src={entry.flag}
                    alt="bangla"
                    height={100}
                    width={165}
                  />
                  {entry.language}
                </li>
              ))
            }
          </div>
        )}
      </div>
    </div>
  );
};
export default LanguageSwitcher
