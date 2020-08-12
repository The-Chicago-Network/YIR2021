console.log("%c✨ LOVINGLY HANDCRAFTED BY NATHAN U ✨", "font-size: 1.5em; font-weight: 800; background: linear-gradient(to right,  #91ebff 0%,#a1ffe9 11%,#b3ff99 23%,#e4ffa1 36%,#ffd3a1 49%,#ffbda1 62%,#ff9fc7 75%,#b5a1ff 88%,#79e0ff 100%); color: rgb(64,64,64); border-radius: 1em; padding: .5em .5em .5em .5em;");
console.log(`
    * Page by Nathan Upchurch of Kom Creative (https://komcreative.com)
    * Typeface: Din 2014, by Vasily Biryukov of Paratype (https://www.paratype.com/)
    * Particles: particles.js (https://github.com/VincentGarreau/particles.js/)
    * Parallax: Rellax.js (https://github.com/dixonandmoe/rellax)
    * Animate on scroll: WOW.js https://github.com/graingert/wow
    * CSS Animations: Vivify (https://github.com/Martz90/vivify)
    * Built with SCSS
`)

//Checks for mobile browsers
window.mobileCheck = () => {
    let check = false;
    (function(a){if(/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(a)||/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(a.substr(0,4))) check = true;})(navigator.userAgent||navigator.vendor||window.opera);
    return check;
  };


// Loads particle effect
particlesJS.load('particles-js', 'assets/particles.json', function() {
    console.log('callback - particles.js config loaded');
  });



// If browser user agent != mobile, initiate animate on scroll
if (window.mobileCheck === true) {
    console.log("Animate on scroll disabled");
} else {
    new WOW().init(); 
    console.log("Animate on Scroll enabled");
    let nav = getElementByTagName("nav");
    nav.classList.add("hide");
}

// Rellax Parallax
let rellaxArr = document.getElementsByClassName("parallax");
let rellaxElems = [];

for (let i = 0; i < rellaxArr.length; i++) {
    let parallaxItem = "rellax"+i;
    let wrapperClass = "wrapper"+i;
    // Add classes to parallax elements & wrappers
    rellaxArr[i].parentElement.classList.add(wrapperClass);
    rellaxArr[i].classList.add(parallaxItem);
    rellaxElems.push([parallaxItem,wrapperClass]);
    // Create new rellax objects from parallax elements
    window[rellaxElems[i][0]] = new Rellax(eval("\'." + rellaxElems[i][0] +"\'"), {
        wrapper: eval("\'."+rellaxElems[i][1]+"\'"),
        relativeToWrapper: true
    });
}

// Equity Principles Logos
const LOGOS = [
    ['Access Living of Metropolitan Chicago','https://dl.airtable.com/.attachments/568b2c7b58df5ed28d5cb368cc7032f5/7ca7983a/AccessLiving.jpg'],
    ['Altair','https://dl.airtable.com/.attachments/6d4003ec8e4d551791536cde6d05ec0d/bd8a8bde/0010.png'],
    ['American Academy of Periodontology','https://dl.airtable.com/.attachments/6e889b6699045896f4479488bc6b147c/16005a4d/a3.jpg'],
    ['American College of Healthcare Executives','https://dl.airtable.com/.attachments/88742946560d62629cb22d04db6ddf7f/4e763c14/AmericanCollegeofHealthcareExecutiveslogo.jpg'],
    ['American Dental Association','https://dl.airtable.com/.attachments/c91d729fe7d1b08ffe0465da98a144f3/2223f782/AmericanDentalAssociation.png'],
    ['American Society of Anesthesiologists','https://dl.airtable.com/.attachments/deb916e6bf22d8ea4c5334b4ada6618e/0ef41c26/AmericanSocietyofAnesthesiologists.jpg'],
    ['American Association of Diabetes Educators ','https://dl.airtable.com/.attachments/64d777fc16324b4caddbaa1df3265b30/e292d3bf/a10.png'],
    ['American College of Surgeons','https://dl.airtable.com/.attachments/94b5995039fd04459a099e72748d48dd/255eaedd/AmericanCollegeofSurgeons.png'],
    ['American Medical Association','https://dl.airtable.com/.attachments/6faa16da5a4e1b7fce78fe4d37f84f5d/04b46563/a01.png'],
    ['Ann and Robert H. Lurie Children\'s Hospital of Chicago','https://dl.airtable.com/.attachments/db10701c83e3c8b06a703471875d2bf5/fb39d5f9/LurieChildren-sHospital.jpg'],
    ['Aon','https://dl.airtable.com/.attachments/fb4538110e2823695dcbf05623749941/3012700c/1024px-Aon_Corporation_logo.png'],
    ['Art Institute of Chicago','https://dl.airtable.com/.attachments/d741e51db2f3c316b13ca891deac5263/2d533c0c/AICColorLogo-01.jpg'],
    ['Association for Supply Chain Management','https://dl.airtable.com/.attachments/4aefd1ef8395d840ca1d117a9f12e5e5/f4e74213/ASCM.png'],
    ['Association Forum','https://dl.airtable.com/.attachments/aa0164cd4ce272bc6af294164c1a211f/9bfa3eb8/AssociationForum.jpg'],
    ['AT Kearney','https://dl.airtable.com/.attachments/dcb14180a3dd679bd8d240dd75026728/162d5c58/ATKearney.jpg'],
    ['Azteca Foods Inc.','https://dl.airtable.com/.attachments/84298ec9050d13df19e514ab25e76d4e/d9f000a0/0003.png'],
    ['Boys and Girls Clubs of Chicago','https://dl.airtable.com/.attachments/f9ddb68bd15cdb5f7c58607e9138ede2/f569ff3c/0052.png'],
    ['BPI Group','https://dl.airtable.com/.attachments/6fea9fafb4f45c56f348a649aff07cbd/7819611d/0012.jpg'],
    ['Capri Investment Group','https://dl.airtable.com/.attachments/0ab719d3e121e1e1db6212e7d84be593/7c45c6e9/0013.png'],
    ['Cara','https://dl.airtable.com/.attachments/bff2078ed801e5a256f44acd8d9dde8b/c63a7972/0053.jpg'],
    ['Caroline Rose, Inc.','https://dl.airtable.com/.attachments/32b16a8af61d39b0ee2d007021e6288b/9b8e5813/a8.jpg'],
    ['CCIM Institute','https://dl.airtable.com/.attachments/e5a4adffc5c6a8c422e5eb144c832296/33eebddb/0046.png'],
    ['Chicago Children\'s Museum','https://dl.airtable.com/.attachments/b92d6cce2ee9e08055af89b31f12cb4a/7687a802/a4.jpg'],
    ['Chicago Equity Partners','https://dl.airtable.com/.attachments/00ba4b5a40c2008462c84d37d9312ee1/510b8996/0014.png'],
    ['City Tech Collaborative','https://dl.airtable.com/.attachments/8ea51998710715cc80fd0cb1ac37c890/4b5b3a8b/0054.png'],
    ['Cook County Board of Commissioners','https://dl.airtable.com/.attachments/c4e0d7506d426d22a674435b549403d7/6d2735f1/0055.jpg'],
    ['Cotter Consulting','https://dl.airtable.com/.attachments/d94c05894e00cc4c20a014e562057fd9/b7434fd2/CotterLogo.jpg'],
    ['Cushman & Wakefield','https://dl.airtable.com/.attachments/1b10e57c907fbd9b8afaeeaf5a227f66/ef9e77c3/0015.jpg'],
    ['Dentons US LLP','https://dl.airtable.com/.attachments/73f57961913f6859cf7cc3d524517b45/531519a6/0016.jpg'],
    ['Discover Financial Services','https://dl.airtable.com/.attachments/115767c314f960c411c6dad1aca3bf81/a516ef96/0004.jpg'],
    ['Dominican University','https://dl.airtable.com/.attachments/cf741fc73c3f5cb8a9de08b3007f5af9/91eee8ed/0056.png'],
    ['DS Economics'],
    ['Easterseals','https://dl.airtable.com/.attachments/7b285ecbb10103df50cc99e06688b396/e76d2f8e/0057.png'],
    ['Economic Club of Chicago ','https://dl.airtable.com/.attachments/e4d41835865e7582f9e43bb7a7283d70/f4342b2b/a6.png'],
    ['Edward-Elmhurst Healthcare','https://dl.airtable.com/.attachments/9bd7709c27d8bbd1960ad763f313d446/cea9b2fa/0017.png'],
    ['Errand Solutions, LLC','https://dl.airtable.com/.attachments/cae80108e1ba9b6a0d50665c2fa18024/cbbea6c4/0018.png'],
    ['Fluresh LLC','https://dl.airtable.com/.attachments/de9e420e67a30b8be80a7c19850c50c4/7182a7cc/a5.png'],
    ['Forward Space','https://dl.airtable.com/.attachments/d625c3b1a2b0b13253fef5b431017b04/132ec495/0019.jpg'],
    ['Friend Health','https://dl.airtable.com/.attachments/b82bc21583549c2a0c91e1542524c9dc/2c997d2a/0023.png'],
    ['Governors State University','https://dl.airtable.com/.attachments/967c0537042dd0c210788ac849746c4b/53d27cae/0058.png'],
    ['Graham Foundation for Advanced Studies in Fine Arts','https://dl.airtable.com/.attachments/5cabe3bbb83ae8b6fcab414e17cc6973/8569f37d/11014885_10152819278442844_4528608664137835454_n.jpg'],
    ['Graham Media Group','https://dl.airtable.com/.attachments/a708718c655c90ce5d64454aa8b671e3/e780ed21/0035.jpg'],
    ['Grainger','https://dl.airtable.com/.attachments/9ae766e9462365c2c00a514db4003488/8d075e52/0005.jpg'],
    ['Grant Thornton LLP','https://dl.airtable.com/.attachments/dd6a363a9f91f179f2fc12f49c13ebd1/9259289c/0020.png'],
    ['Greater Chicago Food Depository','https://dl.airtable.com/.attachments/7d2cd9089cd7f765140434372baaf8c8/80984b5e/0059.jpg'],
    ['Hadley Institute for the Blind and Visually Impaired','https://dl.airtable.com/.attachments/e17bbb7b03e90ec1ddff1534559aa937/a30beaed/0060.jpg'],
    ['Health Hippo'],
    ['Heartland Alliance','https://dl.airtable.com/.attachments/076bab6ae0be47b23d5d9bcd617750ea/b1f05a28/0061.jpg'],
    ['IDEX Corporation','https://dl.airtable.com/.attachments/7db548f4180fb3baf48e022951cbf21d/28e634ae/0006.png'],
    ['Illinois Medical District','https://dl.airtable.com/.attachments/10739fe9631d566d238d4a54b92ae314/2ffad2c3/a7.png'],
    ['Institute of Food Technologists','https://dl.airtable.com/.attachments/f0579b825b77978af9ba7c35fd859501/3432a73b/InstituteofFoodTechnologists.jpg'],
    ['Isobar','https://dl.airtable.com/.attachments/c9661072a686eee79578feb59311ffbc/4f92ebac/0036.jpg'],
    ['J.B. and M.K. Pritzker Family Foundation','https://dl.airtable.com/.attachments/ba5e5fdeb6451beb334da2f08bb7ed72/c75ded62/0062.png'],
    ['Junior Achievement of Chicago','https://dl.airtable.com/.attachments/2374e0a718e6f13a492344f697a94586/779a680e/0063.png'],
    ['Kellogg Company','https://dl.airtable.com/.attachments/245b64ce60af900e8a8af9c0384eb43a/a24c3c47/0007.png'],
    ['Koya Leadership Partners','https://dl.airtable.com/.attachments/1a5f21340703c441bf34123bc05a160d/9ab59a1d/0021.png'],
    ['KPMG','https://dl.airtable.com/.attachments/4031d4f74ab5d96bc564bf98ee61ec87/204d4c46/KPMG.jpg'],
    ['Latino Policy Forum','https://dl.airtable.com/.attachments/68cb1112fb018c01fa918a0994c97a01/dd1e75f6/LPFLogo.JPG'],
    ['LEAP Innovations','https://dl.airtable.com/.attachments/4687d9836544bddab2e93b18f469c188/519ca3cf/0064.png'],
    ['Lincoln Park Zoo ','https://dl.airtable.com/.attachments/05e6be664e1a185c3838ec206ed2861c/68329858/LincolnParkZoo.png'],
    ['Lurie Children\'s Hospital','https://dl.airtable.com/.attachments/804e23ac1105ec67a2def470d0973bc5/f6fa131e/Lurielogo.jpg'],
    ['Mann Weitz & Associates LLC','https://dl.airtable.com/.attachments/71a2df88d9f54f2515a0e88daf054c2f/363c8c44/0024.jpg'],
    ['Marsh','https://dl.airtable.com/.attachments/2b21d187a832cbb2fa8fa42771f2cd69/e921a14b/0025.jpg'],
    ['Medical Home Network','https://dl.airtable.com/.attachments/e04705d716204cfd392bda6d14e784ab/4ebd31cd/MHN_logo.png'],
    ['Mercer','https://dl.airtable.com/.attachments/687947ab32bcac9e98bd781a3954c0d6/d2f31345/0026.png'],
    ['Morgan Stanley','https://dl.airtable.com/.attachments/a03d468851ed585dc8607d09042e0ec3/144e09d5/MS_Logo-13p0_K.png'],
    ['Morningstar','https://dl.airtable.com/.attachments/703bef16921ff74d2718530baf22a93c/672397df/Morningstar.png'],
    ['MxD','https://dl.airtable.com/.attachments/f3ed1e90a673db6176dc5c7a822b40db/e132f2cc/0066.png'],
    ['Navigant Consulting Inc.','https://dl.airtable.com/.attachments/eb4c43a257a9220e6c6f4040522db84d/b028fb1c/Navigant_Logo.jpg'],
    ['Navy Pier','https://dl.airtable.com/.attachments/b427b5983a288df1792ce29f85eab01c/96c09184/NavyPier.png'],
    ['Neiman Brothers','https://dl.airtable.com/.attachments/836ee15ee2343093682eee0715d1fac4/e14a5aed/NeimanBrotherslogo.jpg'],
    ['NextLevel Health Illinois','https://dl.airtable.com/.attachments/d4563209f4b85c34cd739565ff90027c/c2f7c04a/logo.png'],
    ['Northwestern University','https://dl.airtable.com/.attachments/bec69eff0eafe12043bd2b0b2057431c/cbbfbc9f/0067.jpg'],
    ['Optima, Inc.','https://dl.airtable.com/.attachments/36f5ad6f218ea1d5aef7be3268aeb5cd/d94614b7/0029.jpg'],
    ['Primera Engineers','https://dl.airtable.com/.attachments/7fd8e44879513b68867f6084646908c6/3bd3fc1e/0030.jpg'],
    ['r-barc','https://dl.airtable.com/.attachments/59276c8f5bf148afa78b21c04ff76780/489bd47b/0031.jpg'],
    ['Robinson Hill, Inc.','https://dl.airtable.com/.attachments/6ff95178ee3e1641e95ecc0ddbc5a524/1903b727/0032.jpg'],
    ['School of The Art Institute','https://dl.airtable.com/.attachments/57ef9d9e7f06317683381da73aa8cd1a/499643a2/0068.jpg'],
    ['Society of Actuaries','https://dl.airtable.com/.attachments/fd4d59b98ba2096037f74e7e7eab8bae/f68a9c4c/SocietyofActuaries.jpg'],
    ['The Lamar Johnson Collaborative','https://dl.airtable.com/.attachments/2dee41db12a3f9178ae7b8c24eaa6745/648e3c5f/LamarJohnson.png'],
    ['The Northridge Group, Inc.','https://dl.airtable.com/.attachments/a563e78bd577373b22899511056cbda4/91eadfb1/0028.jpg'],
    ['TransUnion','https://dl.airtable.com/.attachments/d15dd7ebbe3d61b035e78aba86b7e5ad/c63a8737/0008.jpg'],
    ['True Value Company','https://dl.airtable.com/.attachments/21a54850bb37110fe0abf7fdd55ef8e6/fb65aae1/0033.jpg'],
    ['UL','https://dl.airtable.com/.attachments/08ec8af908fec95fbf369960bb45499f/4065a72e/UL.png'],
    ['United Airlines','https://dl.airtable.com/.attachments/3aca9fd694187376ee74b733b4ef62c5/4ff5a32a/0009.png'],
    ['United Scrap Metal, Inc.','https://dl.airtable.com/.attachments/ad9d381734255f4e98264c05943f09a9/04e417f2/0034.png'],
    ['University of Illinois at Chicago (UIC)','https://dl.airtable.com/.attachments/ab05860e7db857ef376fedf3ae25342e/d5dbd945/0069.png'],
    ['Univision Chicago','https://dl.airtable.com/.attachments/5238fbfeb5822c0ea5c0358d473ab0e5/8ddd1eb4/a2.png'],
    ['US Foods','https://dl.airtable.com/.attachments/8d9b573d96673b3abb636151bb96bca8/4bf932ce/USFoodsLogo.jpg'],
    ['WBEZ','https://dl.airtable.com/.attachments/7aab937ce95368d1f5e343c5aeb59ca7/346d83a9/0037.png'],
    ['Women\'s Business Development Center','https://dl.airtable.com/.attachments/7639bfe7029f525978565e5f55ac682d/68976a86/0070.png'],
    ['World Business Chicago','https://dl.airtable.com/.attachments/7e93fe9f76fbc5c9b7019b37d80a8f4e/484bf367/0071.png'],
    ['WTTW WFMT','https://dl.airtable.com/.attachments/efbf222cd7b88d0d772681de4e9f3a75/8653e962/0038.png'],
    ['YWCA Metropolitan Chicago','https://dl.airtable.com/.attachments/cfb5ec8c80c73d69636c23afc43d7121/68f5a0d1/0072.jpg'],
    ['Zeno Group','https://dl.airtable.com/.attachments/5871d6416859891149b1503ac9b6585d/1ca6cb1b/0039.png'],
    ['Ziegler','https://dl.airtable.com/.attachments/26cb0a928265445211daa083da0f74e9/7aefa3a8/ziegler-logo.png']]

// Generate <div> for each logo / company name
const SPITLOGOS = (arr) => {
    arr.forEach(x => {
        x[1] ? document.getElementById('logos').innerHTML += ("<div class=\"EPlogo wow fadeInBottom\" data-wow-duration=\".35s\"><img src=\""+x[1]+"\" alt=\""+x[0]+" Logo\"></div>") 
            : document.getElementById('logos').innerHTML += ("<div class=\"EPname wow fadeInBottom\"  data-wow-duration=\".35s\"><p>"+x[0]+"</p></div>")
    })
}

SPITLOGOS(LOGOS);

let textColors = ["light-blue", "dark-blue", "yellow", "dark-dark-blue", "gray", "pink", "dark-pink"];
let bgColors = ["bg-light-blue", "bg-dark-blue", "bg-yellow", "bg-dark-dark-blue", "bg-gray", "bg-pink", "bg-dark-pink"];
let eventColors = ["bg-light-blue", "bg-dark-blue", "bg-yellow", "bg-dark-dark-blue", "bg-gray", "bg-pink"];

// Applies one class from classArr to all elements with targetClassName, in order, 
// repeating until each element with targetClassName have been assigned a class.
const APPLYCLASS = (targetClassName, classArr) => {
    let elements = document.getElementsByClassName(targetClassName);
    let arrIndex = 0;
    for (let i=0; i<elements.length; i++) {
        let index = classArr[arrIndex];
        elements[i].classList.add(index);
        arrIndex === classArr.length - 1 ? arrIndex = 0 : arrIndex++
    }
}

APPLYCLASS("stat", textColors);
APPLYCLASS("statHex", bgColors);
APPLYCLASS("eventHex", eventColors)


//Removes className from all elements matching className
const SEEKANDREMOVE = (className) => {
elems = document.getElementsByClassName(className);
    for (i=0; i<elems.length; i++) {
        elems[i].classList.remove(className);
    }
}
