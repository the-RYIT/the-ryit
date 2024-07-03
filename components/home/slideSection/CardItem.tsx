import Image from "next/image";

import style from "./style.module.scss";

interface ICardItemProps {
  title: string;
  subText: string;
  img: string;
}

const CardItem = ({ title, subText, img }: ICardItemProps) => {
  return (
    <div className={style.card}>
      <div>
        <Image src={img} alt="building-icon" className={style.card_icon} />
      </div>
      <div>
        <h2 className={style.card_title}>{title}</h2>
        <p className={style.card_subText}>{subText}</p>
      </div>
    </div>
  );
};

export default CardItem;
