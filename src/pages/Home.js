import React from 'react';
import "./Home.css";
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import {Link} from 'react-router-dom'



const Home = () => {
  return (
    <div className='home'>
      <Carousel className="imageCarousel" autoPlay interval="3000" infiniteLoop>
        
      <Link to="https://www.amazon.in/gp/slredirect/picassoRedirect.html/ref=pa_sp_atf_aps_sr_pg1_1?ie=UTF8&adId=A10234931B3L7297F24PY&url=%2FTest-Exclusive_2020_1174-Multi-3GB-Storage%2Fdp%2FB089MT34QG%2Fref%3Dsr_1_1_sspa%3Fdchild%3D1%26keywords%3Doneplus%2B9%26qid%3D1624162748%26sr%3D8-1-spons%26psc%3D1&qualifier=1624162748&id=7230093721294012&widgetName=sp_atf">
        <div>
        
        <img src="https://mamaearth.in/_next/image?url=https%3A%2F%2Fimages.ctfassets.net%2F66mrrren2unf%2F6JPeA3wYqds7GKPM2fxgxB%2F41af2cbf25de3d92b98dd3a1f92ec3d3%2FDesktop__15_.jpg&w=1920&q=60"
        alt="homie" className="posterImage"/>
        <p className="Imagi"></p>
        </div>
        </Link>

        <Link to="https://www.amazon.in/gp/slredirect/picassoRedirect.html/ref=pa_sp_atf_aps_sr_pg1_1?ie=UTF8&adId=A10234931B3L7297F24PY&url=%2FTest-Exclusive_2020_1174-Multi-3GB-Storage%2Fdp%2FB089MT34QG%2Fref%3Dsr_1_1_sspa%3Fdchild%3D1%26keywords%3Doneplus%2B9%26qid%3D1624162748%26sr%3D8-1-spons%26psc%3D1&qualifier=1624162748&id=7230093721294012&widgetName=sp_atf">
        <div>
        <img src="https://mamaearth.in/_next/image?url=https%3A%2F%2Fimages.ctfassets.net%2F66mrrren2unf%2F6wAtWFju4U4OaJcXqWSACQ%2F59a626efcc16f9497cdb044b8e184d7d%2FDesktop_WCTA.jpg&w=1920&q=60"
        alt="homie" className="posterImage"  />
        <p className="Imagi"></p>
        </div>
        </Link>

        <Link to="https://www.amazon.in/gp/slredirect/picassoRedirect.html/ref=pa_sp_atf_aps_sr_pg1_1?ie=UTF8&adId=A10234931B3L7297F24PY&url=%2FTest-Exclusive_2020_1174-Multi-3GB-Storage%2Fdp%2FB089MT34QG%2Fref%3Dsr_1_1_sspa%3Fdchild%3D1%26keywords%3Doneplus%2B9%26qid%3D1624162748%26sr%3D8-1-spons%26psc%3D1&qualifier=1624162748&id=7230093721294012&widgetName=sp_atf">
        <div>
        <img src="https://mamaearth.in/_next/image?url=https%3A%2F%2Fimages.ctfassets.net%2F66mrrren2unf%2F6UADsp652qgHSvx984Kdbg%2F5049ba3a421cfc5e3fa4417380dfc62c%2FVitamin_C___1920x512___1___1_.jpg&w=1920&q=60"
        alt="homie" className="posterImage"/>
        <p className="Imagi"></p>
        </div>
        </Link>
      </Carousel>
    </div>
  );
};


export default Home;