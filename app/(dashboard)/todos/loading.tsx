"use client";

const Loading = () => {
  console.log(window.location.pathname);
  return (
    <div>
      <div className="animate-spin h-5 w-5">⏱</div>
      Loading....
    </div>
  );
};

export default Loading;
