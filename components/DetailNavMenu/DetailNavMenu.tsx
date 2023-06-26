'use client';
import { EllipsisHorizontalIcon, XMarkIcon } from '@heroicons/react/24/outline';
import JSZip from 'jszip';
import { useTranslations } from 'next-intl';
import React, { useState } from 'react';

type DetailNavMenuType = {
  fontName: string;
  createdBy: string;
  fileName: string;
};

const DetailNavMenu = ({ fontName, fileName, createdBy }: DetailNavMenuType) => {
  const [isHide, setIsHide] = useState<boolean>(true);
  const t = useTranslations('Index');
  const [showAlert, setShowAlert] = useState<boolean>(false);

  const handleButtonClick = () => {
    setShowAlert(true);
    setTimeout(() => {
      setShowAlert(false);
    }, 3000);
  };

  const showModal = () => {
    setIsHide((prev) => !prev);
  };

  const handleDownload = async (name: string) => {
    console.log(name, 'name');
    try {
      const response = await fetch(`/api/fonts?name=${name}`);
      const data = await response.json();
      const zip = new JSZip();
      const folder: any = zip.folder('fonts');
      console.log(data);

      // Define the font files to include in the zip
      const fontFiles = data;

      // Add font files to the zip
      await Promise.all(
        fontFiles.map(async (file: any) => {
          const res: any = await fetch(file.url);
          const blob = await res.blob();
          folder.file(file.name, blob);
        })
      );

      // Generate the zip file
      zip.generateAsync({ type: 'blob' }).then((content) => {
        // Create a temporary link and trigger the download
        const link = document.createElement('a');
        link.href = URL.createObjectURL(content);
        link.download = name;
        link.click();
      });
    } catch (error) {
      setShowAlert(true);
      setTimeout(() => {
        setShowAlert(false);
      }, 3000);
    }
  };

  return (
    <div className="text-lg ">
      <div className="flex flex-row justify-between ">
        <div className="flex flex-col items-left">
          <p className="mr-5 font-medium ">{fontName}</p>
          <p className="text-sm">{createdBy === undefined && t('create-by')}</p>
        </div>
        <div className="flex flex-row items-center">
          <p className="hidden mr-5 md:flex">{t('terms-and-conditions')}</p>
          <div className="relative">
            <p
              onClick={() => {
                handleDownload(fileName);
              }}
              className="p-4 px-3 py-2 mr-4 border-2 border-black rounded-sm cursor-pointer bg-secondary text-darkblue"
            >
              {t('download')}
            </p>
            {showAlert && (
              <div className="absolute p-2 leading-normal border-2 rounded right-3 bg-primary dark:bg-lightblue min-w-max">
                <p>Download ရယူရန်မရသေးပါ။ အဆင်မပြေမှုအတွက်တောင်းပန်ပါတယ်။</p>
              </div>
            )}
          </div>
          <div className="relative">
            <EllipsisHorizontalIcon className="w-10 h-10 text-secondary" onClick={showModal} />
            {!isHide && (
              <div className="absolute p-2 leading-normal border-2 rounded bg-primary dark:bg-lightblue min-w-max">
                <div className="flex flex-row justify-between mb-2 ">
                  <p>အစီရင်ခံရန်</p>
                  <XMarkIcon className="w-6" onClick={showModal} />
                </div>
                <p>ဒီဖောင့်ကိုသင်ပိုင်ပါသည်</p>
                <p>ဖောင့်ကိုဝက်ဆိုဒ်မှဖျက်ပါမည်</p>
                <p>ဒီဖောင့်ကိုအခကြေးငွေပေးဆောင်ရပါမည်</p>
              </div>
            )}
          </div>
        </div>
      </div>
      <p className="flex justify-end mt-5 md:hidden">အကြောင်းနှင့်မူပိုင်ခွင့်</p>
    </div>
  );
};

export default DetailNavMenu;
