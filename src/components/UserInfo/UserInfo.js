import "./UserInfo.css";

export default function UserInfo() {
  return (
    <div className={'user-info'}>
        <img src="https://www.themoviedb.org/assets/2/v4/logos/v2/blue_square_2-d537fb228cf3ded904ef09b136fe3fec72548ebc1fea3fbbd1ad9e36364db38b.svg" alt="tmdb"/>
        <div className={'user-img'}>
            <img src="https://pbs.twimg.com/profile_images/1069291085925679104/J2EVb9XB_400x400.jpg" alt="avaka"/>
            <span>ErgoLied</span>
        </div>
    </div>
  );
}