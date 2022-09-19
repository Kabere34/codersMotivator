import React from 'react'
import './singlepost.css';
import profileimage from '../images/sitting.jpeg'
import { MdChatBubbleOutline } from "react-icons/md";
import { MdBookmark } from "react-icons/md";
import { FaShare } from "react-icons/fa";
import { FaFontAwesomeFlag } from "react-icons/fa";



function Singlepost() {
  return (
    <div className='singlepost-container'>
      <div className="container">
        <div className="singlepost-head">12/12/2022 #Category</div>
        <div className="singlepost-Title"><h2>Title</h2></div>
        <div className="singlepost-profile">


          <h5> <img src={profileimage} alt="prof pic" /> Username</h5>

        </div>
        <div className='postContent'>
        <img src={profileimage} alt="prof pic" />
        <p>In tortor dolor, vulputate vitae egestas in, placerat id erat. Etiam maximus varius lorem, quis venenatis sem molestie in. Aliquam aliquet metus vel urna suscipit lobortis. Praesent id tristique elit. Suspendisse sagittis ligula et enim pharetra maximus. Aenean convallis eget lorem sit amet laoreet. Aliquam volutpat faucibus lacinia. In vulputate magna quis nunc pellentesque, eget bibendum nunc dignissim. Nulla fermentum, felis eget accumsan pellentesque, quam orci luctus lectus, ut lobortis erat turpis sed augue. Etiam nec velit porta, ullamcorper eros ut, vestibulum mi. Suspendisse eu neque in mauris congue finibus et vitae ante. Mauris laoreet nec elit nec sagittis. Nulla hendrerit neque est, a fermentum felis scelerisque eget. Donec enim magna, finibu </p>

        <div className='postFeedback'>
          <div> <span><MdChatBubbleOutline /> 20comments</span>
                <span><FaShare/> share </span>
                <span><MdBookmark/> share </span>
                <span><FaFontAwesomeFlag/> Flag </span>
          </div>
        </div>
        </div>
      </div>

    </div>
  )
}

export default Singlepost
