import PropTypes from "prop-types";

const Bookmark = ({
  selectedCard,
  totalRemainingCredit,
  totalCredit,
  totalPrice,
}) => {
  return (
    <div className="bg-white p-7 rounded-lg mt-4">
      <h2 className="text-[#2F80ED] text-lg font-bold border-b-2 border-[#1c1b1b33] pb-4">
        Credit Hour Remaining {totalRemainingCredit} hr
      </h2>
      <h1 className="text-xl font-bold mt-4 mb-5">Course Name</h1>
      <div className="mb-5 font-normal text-base text-[#1c1b1b99]">
        <ol className="list-decimal px-5">
          {selectedCard.map((data, idx) => (
            <li key={idx}> {data.title}</li>
          ))}
        </ol>
      </div>

      <h3 className="text-base font-medium pb-4 mb-5 border-t-2 pt-4 border-b-2 border-[#1c1b1b33]">
        Total Credit Hour : {totalCredit}
      </h3>
      <h3 className="text-base font-semibold mb-5">
        {" "}
        Total Price : {totalPrice} USD{" "}
      </h3>
    </div>
  );
};

Bookmark.propTypes = {
  selectedCard: PropTypes.array,
  totalRemainingCredit: PropTypes.number,
  totalCredit: PropTypes.number,
  totalPrice: PropTypes.number,
};

export default Bookmark;
