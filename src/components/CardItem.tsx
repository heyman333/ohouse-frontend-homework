import React from "react";
import styled from "styled-components";
import { Card } from "../modules/Cards";
import BookmarkIcon from "./bookmark/BookmarkIcon";

const CardItemBlock = styled.div`
  flex: 25%;
  padding: 0 10px 30px 10px;
  cursor: pointer;

  .profile {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    margin-bottom: 10px;

    .profile-image {
      width: 36px;
      height: 36px;
      object-fit: contain;
      border-radius: 999px;
    }

    .nickname {
      font-weight: bold;
      margin-left: 10px;
    }
  }

  .content {
    position: relative;

    .content-image {
      width: 100%;
      border-radius: 10px;
    }
  }

  .bookmark-wrapper {
    position: absolute;
    right: 10px;
    bottom: 10px;
  }
`;

type CardItemProps = {
  card: Card;
};

function CardItem({ card }: CardItemProps) {
  const { image_url, nickname, profile_image_url, isBookmarked } = card;
  return (
    <CardItemBlock>
      <div className="profile">
        <img className="profile-image" src={profile_image_url} />
        <div className="nickname">{nickname}</div>
      </div>
      <div className="content">
        <img className="content-image" src={image_url} />
        <div className="bookmark-wrapper">
          <BookmarkIcon isBookmarked={isBookmarked} />
        </div>
      </div>
    </CardItemBlock>
  );
}

export default CardItem;