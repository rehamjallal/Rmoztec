import React from 'react';

import img from '../images/firstImg.png'
function FirstSlide() {
    return (
        <div className="firstSection">
            <div className='container' >
                <div className="content">
                    <div className="text">
                        <h2>مؤسسة رموز للتكنولوجيا والمعلومات</h2>
                        <p>نوفر لك الحلول التقنية الأفضل لتحقيق النجاح الرقمي</p>
                        <p>نحن فريق من الخبراء في البرمجة، التصميم، والتسويق الإلكتروني، نقدم لك خدمات مبتكرة ومتطورة تلبي احتياجاتك وتحقق أهدافك.اكتشف كيف يمكننا مساعدتك في تحقيق التفوق في عالم الإنترنت اليوم!</p>
                        <h3>ارقام توثق نجاحنا</h3>
                        <ul className='successNumbers'>
                            <li><span>3500+<p>عميل راضى</p> </span></li>
                            <li><span>700+<p>تطبيق ناجح</p> </span></li>
                            <li><span>70K+<p>زيارة للموقع</p> </span></li>
                            <li><span>250+<p> موظف وموظفة</p> </span></li>
                            <li><span>15<p>سنوات الخبرة</p> </span></li>
                        </ul>
                    </div>
                </div>
                <img src={img} alt="Description" className="image" />
            </div>
        </div>
    );
}

export default FirstSlide;
