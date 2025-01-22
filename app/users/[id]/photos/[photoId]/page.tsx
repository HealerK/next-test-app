import React from "react";

interface Props {
  params: { id: number; photoId: number };
}

const PhotDetail = ({ params: { id, photoId } }: Props) => {
  return (
    <div>
      PhotDetail {id} {photoId}
    </div>
  );
};

export default PhotDetail;
