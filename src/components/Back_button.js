import React, { useEffect } from 'react';

function Back_button({ history }) {
  
  const goBack = () => {
    history.goBack();
  };


  return (
    <div>
      <button onClick={goBack}>뒤로가기</button>

    </div>
  );
}

export default Back_button;