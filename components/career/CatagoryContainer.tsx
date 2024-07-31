import React from 'react'
import './CatagoryContainer.scss'
import { ntr } from '@/utils/fonts/fonts'

interface CategoryProps {
  title: string;
  about: string;
}

export const CatagoryContainer: React.FC<CategoryProps> = ({ title, about }) => {
  return (
    <>
      <div className="cc-conatiner">
          <div className="cc-logo"></div>
          <div className={`cc-title ${ntr.className}`}>
            <p>{title}</p>
          </div>
          <div className="cc-about">
            <p>{about}</p>
          </div>
      </div>
    </>
  )
}
