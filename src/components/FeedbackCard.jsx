import { quotes } from "../assets";


const FeedbackCard = ( {content, name, title, img} ) => {
  return (
    <div className="flex flex-col justify-between item px-10 py-12 rounded-[20px] max-w-[370px] mr:0 sm:mr-5 md:mr-10 my-5 feedback-card">
      <img src={quotes} alt="qoutes" className="w-[42px] h-[27px] object-contain" />
      <p className="text-lg my-10">{content}</p>
      <div className="flex flex-row items-center">
        <img src={img} alt={name} className="w-12 h-12 rounded-full" />
        <div className="flex flex-col ml-4">
          <h4 className="font-semibold text-[18px] leading-[32px]">{name}</h4>
          <p className="text-dimWhite">{title}</p>
        </div>
      </div>
    </div>
  )
}

export default FeedbackCard