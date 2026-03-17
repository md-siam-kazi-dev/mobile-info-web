const PhoneCard = ({ phone }) => {
  console.log(phone);
  return (
    <div>
      <img
        src={phone.image_url}
        alt={phone.image_url}
        
      ></img>
    </div>
  );
};
export default PhoneCard;
