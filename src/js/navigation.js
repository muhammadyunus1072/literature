function config(){

    return   {'Authorization': `Bearer ${getCookie("token")}`}
    
}
// axios({
//     method
// })
let userid = ""
function getCookie(cname) {
    let name = cname + "=";
    let decodedCookie = decodeURIComponent(document.cookie);
    let ca = decodedCookie.split(';');
    for(let i = 0; i <ca.length; i++) {
      let c = ca[i];
      while (c.charAt(0) == ' ') {
        c = c.substring(1);
      }
      if (c.indexOf(name) == 0) {
        return c.substring(name.length, c.length);
      }
    }
    return "";
  }
// Initial Navigo
var root = '/karya_sastra';
var router = new Navigo(root, { hash: false, strategy: 'ALL' });


  // Hamburger
  let hamburgerDashboard = "";
  let menu = "";
  let navbar = "";
  let categoryIndex = "null";
  let search = "";
router.on(
    '/',
    ()=>{
        $("body").removeClass("bg-[#F9EBC8]")
        // $("body").addClass("bg-[#8D9EFF]")
        $("body").addClass("bg-[#1B2430]")
        $("#app").html(`<section id="nav" class="w-fit fixed top-5 right-5 md:right-10 flex flex-col items-end z-[999]">
            <button id="hamburger" name="hamburger" type="button" class="float-right mr-3" onclick="navbarClick()">
                <span class="hamburger-line-index origin-top-left transition duration-500 ease-in-out"></span>
                <span class="hamburger-line-index transition duration-500 ease-in-out"></span>
                <span class="hamburger-line-index origin-bottom-left transition duration-500 ease-in-out"></span>
            </button>
        <div id="menu" class="hidden flex flex-col items-end mt-3">
          <div class="hidden bg-[#7DE5ED] text-[#474E68] bg-[#F8C4B4] text-[#9A1663] bg-[#7DE5ED] text-[#474E68]"></div>
        </div>
      </section>
        
        <!-- Swiper -->
        <div class="swiper mySwiper h-fit min-h-[354px] w-full pt-[30px] lg:pt-2 pb-[30px] z-0">
          <div class="w-full lg:mt-16">
            <h2 class="text-3xl font-bold pb-3 md:pb-5 text-center text-[#C4B6B6]">Karya Terbaru</h2>
          </div>
          <div class="swiper-slide group items bg-center bg-cover w-[250px] h-[250px] relative hidden">
            <div class="absolute text-lg group-hover:scale-125 group-hover:cursor-pointer transition-all duration-700 z-50 text-white font-bold text-center w-full h-full flex flex-wrap justify-center">
              <div class="w-full my-auto">
                <p>    
                  '+res.data[a].title+'
                </p>
                <p class="font-normal text-base mt-5">
                '+res.data[a].description+'
                </p>
              </div>
              </div>
            <img src="" class="block w-full h-full shadow-lg rounded-lg group-hover:scale-110 z-0 transition-all duration-300" />
          </div>
          <div class="swiper-wrapper mb-2" id="latestContent">
    
          </div>
          <div class="swiper-button-next invisible md:visible mr-10 bg-[#73777B] w-10 h-20 text-white rounded-md opacity-70 hover:opacity-100"></div>
          <div class="swiper-button-prev invisible md:visible ml-10 bg-[#73777B] w-10 h-20 text-white rounded-md opacity-70 hover:opacity-100"></div>
          <div class="swiper-pagination"></div>
        </div>
        <!-- Swiper -->
        <div class="w-full flex justify-center mt-5">
          <div class=" lg:w-[100px] lg:h-[150px] relative">
              <div class="swiper w-[60px] h-[80px] md:w-[75px] md:h-[100px] lg:w-[90px] lg:h-[120px] categorySwiper text-center">
                  <div class="swiper-wrapper">
                  <div class="swiper-slide shadow-lg flex flex-col items-center justify-center rounded-md font-semibold lg:font-bold bg-cover bg-[#73777B] text-sm lg:text-lg leading-tight flex-wrap text-black">
                    <img src="https://apipuisi.arashiyunus.com/public/storage/image/box.webp" class="w-1/2" alt="">
                    Semua Kategory
                  </div>
                  <div class="swiper-slide shadow-lg flex flex-col items-center justify-center rounded-md font-semibold lg:font-bold bg-cover bg-[#73777B] text-sm lg:text-lg leading-tight flex-wrap text-black">
                    <img src="https://apipuisi.arashiyunus.com/public/storage/image/swan.png" class="w-2/3" alt="">
                    Puisi
                  </div>
                  <div class="swiper-slide shadow-lg flex flex-col items-center justify-center rounded-md font-semibold lg:font-bold bg-cover bg-[#73777B] text-sm lg:text-lg leading-tight flex-wrap text-black">
                    <img src="https://apipuisi.arashiyunus.com/public/storage/image/book.png" class="w-2/3" alt="">
                    Cerpen
                  </div>
                  <div class="swiper-slide shadow-lg flex flex-col items-center justify-center rounded-md font-semibold lg:font-bold bg-cover bg-[#73777B] text-sm lg:text-lg leading-tight flex-wrap text-black">
                    <img src="https://apipuisi.arashiyunus.com/public/storage/image/soldier.png" class="w-2/3" alt="">
                    Sejarah
                  </div>
                  <div class="swiper-slide shadow-lg flex flex-col items-center justify-center rounded-md font-semibold lg:font-bold bg-cover bg-[#73777B] text-sm lg:text-lg leading-tight flex-wrap text-black">
                    <img src="https://apipuisi.arashiyunus.com/public/storage/image/bowl.png" class="w-1/2" alt="">
                      Resep Masakan
                  </div>
                  </div>
                  
              </div>
              <div class="category-swiper-pagination flex justify-center mt-2"></div>
          </div>
          <div class="md:w-1/3 md:h-[120px] ml-5 md:ml-14 lg:ml-10 flex items-center relative">
            <div class="absolute ml-2">
              <svg xmlns="https://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-search" viewBox="0 0 16 16">
              <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"/>
              </svg>
            </div>
            <input type="text" name="search" id="search" class="py-2 pl-8 w-full rounded-md" placeholder="Search by Title">
          </div>
        </div>
    
          <div class="group items bg-center bg-cover w-[230px] md:h-[230px] relative hidden">
            <div class="absolute text-lg group-hover:scale-110 group-hover:cursor-pointer transition-all duration-700 z-50 text-white font-bold w-full h-full flex flex-wrap justify-center text-center">
              <div class="w-full mt-2 flex flex-wrap flex-col justify-center">
                  <div class="h-[60px] block text-center w-full text-lg font-semibold overflow-hidden">
                <p class="text-ellipsis w-fit backdrop-blur-[3px] mx-auto"> 
                    '+res.data.data[a].title+'   
                    </p>
                </div>
                  <div class="h-[120px] w-full text-center block">
                  <p class="font-normal backdrop-blur-[3px] text-base text-center break-words text-ellipsis max-h-[120px] overflow-hidden w-fit mx-auto">
                  '+res.data.data[
                </p>
                  </div>
              </div>
            </div>
            <img src="https://swiperjs.com/demos/images/nature-4.jpg" class="block w-[230px] h-[230px] h- shadow-lg rounded-lg group-hover:scale-110 z-0 transition-all duration-300" />
        </div>
          <!-- All Post Content -->
          <div class="w-full flex flex-wrap mt-3 md:mt-0 z-0">
            <div class="w-full p-5 flex justify-center flex-wrap gap-8" id="allContentsBody">
                
            </div>
        </div>
          <div class="w-full flex justify-center my-5">
            <div class="pagination inline-block" id="contentsPagination">
    
            </div>
          </div>
        </div>`)
        var categorySwiper = new Swiper(".categorySwiper", {
            effect: "cards",
            grabCursor: true,
            loop:true,
            keyboard: {
            enabled: false,
            },
            pagination: {
            el: ".category-swiper-pagination",
            clickable: true,
            },
          
          });
          
          
          categorySwiper.on('slideChange', ()=>{
            let index = categorySwiper.realIndex
            const textCategory = $("#categoryText");
              if(index == 0){
                categoryIndex = "null";
                textCategory.html("Semua Kategory")
              }else if(index == 1){
                categoryIndex = "puisi";
                textCategory.html("Puisi")
              }else if(index == 2){
                categoryIndex = "cerpen";
                textCategory.html("Cerpen")
              }else if(index == 3){
                categoryIndex = "sejarah";
                textCategory.html("Sejarah")
              }else if(index == 4){
                categoryIndex = "resep";
                textCategory.html("Resep Masakan")
              }
              axios({
                method : "POST",
                url : "https://apipuisi.arashiyunus.com/api/auth/getPaginate",
                data : {
                  category : categoryIndex,
                  title : search
                },
                headers : config
              }).then((res)=>{
                renderContent(res.data.data)
                pagination(res.data.links)
              })
          })

          getlatestPost()
    },
    {
      before: (done)=>{
        axios({
          method : "POST",
          url : "https://apipuisi.arashiyunus.com/api/auth/checkUser",
          headers : config(),
        }).then((res)=>{
            if(res.data.status){
                $("#menu").html(`
                <a href="https://literature.arashiyunus.com/dashboard">
                <button class="py-2 px-5 rounded-md shadow-md text-lg font-semibold bg-[#1572A1] hover:scale-110 duration-300 text-white">
                Dashboard
                  </button>
              </a>
                  <button class="mt-3 py-2 px-5 rounded-md shadow-md text-lg font-semibold bg-[#E0144C] text-white hover:scale-110 duration-300" onclick="signout()">
                  Sign out
                  </button>`)
                }
            }).catch((err)=>{
            //   console.log(err)
            if(err.response.status === 401){
                $("#menu").html(`<a href="https://literature.arashiyunus.com/login">
                <button class="py-2 px-5 rounded-md shadow-md text-lg font-semibold bg-[#1572A1] text-white hover:scale-110 duration-300">
                    Sign in
                </button>
            </a>`)
            }
          })
          done()
      },  
      after:()=>{
        
      // Hamburger
      hamburger = document.querySelector("#hamburger");
      menu = document.querySelector("#menu");
      search = $("#search").val()
      },
      already: ()=>{
        config()
        axios({
            method : "POST",
            url : "https://apipuisi.arashiyunus.com/api/auth/checkUser",
            headers : config(),
          }).then((res)=>{
              if(res.data.status){
                  $("#menu").html(`
                  <a href="https://literature.arashiyunus.com/dashboard">
                  <button class="py-2 px-5 rounded-md shadow-md text-lg font-semibold bg-[#7DE5ED] text-[#474E68] hover:scale-110 duration-300">
                  Dashboard
                    </button>
                </a>
                    <button class="mt-3 py-2 px-5 rounded-md shadow-md text-lg font-semibold bg-[#F8C4B4] text-[#9A1663] hover:scale-110 duration-300" onclick="signout()">
                    Sign out
                    </button>`)
                  }
              }).catch((err)=>{
              //   console.log(err)
              if(err.response.status === 401){
                  $("#menu").html(`<a href="https://literature.arashiyunus.com/login">
                  <button class="py-2 px-5 rounded-md shadow-md text-lg font-semibold bg-[#7DE5ED] text-[#474E68] hover:scale-110 duration-300">
                      Sign in
                  </button>
              </a>`)
              }
            })
      }
    }
)
router.on(
    '/content/:path',
    (data)=>{
        console.log(data.data.path)
        let content = `<div class="fixed top-5 right-5 z-[99999]">
            <a href="https://literature.arashiyunus.com/"><button class="py-2 px-3 rounded-md shadow-md text-lg font-semibold bg-[#FFB200] hover:scale-125 duration-200 text-white">Home</button></a>
          </div>`;
        axios({
            method : "POST",
            url : "https://apipuisi.arashiyunus.com/api/auth/getContent",
            data : {
                path : data.data.path+".txt"
            }
        }).then((res)=>{
            console.log(res)
            
            content += `<section class="w-full mb-5" id="body">
            <div class="w-full flex flex-wrap justify-center mx-auto">
                <div class="w-full lg:w-[80%] relative">
                    <div class="ql-editor contentBody">`+res.data.title+`</div>
                </div>
            </div>`
            for(a = 0; a < res.data.content.length; a ++){
                content += `<div class="w-full flex flex-wrap mx-auto justify-center">
                <div class="content w-full lg:w-[80%] flex flex-wrap justify-evenly">`
                for(b = 0; b < res.data.content[a].length; b ++){
                    if(res.data.content[a].length == 1){
                        content += `<div class="w-full md:w-full relative">
                        <div class="ql-editor contentBody">`+res.data.content[a][b]+`</div>
                    </div>`
                    }else if(res.data.content[a].length == 2){
                        content += `<div class="w-full md:w-1/2 relative">
                        <div class="ql-editor contentBody">`+res,data,content[a][b]+`</div>
                    </div>`
                    }else if(res.data.content[a].length == 3){
                        content += `<div class="w-full md:w-1/3 relative">
                        <div class="ql-editor contentBody">`+res.data.content[a][b]+`</div>
                    </div>`
                    }
                }
                content += `</div>
                </div>`
            }
            content += `</section>`
        })
        $("#app").html(content)
    },
    {
        before: (done)=>{
            done()
        }
    }
)
router.on(
    '/register',
    ()=>{
        $("body").addClass("bg-[#1B2430]")
        $("#app").html(`<section class="w-full flex flex-wrap justify-center">
        <div class="w-full md:w-1/2 lg:w-2/5 bg-[#73777B] flex flex-wrap justify-center my-28 items-center rounded-3xl">

            <!-- Header -->
            <div class="w-full flex flex-col items-center mt-5 text-white">
                <h2 class="text-2xl font-bold">Registration</h2>
                <h3 class="text-base font-semibold mt-5">Join now to keep you open about</h3>
                <h3 class="text-base font-semibold">information and literature.</h3>
            </div>

            <!-- Form Body -->
            <div class="w-full flex justify-center flex-wrap gap-5 my-5">
                <input type="text" name="yourname" id="name" placeholder="Your Name" class="py-2 px-3 border w-4/5 rounded-md shadow-md">
                <input type="email" name="youremail" id="email" placeholder="Email" class="py-2 px-3 border w-4/5 rounded-md shadow-md">
                <input type="password" name="password" id="password" placeholder="Password" class="py-2 px-3 border w-4/5 rounded-md shadow-md">
                <button type="button" id="btnRegister" onclick="register()" class="bg-[#1FAB89] text-white hover:scale-105 duration-200 py-3 px-5 w-4/5 font-semibold rounded-md">Sign Up</button>
            </div>

            <!-- Footer -->
            <div class="w-full flex justify-center flex-wrap flex-col items-center text-white">
                <p class="font-base">Already have an account ?</p>
                <a href="https://literature.arashiyunus.com/login">
                    <p class="font-semibold text-[#FFB200] hover:scale-110 duration-200">Login Now</p><br>
                </a>
                
            </div>
        </div>

    </section>`)
    },
    {
        before: (done)=>{
            axios({
                method : "POST",
                url : "https://apipuisi.arashiyunus.com/api/auth/checkUser",
                headers : config(),
            }).then((response) => {
                if(response.status){
                    window.location.replace("https://localhost/karya_sastra")
                }
            }
            ).catch((err)=>{
                if(err.response.status === 401){
                    done()
                }
            })
        }
    }
)
router.on(
    '/login',
    ()=>{
        $("body").addClass("bg-[#1B2430]")
        $("#app").html(`<section class="w-full flex flex-wrap justify-center">
        <div class="w-full md:w-1/2 lg:w-1/3 bg-[#73777B] flex flex-wrap justify-center my-28 items-center rounded-3xl">

            <!-- Header -->
            <div class="w-full flex flex-col items-center mt-5 text-white">
                <h2 class="text-2xl font-bold">Login Page</h2>
                <h3 class="text-base font-semibold mt-5">Hey, Enter your details to get sign in</h3>
                <h3 class="text-base font-semibold">to your account.</h3>
            </div>

            <!-- Form Body -->
            <div class="w-full flex justify-center flex-wrap gap-5 my-5">
                <input type="email" name="emailLoginPuisi" id="email" placeholder="Email" class="py-2 px-3 border w-4/5 rounded-md shadow-md">
                <input type="password" name="password" id="password" placeholder="Password" class="py-2 px-3 border w-4/5 rounded-md shadow-md">
                <button type="button" id="btnLogin" onclick="login()" class="bg-[#1FAB89] text-white hover:scale-105 duration-200 py-3 px-5 w-4/5 font-semibold rounded-md">Sign In</button>
            </div>

            <!-- Footer -->
            <div class="w-full flex justify-center flex-wrap flex-col items-center text-white">
                <p class="font-base">Don't have account ?</p>
                <a href="https://literature.arashiyunus.com/register">
                    <p class="font-semibold text-[#FFB200] hover:scale-110 duration-200">Register Now</p><br>
                </a>
                
            </div>
        </div>

    </section>`)
    },
    {
        before: (done)=>{
            axios({
                method : "POST",
                url : "https://apipuisi.arashiyunus.com/api/auth/checkUser",
                headers : config(),
            }).then((response) => {
                if(response.status){
                    window.location.replace("https://localhost/karya_sastra")
                }
            }
            ).catch((err)=>{
                if(err.response.status === 401){
                    done()
                }
            })
        }
    }
)

$(document).on("keyup", "#search", (e)=>{
    search = e.target.value
    axios({
        method : "POST",
        url : "https://apipuisi.arashiyunus.com/api/auth/getPaginate",
        headers : config(),
        data : {
            category : categoryIndex,
            title : search
        }
    }).then((res)=>{
        if(res.status == 200){
            renderContent(res.data.data)
            pagination(res.data.links)
        }
    })
})
  // Preview Create Post
  let btnPreview = document.getElementById("btnPreview");
  let btnBack = document.getElementById("btnBack");
  let formCreatePost = document.getElementById("formCreatePost");
  let previewImage = document.getElementById("previewImage");
  let postImage = "";
  
router.on(
    '/dashboard',
    ()=>{
        $("body").addClass("bg-[#3F4E4F]")
        $("#app").html(`<!-- Navbar -->
        <button id="hamburger" name="hamburger" type="button" class="block fixed right-10 lg:hidden z-50 top-5" onclick="navbarDashboardClick()">
            <span class="hamburger-line origin-top-left transition duration-500 ease-in-out"></span>
            <span class="hamburger-line transition duration-500 ease-in-out"></span>
            <span class="hamburger-line origin-bottom-left transition duration-500 ease-in-out"></span>
        </button>
        <div class="w-full h-full flex-wrap fixed flex justify-center z-30 bg-[#1B2430] lg:flex lg:w-[30%] hidden" id="navbar">
            <div class="w-full md:w-1/2 lg:w-full mt-28 text-center px-5">
                <button class="w-full hover:scale-[1.05] duration-200 rounded-lg overflow-hidden">
                    <p class="text-2xl font-bold text-[#EDEDD0] py-3 bg-[#73777B]">Create New Post</p>
                    
                </button>
                <a href="https://literature.arashiyunus.com/allpost">
                <button class="w-full hover:scale-[1.05] duration-200 mt-2 rounded-lg overflow-hidden">
                    <p class="text-2xl font-bold text-[#EDEDD0] py-3  bg-[#73777B]">All Post</p>
                    
                </button>
                </a>
                <button class="w-full hover:scale-[1.05] duration-200 mt-2 rounded-lg overflow-hidden" onclick="signout()">
                    <p class="text-2xl font-bold text-[#FFF9B0] bg-[#FF884B] py-3 ">Sign Out</p>
                </button>
            </div>
        </div>
    
        <!-- Create Post Form -->
        <section id="createPost" class="section w-full h-screen flex flex-wrap z-0">
            <div class="w-[30%] hidden lg:block"></div>
            <div class="w-full mt-32 lg:mt-0 lg:w-[70%] flex flex-wrap justify-center lg:items-center">
                <div class="w-full md:w-2/3 lg:w-1/2 px-5">
                    <div class="w-full" id="formCreatePost">
                        <label for="modalPostCategory" class="text-lg font-semibold text-white">Category</label>
                        <select name="postCategory" id="postCategory" class="py-2 pl-3 rounded-md shadow-md text-lg font-semibold cursor-pointer ml-2">
                            <option value="puisi" class="text-base md:text-lg font-semibold">Puisi</option>
                            <option value="cerpen" class="text-base md:text-lg font-semibold">Cerpen</option>
                            <option value="sejarah" class="text-base md:text-lg font-semibold">Sejarah</option>
                            <option value="resep" class="text-base md:text-lg font-semibold">Resep Masakan</option>
                        </select>
                        <!-- <div class="w-full"> -->
                            <!-- <label for="postTitle">Title : </label> -->
                            <input type="text" name="postTitle" id="postTitle" class="w-full mt-5 py-3 rounded-md shadow-md pl-3" placeholder="Title">
                        <!-- </div> -->
                        <!-- <div class="w-full mt-3"> -->
                            <!-- <label for="postDescription">Description :</label> -->
                            <textarea name="postDescription" id="postDescription" cols="20" rows="5" class="w-full mt-5 rounded-md shadow-md pl-3 py-3" placeholder="Description"></textarea>
                        <!-- </div> -->
                            <input type="file" name="postImage" id="postImage" class="block w-full text-sm file:py-2 file:px-6 file:rounded file:border-1 file:border-gray-400 mt-5 mx-auto border-b border-gray-400 hover:cursor-pointer hover:bg-[#73777B] text-white rounded-md" accept="image/*"/>
    
    
                    </div>
                    <div class="w-full flex justify-center hidden" id="previewImage">
                        <div class="group items bg-center bg-cover w-[250px] md:w-[300px] md:h-[300px] relative">
                        <div class="absolute text-lg group-hover:scale-110 group-hover:cursor-pointer transition-all duration-700 z-50 text-white font-bold w-full h-full flex flex-wrap justify-center text-center">
                        <div class="w-full mt-2 flex flex-wrap flex-col justify-center">
                            <div class="h-[60px] block text-center w-full text-lg font-semibold overflow-hidden">
                          <p class="text-ellipsis w-fit backdrop-blur-[3px] mx-auto" id="prevPostTitle"> 
                                
                              </p>
                          </div>
                            <div class="h-[120px] w-full text-center block">
                            <p class="font-normal text-base text-center break-words text-ellipsis max-h-[120px] overflow-hidden backdrop-blur-[3px] w-fit mx-auto" id="prevPostDescription">
                              
                          </p>
                            </div>
                        </div>
                      </div>
                      <img src="https://apipuisi.arashiyunus.com/public/storage/image/gray.jpg" id="prevPostImage" class="block w-full h-full shadow-lg rounded-lg group-hover:scale-110 z-0 transition-all duration-300" />
                        </div>
                    </div>
                    <div class="w-full text-center">
                        <button type="button" name="btnPreview" class="mx-auto mt-5 py-2 px-5 rounded-md shadow-md bg-[#1572A1] font-bold text-lg text-white hover:scale-110 duration-200" id="btnPreview" onclick="previewPost('preview')">Preview</button>
                        <button type="button" name="btnPreview" class="mx-auto mt-5 py-2 px-5 rounded-md shadow-md bg-[#E0144C] font-bold text-lg text-white hover:scale-110 duration-200 hidden" id="btnBack" onclick="previewPost('back')">Back</button>
                        <button type="button" name="btnPreview" class="mx-auto mt-5 ml-5 py-2 px-5 rounded-md shadow-md bg-[#1FAB89] font-bold text-lg text-white hover:scale-110 duration-200" id="btnCreate" onclick="createNewPost()">Create</button>
                    </div>
                </div>
            </div>
        </section>`)
        
    },
    {
        before: (done)=>{
            axios({
                method : "POST",
                url : "https://apipuisi.arashiyunus.com/api/auth/checkUser",
                data : {
                    req : "userid"
                },
                headers : config(),
            }).then((response) => {
                if(response.status){
                    userid = response.data.userid
                    done()
                }
            }
            ).catch((err)=>{
                if(err.response.status === 401){
                    window.location.replace("https://literature.arashiyunus.com/")
                }
            })
        },
        after: ()=>{
                    
            // Preview Create Post
            btnPreview = document.getElementById("btnPreview");
            btnBack = document.getElementById("btnBack");
            navbar = document.getElementById("navbar");
            formCreatePost = document.getElementById("formCreatePost");
            previewImage = document.getElementById("previewImage");

            $("#postTitle").on("keyup", ()=>{
                $("#prevPostTitle").html($("#postTitle").val())
            })
            $("#postDescription").on("keyup", ()=>{
                $("#prevPostDescription").html($("#postDescription").val())
            })
            $("#postImage").on("change", (e)=>{
                const imageFiles = e.target.files;
                /**
                 * Count the number of files selected.
                 */
                const imageFilesLength = imageFiles.length;
                /**
                 * If at least one image is selected, then proceed to display the preview.
                 */
                if (imageFilesLength > 0) {
                    /**
                     * Get the image path.
                     */
                    const imageSrc = URL.createObjectURL(imageFiles[0]);
                    /**
                     * Select the image preview element.
                     */
                    const imagePreviewElement = document.querySelector("#prevPostImage");
                    /**
                     * Assign the path to the image preview element.
                     */
                    $("#prevPostImage").attr("src", imageSrc);
                    postImage = imageFiles[0]
                }
            })
        }
    }
)

// Create Post
function createNewPost(){
    let data = new FormData();
    data.append('user_id', userid);    
    data.append('title', $("#postTitle").val());
    data.append('description', $("#postDescription").val());
    data.append('category', $("#postCategory").val());
    data.append('image', postImage);

    // console.log(userid)
    axios({
        method : "POST",
        url : "https://apipuisi.arashiyunus.com/api/auth/content",
        data : data,
        headers : config()
    }).then((res)=>{
        // console.log(res)
        if(res.data.validate && res.data.status == "sukses"){
            $("#postTitle").val("")
            $("#postDescription").val("")
            $("#postImage").val("")
            $("#postCategory").val("puisi")

            $("#prevPostTitle").html("")
            $("#prevPostDescription").html("")
            $("#prevPostImage").attr("src","https://apipuisi.arashiyunus.com/public/storage/image/gray.jpg")
            Swal.fire({
                icon: 'success',
                title: 'Success !',
                text: "Your data has been saved successfully",
              })
        }else{
            Swal.fire({
                icon: 'warning',
                title: 'Oops...',
                text: res.data.error[Object.keys(res.data.error)[0]],
              })
        }
    })
}
function register(){
    axios({
        method: "POST",
        url : "https://apipuisi.arashiyunus.com/api/auth/register",
        data : {
            name: document.getElementById("name").value,
            email: document.getElementById("email").value,
            password: document.getElementById("password").value,
        }
    }).then((res)=>{
        if(res.data.status){
          Swal.fire({
            icon: 'success',
            title: 'Success !',
            text: "Your account successfully registered",
          }).then(()=>{
            window.location.replace("https://literature.arashiyunus.com/login")
          })
        }
    })
}
function login(){
    axios({
        method: "POST",
        url : "https://apipuisi.arashiyunus.com/api/auth/login",
        data : {
            email: document.getElementById("email").value,
            password: document.getElementById("password").value
        }
    }).then((res)=>{
        let exp = res.data.expires_in
        const aMinute = 60 * 1000;
        const d = new Date();
        d.setTime(d.getTime()+(exp * aMinute))
        let expires = "expires="+d.toUTCString();
        document.cookie = "token="+res.data.access_token+ ";" + expires + ";path=/";
        document.cookie = "userid="+res.data.user.id+ ";" + expires + ";path=/";
        window.location.replace("https://literature.arashiyunus.com/")
    })
}

let btnPreviewEdit = "";
let btnBackEdit = "";
let formEditPost = "";
let previewEditImage = "";
let postModalImage = "";

let category = "0";
let modalEditPost = "";
let modalPostTitle = "";
let modalPostImage = "";
let modalPostDescription = "";
let modalPostStatus = "";
let modalPostCategory = "";
var categorySwiper = ""
router.on(
    '/allpost',
    ()=>{
        $("body").addClass("bg-[#3F4E4F]")
        $("#app").html(`    <!-- Navbar -->
        <button id="hamburger" name="hamburger" type="button" class="block fixed right-10 lg:hidden z-50 top-5" onclick="navbarDashboardClick()">
            <span class="hamburger-line origin-top-left transition duration-500 ease-in-out"></span>
            <span class="hamburger-line transition duration-500 ease-in-out"></span>
            <span class="hamburger-line origin-bottom-left transition duration-500 ease-in-out"></span>
        </button>
        <div class="w-full h-full flex-wrap fixed flex justify-center z-30 bg-[#1B2430] lg:flex lg:w-[30%] hidden" id="navbar">
            <div class="w-full md:w-1/2 lg:w-full mt-28 text-center px-5">
                <a href="https://literature.arashiyunus.com/dashboard">
                <button class="w-full hover:scale-[1.05] duration-200 rounded-lg overflow-hidden">
                    <p class="text-2xl font-bold text-[#EDEDD0] py-3 bg-[#73777B]">Create New Post</p>
                    
                </button>
                </a>
                <button class="w-full hover:scale-[1.05] duration-200 mt-2 rounded-lg overflow-hidden">
                    <p class="text-2xl font-bold text-[#EDEDD0] py-3  bg-[#73777B]">All Post</p>
                    
                </button>
                <button class="w-full hover:scale-[1.05] duration-200 mt-2 rounded-lg overflow-hidden" onclick="signout()">
                    <p class="text-2xl font-bold text-[#FFF9B0] bg-[#FF884B] py-3 ">Sign Out</p>
                </button>
            </div>
        </div>
    
        <!-- All Post Form -->
        <section id="detailPost" class="section w-full flex flex-wrap z-0 relative">
            <div class="w-[30%] hidden lg:block"></div>
            <div class="w-full mt-10 lg:mt-0 lg:w-[70%] flex flex-wrap justify-center lg:items-center relative">
    
                <!-- Category Swiper -->
                <div class="w-full flex justify-evenly pt-5 z-50 bg-transparent">
                    <div class="w-[100px] h-[150px]">
                          <div class="swiper w-[60px] h-[80px] md:w-[75px] md:h-[100px] lg:w-[90px] lg:h-[120px] categorySwiper text-center">
                              <div class="swiper-wrapper">
                              <div class="swiper-slide shadow-lg flex flex-col items-center justify-center rounded-md font-semibold lg:font-bold bg-cover bg-[#73777B] text-sm lg:text-lg leading-tight flex-wrap text-black">
                                <img src="https://apipuisi.arashiyunus.com/public/storage/image/box.webp" class="w-1/2" alt="">
                                Semua Kategory
                              </div>
                              <div class="swiper-slide shadow-lg flex flex-col items-center justify-center rounded-md font-semibold lg:font-bold bg-cover bg-[#73777B] text-sm lg:text-lg leading-tight flex-wrap text-black">
                                <img src="https://apipuisi.arashiyunus.com/public/storage/image/swan.png" class="w-2/3" alt="">
                                Puisi
                              </div>
                              <div class="swiper-slide shadow-lg flex flex-col items-center justify-center rounded-md font-semibold lg:font-bold bg-cover bg-[#73777B] text-sm lg:text-lg leading-tight flex-wrap text-black">
                                <img src="https://apipuisi.arashiyunus.com/public/storage/image/book.png" class="w-2/3" alt="">
                                Cerpen
                              </div>
                              <div class="swiper-slide shadow-lg flex flex-col items-center justify-center rounded-md font-semibold lg:font-bold bg-cover bg-[#73777B] text-sm lg:text-lg leading-tight flex-wrap text-black">
                                <img src="https://apipuisi.arashiyunus.com/public/storage/image/soldier.png" class="w-2/3" alt="">
                                Sejarah
                              </div>
                              <div class="swiper-slide shadow-lg flex flex-col items-center justify-center rounded-md font-semibold lg:font-bold bg-cover bg-[#73777B] text-sm lg:text-lg leading-tight flex-wrap text-black">
                                <img src="https://apipuisi.arashiyunus.com/public/storage/image/bowl.png" class="w-1/2" alt="">
                                  Resep Masakan
                              </div>
                              </div>
                              
                          </div>
                          <div class="category-swiper-pagination flex justify-center mt-2"></div>
                      </div>
                    <div class="w-1/2 lg:w-2/3">
                        <input type="text" name="inputSearchPost" id="inputSearchPost" class="mt-7 py-2 px-3 rounded-md shadow-md w-full lg:w-2/3 lg:ml-10" placeholder="Search Post by Title">
                    </div>
                </div>
    
                <!-- All Post Content -->
                <div class="w-full flex flex-wrap mt-5 md:mt-8 lg:mt-0 z-0">
                    <div class="w-full p-5 flex justify-evenly flex-wrap gap-8" id="allContentsBody">
                        <div class="group items bg-center bg-cover w-[230px] md:h-[230px] relative invisible">
                            <div class="absolute text-lg group-hover:scale-110 group-hover:cursor-pointer transition-all duration-700 z-50 text-white font-bold w-full h-full flex flex-wrap justify-center text-center">
                              <div class="w-full mt-2 flex flex-wrap flex-col justify-center">
                                  <div class="h-[60px] block text-center w-full text-lg font-semibold overflow-hidden">
                                <p class="text-ellipsis w-full"> 
                                    '+res.data.contents[a].title+'   
                                    </p>
                                </div>
                                  <div class="h-[120px] w-full text-center block">
                                  <p class="font-normal text-base text-center break-words text-ellipsis h-[120px] overflow-hidden">
                                    '+res.data.contents[a].description+'
                                </p>
                                  </div>
                                <div class="w-full flex justify-center gap-3">
                                    <button type="button" class="px-3 bg-[#E3C770] rounded-md shadow-md hover:scale-110 hover:transition-all duration-300 btnShowModalEdit"  data-body="'+res.data.contents[a].description+'" data-title="'+res.data.contents[a].title+'" data-status="'+res.data.contents[a].status+'" data-category="'+res.data.contents[a].category+'">Edit</button>
                                    <button type="button" class="px-3 bg-[#E6CBA8] rounded-md shadow-md
                                    hover:scale-110 hover:transition-all duration-300 btnShowModalDetailPost" data-id="'+res.data.contents[a].id+'"data-path="'+res.data.contents[a].content_path+'">Detail</button>
                                </div>
                              </div>
                            </div>
                            <img src="" class="block w-[230px] h-[230px] h- shadow-lg rounded-lg group-hover:scale-110 z-0 transition-all duration-300" />
                        </div>
                        
                    </div>
                </div>
                <div class="w-full flex justify-center my-5">
                  <div class="pagination inline-block" id="contentsPagination">

                  </div>
                </div>
            </div>
        </section>
        <!-- Modal Detail Post -->
    <div class="fixed top-0 w-screen h-screen bg-transparent backdrop-blur-md border z-[999] flex justify-center  scale-0 transition duration-300 " id="modalEditPost">
        <div class="w-[95%] md:w-2/3 lg:w-1/2 mt-[200px] lg:mt-20 relative bg-[#FDF0E0] px-5 md:px-12 py-12 rounded-md shadow-md h-fit">
            <div class="w-fit absolute top-3 right-3 cursor-pointer hover:scale-110" onclick="closeEditModal()">
                <svg xmlns="https://www.w3.org/2000/svg" width="25" height="25" class="fill-[#FF577F]" fill="currentColor" class="bi bi-x-square-fill" viewBox="0 0 16 16">
                    <path d="M2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2zm3.354 4.646L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 1 1 .708-.708z"/>
                </svg>
            </div>
            <div class="w-full" id="formEditPost">
                <!-- <div class="w-full"> -->
                    <div class="w-full flex">
                        <div class="w-fit">
                            <label for="modalPostStatus" class="text-lg font-semibold text-[#6C5B7B]">Status</label>
                            <select name="modalPostStatus" id="modalPostStatus" class="py-2 pl-3 rounded-md shadow-md text-lg font-semibold cursor-pointer">
                                <option value="private" class="text-base md:text-lg font-semibold">Private</option>
                                <option value="draft" class="text-base md:text-lg font-semibold">Draft</option>
                                <option value="publish" class="text-base md:text-lg font-semibold">Publish</option>
                            </select>
                        </div>
                        <div class="w-fit ml-10">
                            <label for="modalPostCategory" class="text-lg font-semibold text-[#6C5B7B]">Category</label>
                            <select name="modalPostCategory" id="modalPostCategory" class="py-2 pl-3 rounded-md shadow-md text-lg font-semibold cursor-pointer">
                                <option value="puisi" class="text-base md:text-lg font-semibold">Puisi</option>
                                <option value="cerpen" class="text-base md:text-lg font-semibold">Cerpen</option>
                                <option value="sejarah" class="text-base md:text-lg font-semibold">Sejarah</option>
                                <option value="resep" class="text-base md:text-lg font-semibold">Resep Masakan</option>
                            </select>
                        </div>
                    </div>
                    <input type="hidden" name="dataId" id="dataId">
                    <!-- <label for="postTitle">Title : </label> -->
                    <input type="text" name="modalPostTitle" id="modalPostTitle" class="w-full py-3 rounded-md shadow-md pl-3 mt-5" placeholder="Title">
                <!-- </div> -->
                <!-- <div class="w-full mt-3"> -->
                    <!-- <label for="postDescription">Description :</label> -->
                    <textarea name="modalPostDescription" id="modalPostDescription" cols="20" rows="5" class="w-full mt-5 rounded-md shadow-md pl-3 py-3" placeholder="Description"></textarea>
                <!-- </div> -->
                    <input type="file" id="modalPostImage" class="block w-full text-sm text-gray-500 file:py-2 file:px-6 file:rounded file:border-1 file:border-gray-400 mt-5 mx-auto border-b border-gray-400 hover:bg-[#F3E0B5] rounded-md cursor-pointer" accept="image/*"/>
            </div>
            <div class="w-full  bg-[#FDF0E0] py-5 px-5 rounded-md shadow-md flex justify-center hidden" id="previewEditImage">
                <div class="group items bg-center bg-cover w-[230px] md:h-[230px] relative">
                    <div class="absolute text-lg group-hover:scale-110 group-hover:cursor-pointer transition-all duration-700 z-50 text-white font-bold w-full h-full flex flex-wrap justify-center text-center">
                      <div class="w-full mt-2 flex flex-wrap flex-col justify-center">
                          <div class="h-[60px] block text-center w-full text-lg font-semibold overflow-hidden">
                        <p class="text-ellipsis w-fit mx-auto backdrop-blur-[3px] " id="prevModalPostTitle"> 
                            </p>
                        </div>
                          <div class="h-[120px] w-full text-center block">
                          <p class="font-normal text-base text-center break-words text-ellipsis max-h-[120px] overflow-hidden backdrop-blur-[3px] w-fit mx-auto" id="prevModalPostDescription">
                        </p>
                          </div>
                      </div>
                    </div>
                    <img src="" id="prevModalPostImage" class="block w-[230px] h-[230px] h- shadow-lg rounded-lg group-hover:scale-110 z-0 transition-all duration-300" />
                </div>
            </div>
            <div class="w-full text-center">
                <button type="button" name="btnPreview" class="mx-auto mt-5 py-2 px-5 rounded-md shadow-md bg-[#E6CBA8] font-bold text-lg text-white hover:bg-[#E1CEB5]" id="btnPreviewEdit" onclick="previewEdit('preview')">Preview</button>
                <button type="button" name="btnPreview" class="mx-auto mt-5 py-2 px-5 rounded-md shadow-md bg-[#E6CBA8] font-bold text-lg text-white hover:bg-[#E1CEB5] hidden" id="btnBackEdit" onclick="previewEdit('back')">Back</button>
                <button type="button" name="btnPreview" class="mx-auto mt-5 ml-5 py-2 px-5 rounded-md shadow-md bg-[#B6E388] font-bold text-lg text-white hover:bg-[#E1CEB5]" id="btnSaveEdit" onclick="saveEdit()">Save</button>
            </div>
        </div>
    </div>`)
    },
    {
        before: (done)=>{
          axios({
            method : "POST",
            url : "https://apipuisi.arashiyunus.com/api/auth/checkUser",
            data : {
                req : "userid"
            },
            headers : config(),
        }).then((response) => {
            if(response.status){
                userid = response.data.userid
                done()
            }
        }
        ).catch((err)=>{
            if(err.response.status === 401){
                window.location.replace("https://literature.arashiyunus.com/")
            }
        })
        },
        after: ()=>{
            // Category Swiper
        btnPreviewEdit = document.getElementById("btnPreviewEdit");
        btnBackEdit = document.getElementById("btnBackEdit");
        navbar = document.getElementById("navbar");
        formEditPost = document.getElementById("formEditPost");
        previewEditImage = document.getElementById("previewEditImage");

        modalEditPost = document.getElementById("modalEditPost");
        modalPostTitle = document.getElementById("modalPostTitle");
        modalPostImage = document.getElementById("modalPostImage");
        modalPostDescription = document.getElementById("modalPostDescription");
        modalPostStatus = document.getElementById("modalPostStatus");
        modalPostCategory = document.getElementById("modalPostCategory");
            categorySwiper = new Swiper(".categorySwiper", {
                effect: "cards",
                grabCursor: true,
                loop:true,
                keyboard: {
                enabled: true,
                },
                pagination: {
                el: ".category-swiper-pagination",
                clickable: true,
                },

            });
            categorySwiper.on('slideChange', ()=>{
              console.log($("#inputSearchTitle").val())
                category = categorySwiper.realIndex;
                getAllContents()
                // axios({
                //   method : "POST",
                //   url : "https://apipuisi.arashiyunus.com/api/auth/getContents",
                //   headers : config(),
                //   data : {
                //     user_id : userid,
                //     title : $("#inputSearchTitle").val(),
                //     category : category
                //   }
                // }).then((res)=>{
                //   renderAllContents(res.data.contents.data)
                //   paginate(res.data.contents.links)
                // })
            })
            getAllContents()
        }
    }
)
// Hamburger
let hamburgerDetail = "";
let mainMenuDetail = "";

// Modal Edit Detail Post
var toolbarOptions = [
  [{ 'font': [] }],
  ['bold', 'italic', 'underline', 'strike'],        // toggled buttons
  ['blockquote', 'code-block'],

  [{ 'header': 1 }, { 'header': 2 }],               // custom button values
  [{ 'list': 'ordered'}, { 'list': 'bullet' }],
  [{ 'script': 'sub'}, { 'script': 'super' }],      // superscript/subscript
  [{ 'indent': '-1'}, { 'indent': '+1' }],          // outdent/indent
  [{ 'direction': 'rtl' }],                         // text direction

  [{ 'size': ['small', false, 'large', 'huge'] }],  // custom dropdown
  [{ 'header': [1, 2, 3, 4, 5, 6, false] }],

  // [{ 'color': [] }, { 'background': [] }],          // dropdown with defaults from theme
  [{ 'color': [] }],          // dropdown with defaults from theme
  [{ 'align': [] }],

  ['clean']                                         // remove formatting button
];

let quill = "";

// Light & Dark Theme
let changeEditColorDark = "";
let changeEditColorLight = "";
let txtEdit = "";
let bgEdit = "";
let txtLight = "";

let modalDetailPost = "";
let inputBgColor = "";
router.on(
  '/editContent/:id/:path',
  ()=>{
    $("#app").html(`<!-- Edit Detail Post -->
        <section id="modalDetailPost" class="section w-full top-0 fixed h-screen bg-[#ffffff] z-[999] overflow-scroll overflow-x-hidden">
        <input type="hidden" id="detailId">
            <div class="w-full z-20 relative">
                <!-- input background color -->
                <div class="w-full flex justify-center items-center py-3 gap-4 preview">
                    <div class="w-fit flex flex-col">
                        <label for="bgColor" class="txtEdit text-lg font-semibold text-[#303841]">Background Colour</label>
                        <input type="text" name="inputBgColor" id="inputBgColor" value="#ffffff" class="py-0 mt-1 px-3 text-base font-semibold w-24 border text-center rounded-md shadow-md mx-auto" readonly="readonly">
                    </div>
                    <input type="color" name="bgColor" id="bgColor" class="p-1 w-10 h-10 rounded-md shadow-md" value="#ffffff">
                    <div id="changeEditColorLight" class="w-fit hover:scale-110 cursor-pointer" onclick="changeEditColor('tolight')">
                        <svg xmlns="https://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" class="fill-white bi bi-eye-fill" viewBox="0 0 16 16">
                            <path d="M10.5 8a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0z"/>
                            <path d="M0 8s3-5.5 8-5.5S16 8 16 8s-3 5.5-8 5.5S0 8 0 8zm8 3.5a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7z"/>
                        </svg>
                    </div>
                    <div id="changeEditColorDark" class="w-fit hover:scale-110 cursor-pointer hidden" onclick="changeEditColor('todark')">
                        <svg xmlns="https://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" class="fill-black bi bi-eye-fill" viewBox="0 0 16 16">
                            <path d="M10.5 8a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0z"/>
                            <path d="M0 8s3-5.5 8-5.5S16 8 16 8s-3 5.5-8 5.5S0 8 0 8zm8 3.5a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7z"/>
                        </svg>
                    </div>
                </div>
                <hr class="preview">
                <!-- Hamburger menu -->
                <div class="fixed top-5 right-5 z-[999]">
                    <button type="button" id="btnAfterview" class="flex absolute right-0 top-0 md:right-14 items-center hover:scale-110 cursor-pointer border py-1 px-2 rounded-md shadow-md bg-white z-[9999] afterview hidden" onclick="afterview()">
                        <p class="inline text-lg font-semibold text-[#FF577F]">Back</p>
                        <svg xmlns="https://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" class="fill-[#FF577F] bi bi-backspace-fill ml-2" viewBox="0 0 16 16">
                            <path d="M15.683 3a2 2 0 0 0-2-2h-7.08a2 2 0 0 0-1.519.698L.241 7.35a1 1 0 0 0 0 1.302l4.843 5.65A2 2 0 0 0 6.603 15h7.08a2 2 0 0 0 2-2V3zM5.829 5.854a.5.5 0 1 1 .707-.708l2.147 2.147 2.146-2.147a.5.5 0 1 1 .707.708L9.39 8l2.146 2.146a.5.5 0 0 1-.707.708L8.683 8.707l-2.147 2.147a.5.5 0 0 1-.707-.708L7.976 8 5.829 5.854z"/>
                          </svg>
                    </button>
                    <button id="hamburgerDetail" name="hamburgerDetail" type="button" class="preview block absolute right-0 z-50 top-0 md:right-14" onclick="navbarDetailClick()">
                        <span class="hamburger-line-detail bgEdit origin-top-left transition duration-500 ease-in-out"></span>
                        <span class="hamburger-line-detail bgEdit transition duration-500 ease-in-out"></span>
                        <span class="hamburger-line-detail bgEdit origin-bottom-left transition duration-500 ease-in-out"></span>
                    </button>
                </div>
                <!-- Main Menu -->
                <div id="mainMenuDetail" class="fixed top-16 right-8 cursor-pointer grid justify-items-end bg-[#FFECDA] px-3 py-3 rounded-md shadow-md z-[999] hidden preview">
                    <div class="w-fit flex justify-center items-center hover:scale-110" onclick="addRow()">
                        <p class="text-lg font-semibold text-[#FFB200] px-3">Add Row</p>
                        <svg xmlns="https://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" class="fill-[#FFB200] bi bi-plus-square-fill" viewBox="0 0 16 16">
                            <path d="M2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2zm6.5 4.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3a.5.5 0 0 1 1 0z"/>
                        </svg>
                    </div>
                    <div class="w-fit mt-3 flex justify-center items-center hover:scale-110" onclick="saveAll()">
                        <p class="text-lg font-semibold text-[#1FAB89] px-3">Save</p>
                        <svg xmlns="https://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" class="fill-[#1FAB89] bi bi-check-square-fill" viewBox="0 0 16 16">
                            <path d="M2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2zm10.03 4.97a.75.75 0 0 1 .011 1.05l-3.992 4.99a.75.75 0 0 1-1.08.02L4.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093 3.473-4.425a.75.75 0 0 1 1.08-.022z"/>
                        </svg>
                    </div>
                    <div class="w-fit mt-3 flex justify-center items-center hover:scale-110" onclick="preview()">
                        <p class="text-lg font-semibold text-[#5F9DF7] px-3">Preview</p>
                        <svg xmlns="https://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" class="fill-[#5F9DF7] bi bi-play-btn-fill" viewBox="0 0 16 16">
                            <path d="M0 12V4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2zm6.79-6.907A.5.5 0 0 0 6 5.5v5a.5.5 0 0 0 .79.407l3.5-2.5a.5.5 0 0 0 0-.814l-3.5-2.5z"/>
                          </svg>
                    </div>
                    <a href="https://literature.arashiyunus.com/allpost">
                    <div class="w-fit mt-3 flex justify-center items-center hover:scale-110">
                        <p class="text-lg font-semibold text-[#FF577F] px-3">Back to Post</p>
                        <svg xmlns="https://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" class="fill-[#FF577F] bi bi-box-arrow-left" viewBox="0 0 16 16">
                            <path fill-rule="evenodd" d="M6 12.5a.5.5 0 0 0 .5.5h8a.5.5 0 0 0 .5-.5v-9a.5.5 0 0 0-.5-.5h-8a.5.5 0 0 0-.5.5v2a.5.5 0 0 1-1 0v-2A1.5 1.5 0 0 1 6.5 2h8A1.5 1.5 0 0 1 16 3.5v9a1.5 1.5 0 0 1-1.5 1.5h-8A1.5 1.5 0 0 1 5 12.5v-2a.5.5 0 0 1 1 0v2z"/>
                            <path fill-rule="evenodd" d="M.146 8.354a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L1.707 7.5H10.5a.5.5 0 0 1 0 1H1.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3z"/>
                        </svg>
                    </div>
                    </a>
                </div>
                <!-- Body -->
                <section class="w-full mb-5" id="body">
                    <!-- Judul -->
                    <div class="row w-full flex flex-wrap justify-end mx-auto border-b">
                        <div class="w-full lg:w-[80%] relative">
                            <div class="ql-editor contentBody"></div>
                            <div class="preview absolute flex items-center -bottom-3 bg-[#FFCB42] px-2 z-[99999] rounded-md shadow-md left-5 cursor-pointer hover:scale-110 btnShowModalEditDetailPost">
                                <svg xmlns="https://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="txtEdit bi bi-pencil-square" viewBox="0 0 16 16">
                                    <path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z"/>
                                    <path fill-rule="evenodd" d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5v11z"/>
                                  </svg>
                                <p class="txtEdit text-base ml-2 font-semibold">Edit</p>
                            </div>
                        </div>
                        <div class="w-full  lg:w-[10%] right-0 flex flex-wrap flex-col justify-center items-center mb-3">
                            <!-- <div class="preview w-full flex justify-center gap-2">
                                <button type="button" class="py-2 px-3 rounded-md shadow-md text-[#FF577F] font-semibold">Delete Rows</button>
                            </div> -->
                        </div>
                    </div>
                    
                    <!-- 1 Division -->
                    <!-- <div class="row w-full flex flex-wrap mx-auto justify-end border-b">
                        <div class="content w-full lg:w-[80%] flex flex-wrap justify-evenly">
                            <div class="w-full md:w-full relative">
                                <div class="ql-editor contentBody"><p class="text-justify">2So I started to walk into the water. I won't lie to you boys, I was terrified. But I pressed on, and as I made my way past the breakers a strange calm came over me. I don't know if it was divine intervention or the kinship of all living things but I tell you Jerry at that moment, I was a marine biologist. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sequi delectus beatae vel fuga, ipsa dignissimos excepturi corporis cupiditate. Ex, aliquid commodi. Eaque delectus a reprehenderit iure placeat esse nobis, veritatis corrupti expedita perspiciatis molestiae provident, est nemo iusto vitae ab.</p></div>
                                <div class="preview absolute flex items-center -bottom-3 bg-[#FFCB42] px-2 z-[99999] rounded-md shadow-md left-5 cursor-pointer hover:scale-110 btnShowModalEditDetailPost">
                                    <svg xmlns="https://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="txtEdit bi bi-pencil-square" viewBox="0 0 16 16">
                                        <path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z"/>
                                        <path fill-rule="evenodd" d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5v11z"/>
                                      </svg>
                                      <p class="txtEdit text-base ml-2 font-semibold">Edit</p>
                                </div>
                            </div>
                        </div>
                        <div class="w-full lg:w-[10%] right-0 flex flex-wrap flex-col justify-center items-center">
                            <div class="preview w-full flex flex-col text-center preview">
                                <p class="text-2xl font-bold">2</p>
                                <select name="colPerRow" class="w-fit mx-auto text-lg font-semibold hidden">
                                    <option value="1">1</option>
                                    <option value="2">2</option>
                                    <option value="3">3</option>
                                </select>
                                <p class="text-lg font-bold">Col / Row</p>
                            </div>
                            <div class="preview w-full flex flex-wrap items-center flex-col justify-center gap-2 mb-3">
                                <div class="w-full menuEditRow flex justify-center hidden flex-col items-center">
                                    <button type="button" class="hover:scale-110 border-[#1FAB89] border-2 text-[#1FAB89] w-fit mt-2 py-1 px-3 rounded-md shadow-md font-semibold btnSaveEditRow" data-row="1">Save</button>
                                    <button type="button" class="hover:scale-110 border-[#FF577F] border-2 text-[#FF577F] w-fit mt-2 py-1 px-3 rounded-md shadow-md font-semibold btnCancelEditRow">Cancel</button>
                                </div>
                                <button type="button" class="hover:scale-110 border-[#FFB200] border-2 text-[#FFB200] w-fit py-1 px-3 rounded-md shadow-md font-semibold btnEditRow">Edit Row</button>
                                <button type="button" class="hover:scale-110 border-[#FF577F] border-2 text-[#FF577F] w-fit btnDeleteRow py-1 px-3 rounded-md shadow-md font-semibold" onclick="deleteRow(event)">Delete Rows</button>
                            </div>
                        </div>
                    </div> -->
                    <!-- <hr class="preview"> -->
                    <!-- 2 Division -->
                    <!-- <div class="row w-full flex flex-wrap mx-auto justify-end border-b">
                        <div class="content w-full lg:w-[80%] flex flex-wrap justify-evenly">
                            <div class="w-full md:w-1/2 relative">
                                <div class="ql-editor contentBody"><p class="text-justify">3So I started to walk into the water. I won't lie to you boys, I was terrified. But I pressed on, and as I made my way past the breakers a strange calm came over me. I don't know if it was divine intervention or the kinship of all living things but I tell you Jerry at that moment, I was a marine biologist.</p></div>
                                <div class="preview absolute flex items-center -bottom-3 bg-[#FFCB42] px-2 z-[99999] rounded-md shadow-md left-5 cursor-pointer hover:scale-110 btnShowModalEditDetailPost">
                                    <svg xmlns="https://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="txtEdit bi bi-pencil-square" viewBox="0 0 16 16">
                                        <path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z"/>
                                        <path fill-rule="evenodd" d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5v11z"/>
                                      </svg>
                                      <p class="txtEdit text-base ml-2 font-semibold">Edit</p>
                                </div>
                            </div>
                            <div class="w-full md:w-1/2 relative">
                                <div class="ql-editor contentBody"><p class="text-justify">4So I started to walk into the water. I won't lie to you boys, I was terrified. But I pressed on, and as I made my way past the breakers a strange calm came over me. I don't know if it was divine intervention or the kinship of all living things but I tell you Jerry at that moment, I was a marine biologist.</p></div>
                                <div class="preview absolute flex items-center -bottom-3 bg-[#FFCB42] px-2 z-[99999] rounded-md shadow-md left-5 cursor-pointer hover:scale-110 btnShowModalEditDetailPost">
                                    <svg xmlns="https://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="txtEdit bi bi-pencil-square" viewBox="0 0 16 16">
                                        <path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z"/>
                                        <path fill-rule="evenodd" d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5v11z"/>
                                      </svg>
                                      <p class="txtEdit text-base ml-2 font-semibold">Edit</p>
                                </div>
                            </div>
                        </div>
                        <div class="w-full lg:w-[10%] right-0 flex flex-wrap flex-col justify-center items-center">
                            <div class="preview w-full flex flex-col text-center preview">
                                <p class="text-2xl font-bold">2</p>
                                <select name="colPerRow" class="w-fit mx-auto text-lg font-semibold hidden">
                                    <option value="1">1</option>
                                    <option value="2" selected="selected">2</option>
                                    <option value="3">3</option>
                                </select>
                                <p class="text-lg font-bold">Col / Row</p>
                            </div>
                            <div class="preview w-full flex flex-wrap items-center flex-col justify-center gap-2 mb-3">
                                <div class="w-full menuEditRow flex justify-center hidden flex-col items-center">
                                    <button type="button" class="hover:scale-110 border-[#1FAB89] border-2 text-[#1FAB89] w-fit mt-2 py-1 px-3 rounded-md shadow-md font-semibold btnSaveEditRow" data-row="2">Save</button>
                                    <button type="button" class="hover:scale-110 border-[#FF577F] border-2 text-[#FF577F] w-fit mt-2 py-1 px-3 rounded-md shadow-md font-semibold btnCancelEditRow">Cancel</button>
                                </div>
                                <button type="button" class="hover:scale-110 border-[#FFB200] border-2 text-[#FFB200] w-fit py-1 px-3 rounded-md shadow-md font-semibold btnEditRow">Edit Row</button>
                                <button type="button" class="hover:scale-110 border-[#FF577F] border-2 text-[#FF577F] w-fit btnDeleteRow py-1 px-3 rounded-md shadow-md font-semibold" onclick="deleteRow(event)">Delete Rows</button>
                            </div>
                        </div>
                    </div> -->
                    
                    <!-- 3 Division -->
                    <!-- <div class="row w-full flex flex-wrap mx-auto justify-end border-b">
                        <div class="content w-full lg:w-[80%] flex flex-wrap justify-evenly">
                            <div class="w-full md:w-1/3 relative">
                                <div class="ql-editor contentBody"><p class="text-justify">5So I started to walk into the water. I won't lie to you boys, I was terrified. But I pressed on, and as I made my way past the breakers a strange calm came over me. I don't know if it was divine intervention or the kinship of all living things but I tell you Jerry at that moment, I was a marine biologist.</p></div>
                                <div class="preview absolute flex items-center -bottom-3 bg-[#FFCB42] px-2 z-[99999] rounded-md shadow-md left-5 cursor-pointer hover:scale-110 btnShowModalEditDetailPost">
                                    <svg xmlns="https://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="txtEdit bi bi-pencil-square" viewBox="0 0 16 16">
                                        <path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z"/>
                                        <path fill-rule="evenodd" d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5v11z"/>
                                      </svg>
                                      <p class="txtEdit text-base ml-2 font-semibold">Edit</p>
                                </div>
                            </div>
                            <div class="w-full md:w-1/3 relative">
                                <div class="ql-editor contentBody"><p class="text-justify">6So I started to walk into the water. I won't lie to you boys, I was terrified. But I pressed on, and as I made my way past the breakers a strange calm came over me. I don't know if it was divine intervention or the kinship of all living things but I tell you Jerry at that moment, I was a marine biologist.</p></div>
                                <div class="preview absolute flex items-center -bottom-3 bg-[#FFCB42] px-2 z-[99999] rounded-md shadow-md left-5 cursor-pointer hover:scale-110 btnShowModalEditDetailPost">
                                    <svg xmlns="https://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="txtEdit bi bi-pencil-square" viewBox="0 0 16 16">
                                        <path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z"/>
                                        <path fill-rule="evenodd" d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5v11z"/>
                                      </svg>
                                      <p class="txtEdit text-base ml-2 font-semibold">Edit</p>
                                </div>
                            </div>
                            <div class="w-full md:w-1/3 relative">
                                <div class="ql-editor contentBody"><p class="text-justify">7So I started to walk into the water. I won't lie to you boys, I was terrified. But I pressed on, and as I made my way past the breakers a strange calm came over me. I don't know if it was divine intervention or the kinship of all living things but I tell you Jerry at that moment, I was a marine biologist.</p></div>
                                <div class="preview absolute flex items-center -bottom-3 bg-[#FFCB42] px-2 z-[99999] rounded-md shadow-md left-5 cursor-pointer hover:scale-110 btnShowModalEditDetailPost">
                                    <svg xmlns="https://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="txtEdit bi bi-pencil-square" viewBox="0 0 16 16">
                                        <path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z"/>
                                        <path fill-rule="evenodd" d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5v11z"/>
                                      </svg>
                                      <p class="txtEdit text-base ml-2 font-semibold">Edit</p>
                                </div>
                            </div>
                        </div>
                        <div class="w-full lg:w-[10%] right-0 flex flex-wrap flex-col justify-center items-center">
                            <div class="preview w-full flex flex-col text-center preview">
                                <p class="text-2xl font-bold">2</p>
                                <select name="colPerRow" id="" class="w-fit mx-auto text-lg font-semibold hidden">
                                    <option value="1">1</option>
                                    <option value="2">2</option>
                                    <option value="3" selected="selected">3</option>
                                </select>
                                <p class="text-lg font-bold">Col / Row</p>
                            </div>
                            <div class="preview w-full flex flex-wrap items-center flex-col justify-center gap-2 mb-3">
                                <div class="w-full menuEditRow flex justify-center hidden flex-col items-center">
                                    <button type="button" class="hover:scale-110 border-[#1FAB89] border-2 text-[#1FAB89] w-fit mt-2 py-1 px-3 rounded-md shadow-md font-semibold btnSaveEditRow" data-row="3">Save</button>
                                    <button type="button" class="hover:scale-110 border-[#FF577F] border-2 text-[#FF577F] w-fit mt-2 py-1 px-3 rounded-md shadow-md font-semibold btnCancelEditRow">Cancel</button>
                                </div>
                                <button type="button" class="hover:scale-110 border-[#FFB200] border-2 text-[#FFB200] w-fit py-1 px-3 rounded-md shadow-md font-semibold btnEditRow">Edit Row</button>
                                <button type="button" class="hover:scale-110 border-[#FF577F] border-2 text-[#FF577F] w-fit btnDeleteRow py-1 px-3 rounded-md shadow-md font-semibold" onclick="deleteRow(event)">Delete Rows</button>
                            </div>
                        </div>
                    </div> -->
                </section>
            </div>
    
            <!-- Modal Edit Detail Post -->
            <div class="w-full fixed h-screen z-[999] backdrop-blur-md top-0 hidden" id="modalEditDetailPost">
                <div class="w-full flex justify-center">
                    <div class="w-full md:w-2/3 lg:w-1/2 p-5 mt-20 lg:mt-14 bg-[#FFF8EA] rounded-md shadow-md">
                        <div class="w-full flex justify-center">
                            <button type="button" class="py-2 px-3 hover:scale-110" onclick="saveContentEdit()">
                                <svg xmlns="https://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" class="fill-[#1FAB89]
                                bi bi-check-square" viewBox="0 0 16 16">
                                    <path d="M14 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h12zM2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2z"/>
                                    <path d="M10.97 4.97a.75.75 0 0 1 1.071 1.05l-3.992 4.99a.75.75 0 0 1-1.08.02L4.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093 3.473-4.425a.235.235 0 0 1 .02-.022z"/>
                                  </svg>
                            </button>
                            <button type="button" class="py-2 px-3 hover:scale-110" id="btnCloseModalEditDetailPost" onclick="closeModalEditDetailPost()">
                                <svg xmlns="https://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" class="fill-[#FF577F] bi bi-x-square" viewBox="0 0 16 16">
                                    <path d="M14 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h12zM2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2z"/>
                                    <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"/>
                                  </svg>
                            </button>
                        </div>
                        <div id="container" class="w-full h-[250px] ql-editor"></div>
                    </div>
                </div>
            </div>
              
        </section>`)
  },
  {
    before: (done)=>{
        axios({
          method : "POST",
          url : "https://apipuisi.arashiyunus.com/api/auth/checkUser",
          data : {
              req : "userid"
          },
          headers : config(),
      }).then((response) => {
          if(response.status){
              userid = response.data.userid
              done()
          }
      }
      ).catch((err)=>{
          if(err.response.status === 401){
              window.location.replace("https://literature.arashiyunus.com/")
          }
      })
    },
    after: (param)=>{
      // console.log(param)
      // Hamburger
      hamburgerDetail = document.querySelector("#hamburgerDetail");
      mainMenuDetail = document.querySelector("#mainMenuDetail");
      $("#detailId").val(param.data.id)
      modalDetailPost = document.getElementById("modalDetailPost")
      inputBgColor = document.getElementById("inputBgColor")
      quill = new Quill('#container', {
        modules: {
            toolbar: toolbarOptions
        },
        theme: 'snow'
      });
      let data = {
        path : param.data.path
    }
    
      // Light & Dark Theme
     changeEditColorDark = document.getElementById("changeEditColorDark");
     changeEditColorLight = document.getElementById("changeEditColorLight");
     txtEdit = document.getElementsByClassName("txtEdit");
     bgEdit = document.getElementsByClassName("bgEdit");
     txtLight = document.getElementsByClassName("txtEdit");
    axios({
        method : "POST",
        url : "https://apipuisi.arashiyunus.com/api/auth/getContent",
        data : data,
        headers : config()

    }).then((res)=>{
        $("#modalDetailPost").css("background-color", res.data.bgColor)
        $("#bgColor").val(res.data.bgColor)
        $("#inputBgColor").val(res.data.bgColor)
        let contentBody = $(".contentBody");
        let contentBodyLength = $("#contentBody").length;
        contentBody.eq(0).html(`<p class="ql-align-center">`+res.data.title+`</p>`)
        const content = res.data.content;
        let body = "";
        for(a = 0; a < content.length; a++){
            body += `
                <div class="row w-full flex flex-wrap mx-auto justify-end border-b">
                `
                body += `<div class="content w-full lg:w-[80%] flex flex-wrap justify-evenly">`
                for(b = 0; b < content[a].length; b ++){
                if(content[a].length == 1){
                    body +=`<div class="w-full md:w-full relative">
                                    <div class="ql-editor contentBody">`+content[a][b]+`</div>
                                    <div class="preview absolute flex items-center -bottom-3 bg-[#FFCB42] px-2 z-[99999] rounded-md shadow-md left-5 cursor-pointer hover:scale-110 btnShowModalEditDetailPost">
                                        <svg xmlns="https://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="txtEdit bi bi-pencil-square" viewBox="0 0 16 16">
                                            <path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z"/>
                                            <path fill-rule="evenodd" d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5v11z"/>
                                        </svg>
                                        <p class="txtEdit text-base ml-2 font-semibold">Edit</p>
                                    </div>
                                </div>
                            `
                }else if(content[a].length == 2){
                    body += `
                                <div class="w-full md:w-1/2 relative">
                                    <div class="ql-editor contentBody">`+content[a][b]+`</div>
                                    <div class="preview absolute flex items-center -bottom-3 bg-[#FFCB42] px-2 z-[99999] rounded-md shadow-md left-5 cursor-pointer hover:scale-110 btnShowModalEditDetailPost">
                                        <svg xmlns="https://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="txtEdit bi bi-pencil-square" viewBox="0 0 16 16">
                                            <path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z"/>
                                            <path fill-rule="evenodd" d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5v11z"/>
                                        </svg>
                                        <p class="txtEdit text-base ml-2 font-semibold">Edit</p>
                                    </div>
                                </div>
                            `
                }else if(content[a].length == 3){
                    body += `
                    <div class="w-full md:w-1/3 relative">
                        <div class="ql-editor contentBody">`+content[a][b]+`</div>
                        <div class="preview absolute flex items-center -bottom-3 bg-[#FFCB42] px-2 z-[99999] rounded-md shadow-md left-5 cursor-pointer hover:scale-110 btnShowModalEditDetailPost">
                            <svg xmlns="https://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="txtEdit bi bi-pencil-square" viewBox="0 0 16 16">
                                <path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z"/>
                                <path fill-rule="evenodd" d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5v11z"/>
                              </svg>
                              <p class="txtEdit text-base ml-2 font-semibold">Edit</p>
                        </div>
                    </div>`
                }
                
            }
            // console.log(body)
            body += `</div>`
            if(content[a].length == 1){
                body += `<div class="w-full lg:w-[10%] right-0 flex flex-wrap flex-col justify-center items-center">
                    <div class="preview w-full flex flex-col text-center preview">
                        <p class="text-2xl font-bold">1</p>
                        <select name="colPerRow" class="w-fit mx-auto text-lg font-semibold hidden">
                            <option value="1" selected="selected">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                        </select>
                        <p class="text-lg font-bold">Col / Row</p>
                    </div>
                    <div class="preview w-full flex flex-wrap items-center flex-col justify-center gap-2 mb-3">
                        <div class="w-full menuEditRow flex justify-center hidden flex-col items-center">
                            <button type="button" class="hover:scale-110 border-[#1FAB89] border-2 text-[#1FAB89] w-fit mt-2 py-1 px-3 rounded-md shadow-md font-semibold btnSaveEditRow" data-row="2">Save</button>
                            <button type="button" class="hover:scale-110 border-[#FF577F] border-2 text-[#FF577F] w-fit mt-2 py-1 px-3 rounded-md shadow-md font-semibold btnCancelEditRow">Cancel</button>
                        </div>
                        <button type="button" class="hover:scale-110 border-[#FFB200] border-2 text-[#FFB200] w-fit py-1 px-3 rounded-md shadow-md font-semibold btnEditRow">Edit Row</button>
                        <button type="button" class="hover:scale-110 border-[#FF577F] border-2 text-[#FF577F] w-fit btnDeleteRow py-1 px-3 rounded-md shadow-md font-semibold" onclick="deleteRow(event)">Delete Rows</button>
                    </div>
                </div>`
            }
            else if(content[a].length == 2){
                body += `<div class="w-full lg:w-[10%] right-0 flex flex-wrap flex-col justify-center items-center">
                    <div class="preview w-full flex flex-col text-center preview">
                        <p class="text-2xl font-bold">2</p>
                        <select name="colPerRow" class="w-fit mx-auto text-lg font-semibold hidden">
                            <option value="1">1</option>
                            <option value="2" selected="selected">2</option>
                            <option value="3">3</option>
                        </select>
                        <p class="text-lg font-bold">Col / Row</p>
                    </div>
                    <div class="preview w-full flex flex-wrap items-center flex-col justify-center gap-2 mb-3">
                        <div class="w-full menuEditRow flex justify-center hidden flex-col items-center">
                            <button type="button" class="hover:scale-110 border-[#1FAB89] border-2 text-[#1FAB89] w-fit mt-2 py-1 px-3 rounded-md shadow-md font-semibold btnSaveEditRow" data-row="2">Save</button>
                            <button type="button" class="hover:scale-110 border-[#FF577F] border-2 text-[#FF577F] w-fit mt-2 py-1 px-3 rounded-md shadow-md font-semibold btnCancelEditRow">Cancel</button>
                        </div>
                        <button type="button" class="hover:scale-110 border-[#FFB200] border-2 text-[#FFB200] w-fit py-1 px-3 rounded-md shadow-md font-semibold btnEditRow">Edit Row</button>
                        <button type="button" class="hover:scale-110 border-[#FF577F] border-2 text-[#FF577F] w-fit btnDeleteRow py-1 px-3 rounded-md shadow-md font-semibold" onclick="deleteRow(event)">Delete Rows</button>
                    </div>
                </div>`
            }
            else if(content[a].length == 3){
                body += `<div class="w-full lg:w-[10%] right-0 flex flex-wrap flex-col justify-center items-center">
                    <div class="preview w-full flex flex-col text-center preview">
                        <p class="text-2xl font-bold">3</p>
                        <select name="colPerRow" class="w-fit mx-auto text-lg font-semibold hidden">
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3" selected="selected">3</option>
                        </select>
                        <p class="text-lg font-bold">Col / Row</p>
                    </div>
                    <div class="preview w-full flex flex-wrap items-center flex-col justify-center gap-2 mb-3">
                        <div class="w-full menuEditRow flex justify-center hidden flex-col items-center">
                            <button type="button" class="hover:scale-110 border-[#1FAB89] border-2 text-[#1FAB89] w-fit mt-2 py-1 px-3 rounded-md shadow-md font-semibold btnSaveEditRow" data-row="2">Save</button>
                            <button type="button" class="hover:scale-110 border-[#FF577F] border-2 text-[#FF577F] w-fit mt-2 py-1 px-3 rounded-md shadow-md font-semibold btnCancelEditRow">Cancel</button>
                        </div>
                        <button type="button" class="hover:scale-110 border-[#FFB200] border-2 text-[#FFB200] w-fit py-1 px-3 rounded-md shadow-md font-semibold btnEditRow">Edit Row</button>
                        <button type="button" class="hover:scale-110 border-[#FF577F] border-2 text-[#FF577F] w-fit btnDeleteRow py-1 px-3 rounded-md shadow-md font-semibold" onclick="deleteRow(event)">Delete Rows</button>
                    </div>
                </div>`
            }
        }
        body += `</div>`
        $("#body").append(body);
    })
    }
  }
)

router.resolve()
function navbarDetailClick(){
  hamburgerDetail.classList.toggle("hamburger-detail-active");
  mainMenuDetail.classList.toggle("hidden");
}
// Add Row
function addRow(){
  $("#body").append(`
  <div class="row w-full flex flex-wrap mx-auto justify-end border-b">
          <div class="content w-full lg:w-[80%] flex flex-wrap justify-evenly">
              <div class="w-full md:w-full relative">
                  <div class="ql-editor contentBody"></div>
                  <div class="preview absolute flex items-center -bottom-3 bg-[#FFCB42] px-2 z-[99999] rounded-md shadow-md left-5 cursor-pointer hover:scale-110 btnShowModalEditDetailPost">
                      <svg xmlns="https://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="txtEdit bi bi-pencil-square" viewBox="0 0 16 16">
                          <path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z"/>
                          <path fill-rule="evenodd" d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5v11z"/>
                        </svg>
                        <p class="txtEdit text-base ml-2 font-semibold">Edit</p>
                  </div>
              </div>
          </div>
          <div class="w-full lg:w-[10%] right-0 flex flex-wrap flex-col justify-center items-center">
              <div class="preview w-full flex flex-col text-center preview">
                  <p class="text-2xl font-bold">1</p>
                  <select name="colPerRow" class="w-fit mx-auto text-lg font-semibold hidden">
                      <option value="1">1</option>
                      <option value="2">2</option>
                      <option value="3">3</option>
                  </select>
                  <p class="text-lg font-bold">Col / Row</p>
              </div>
              <div class="preview w-full flex flex-wrap items-center flex-col justify-center gap-2 mb-3">
                  <div class="w-full menuEditRow flex justify-center hidden flex-col items-center">
                      <button type="button" class="hover:scale-110 border-[#1FAB89] border-2 text-[#1FAB89] w-fit mt-2 py-1 px-3 rounded-md shadow-md font-semibold btnSaveEditRow" data-row="1">Save</button>
                      <button type="button" class="hover:scale-110 border-[#FF577F] border-2 text-[#FF577F] w-fit mt-2 py-1 px-3 rounded-md shadow-md font-semibold btnCancelEditRow">Cancel</button>
                  </div>
                  <button type="button" class="hover:scale-110 border-[#FFB200] border-2 text-[#FFB200] w-fit py-1 px-3 rounded-md shadow-md font-semibold btnEditRow">Edit Row</button>
                  <button type="button" class="hover:scale-110 border-[#FF577F] border-2 text-[#FF577F] w-fit btnDeleteRow py-1 px-3 rounded-md shadow-md font-semibold" onclick="deleteRow(event)">Delete Rows</button>
              </div>
          </div>
      </div>
  `)
}
// Preview Edit Detail Post
function preview(){
  const preview = document.querySelectorAll(".preview")
  for(a = 0; a < preview.length; a++){
      preview[a].classList.add("hidden")
  }
  const rowBorder = document.querySelectorAll(".row")
  for(a = 0; a < rowBorder.length; a++){
      rowBorder[a].classList.toggle("border-b")
  }
  btnAfterview.classList.remove("hidden");
}

function afterview(){
  const preview = document.querySelectorAll(".preview")
  for(a = 0; a < preview.length; a++){
      preview[a].classList.remove("hidden")
  }
  const rowBorder = document.querySelectorAll(".row")
  for(a = 0; a < rowBorder.length; a++){
      rowBorder[a].classList.toggle("border-b")
  }
  btnAfterview.classList.add("hidden");
  
}
$(document).on("keyup","#inputSearchPost",(e)=>{
  axios({
    method : "POST",
    url: "https://apipuisi.arashiyunus.com/api/auth/getContents",
    headers : config(),
    data : {
      user_id : userid,
      title : $("#inputSearchPost").val(),
      category : category
    }
  }).then((res)=>{
    // console.log(res)
    renderAllContents(res.data.contents.data)
    paginate(res.data.contents.links)
  })
})
function pages(path){
axios({
  method: "POST",
  url : path,
  headers : config(),
  data :{
      category : categoryIndex,
      title : search
  }
}).then((res)=>{
  renderContent(res.data.data)
  pagination(res.data.links)
})
}
function page(path){
  axios({
    method: "POST",
    url : path,
    headers : config(),
    data :{
        user_id : userid,
        title : $("#inputSearchPost").val(),
        category : category
    }
  }).then((res)=>{
    renderAllContents(res.data.contents.data)
    paginate(res.data.contents.links)
  })
}

// Save All
function saveAll(){

  const row = $(".row")
  const contentBody = $(".contentBody")
  const contentBodyIndex = $(".contentBody").length
  // let content = "";

  let con = "";
  const inputBgColor = $("#inputBgColor");
  let text = contentBody.eq(0).html().toString();
  let az = text.replace(/"/g,'\'');
  con += '{"bgColor":"'+inputBgColor.val()+'","title":"'+az+'",';
  let content = []
  let box = []
  let z = 1;
  con += '"content":[';
  // content.push([contentBody.eq(0).html()])
  for(a = 1; a < row.length; a ++){
      // con += '"content'+a+'":[';
      con += '[';
      for(b = 1; b <= row.eq(a).find("select[name='colPerRow']").val(); b ++){
          let text = contentBody.eq(z).html();
          text = text.toString()
          let az = text.replace(/"/g,'\'');
          con += '"'+az+'"';
          if(b < row.eq(a).find("select[name='colPerRow']").val()){
              con += ',';
          }
          z ++;
      }
      if(a < row.length -1){
          con += '],';
      }else{
          con += ']';
      }
      content.push(box)
      box = []
  }
  
  con += ']}';
  let coba = JSON.parse(con)
  let g = []
  g.push(JSON.stringify(coba))
  let blob = new Blob(g, {type : "text/plain"})
  let data = new FormData();
  data.append('id', $("#detailId").val());
  data.append('content', blob);
  // data.append('path', "68a4a8c0-5f3c-40f5-8bcd-e1f2ac10846a.txt");

  axios({
      method : "POST",
      url : "https://apipuisi.arashiyunus.com/api/auth/savecontent",
      headers: config(),
      data : data,
  }).then((res)=>{
      if(res.data.status){
          Swal.fire({
              icon: 'success',
              title: 'Success !',
              text: "Your data has been saved successfully",
          }).then(()=>{
            window.location.replace("https://literature.arashiyunus.com/allpost")
          })
      }
  })
  // const blob = new Blob(g, {type: "application/json"})
  // console.log()
  // const fileUrl = URL.createObjectURL(blob)
  // const link = document.createElement("a")
  // link.download = "MyNotes"
  // link.href = fileUrl
  // link.click()
  // for(a = 0; a < contentBody.length; a++){
  //     console.log(contentBody.eq(a).html())
  // }
}
// Delete Row
function deleteRow(event){
  event.target.closest(".row").remove()
}

// Edit Row
document.addEventListener("click",(e)=>{
  if(e.target.matches(".btnEditRow")){
      event.target.parentElement.previousElementSibling.firstElementChild.nextElementSibling.classList.remove("hidden")
      event.target.parentElement.previousElementSibling.firstElementChild.classList.add("hidden")
      event.target.previousElementSibling.classList.remove("hidden")
      event.target.classList.add("hidden")
  }
})
// Select Col / Row Change Value
$(document).on("change", "select[name='colPerRow']", (event)=>{
  $(event.target).prev().text($(event.target).val())
})
// Save Edit Row
$(document).on("click", ".btnSaveEditRow", (event)=>{
  // const rowIndex = event.target.getAttribute("data-row")
  const select = $("select[name='colPerRow']");
  const row = $(event.target).closest(".row");
  if($(event.target).closest(".preview").prev().find("select").val() == 1){
      row.find(".content").remove()
      row.prepend(`<div class="content w-full lg:w-[80%] flex flex-wrap justify-evenly">
              <div class="w-full md:w-full relative">
                  <div class="ql-editor contentBody"></div>
                  <div class="preview absolute flex items-center -bottom-3 bg-[#FFCB42] px-2 z-[99999] rounded-md shadow-md left-5 cursor-pointer hover:scale-110 btnShowModalEditDetailPost">
                      <svg xmlns="https://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="txtEdit bi bi-pencil-square" viewBox="0 0 16 16">
                          <path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z"/>
                          <path fill-rule="evenodd" d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5v11z"/>
                        </svg>
                        <p class="txtEdit text-base ml-2 font-semibold">Edit</p>
                  </div>
              </div>
          </div>`)
  
  }else if($(event.target).closest(".preview").prev().find("select").val() == 2){
      row.find(".content").remove()
      row.prepend(`<div class="content w-full lg:w-[80%] flex flex-wrap justify-evenly">
              <div class="w-full md:w-1/2 relative">
                  <div class="ql-editor contentBody"></div>
                  <div class="preview absolute flex items-center -bottom-3 bg-[#FFCB42] px-2 z-[99999] rounded-md shadow-md left-5 cursor-pointer hover:scale-110 btnShowModalEditDetailPost">
                      <svg xmlns="https://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="txtEdit bi bi-pencil-square" viewBox="0 0 16 16">
                          <path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z"/>
                          <path fill-rule="evenodd" d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5v11z"/>
                        </svg>
                        <p class="txtEdit text-base ml-2 font-semibold">Edit</p>
                  </div>
              </div>
              <div class="w-full md:w-1/2 relative">
                  <div class="ql-editor contentBody"></div>
                  <div class="preview absolute flex items-center -bottom-3 bg-[#FFCB42] px-2 z-[99999] rounded-md shadow-md left-5 cursor-pointer hover:scale-110 btnShowModalEditDetailPost">
                      <svg xmlns="https://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="txtEdit bi bi-pencil-square" viewBox="0 0 16 16">
                          <path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z"/>
                          <path fill-rule="evenodd" d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5v11z"/>
                        </svg>
                        <p class="txtEdit text-base ml-2 font-semibold">Edit</p>
                  </div>
              </div>
          </div>`)
      
  }else if($(event.target).closest(".preview").prev().find("select").val() == 3){
      row.find(".content").remove()
      row.prepend(`<div class="content w-full lg:w-[80%] flex flex-wrap justify-evenly">
              <div class="w-full md:w-1/3 relative">
                  <div class="ql-editor contentBody"></div>
                  <div class="preview absolute flex items-center -bottom-3 bg-[#FFCB42] px-2 z-[99999] rounded-md shadow-md left-5 cursor-pointer hover:scale-110 btnShowModalEditDetailPost">
                      <svg xmlns="https://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="txtEdit bi bi-pencil-square" viewBox="0 0 16 16">
                          <path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z"/>
                          <path fill-rule="evenodd" d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5v11z"/>
                        </svg>
                        <p class="txtEdit text-base ml-2 font-semibold">Edit</p>
                  </div>
              </div>
              <div class="w-full md:w-1/3 relative">
                  <div class="ql-editor contentBody"></div>
                  <div class="preview absolute flex items-center -bottom-3 bg-[#FFCB42] px-2 z-[99999] rounded-md shadow-md left-5 cursor-pointer hover:scale-110 btnShowModalEditDetailPost">
                      <svg xmlns="https://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="txtEdit bi bi-pencil-square" viewBox="0 0 16 16">
                          <path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z"/>
                          <path fill-rule="evenodd" d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5v11z"/>
                        </svg>
                        <p class="txtEdit text-base ml-2 font-semibold">Edit</p>
                  </div>
              </div>
              <div class="w-full md:w-1/3 relative">
                  <div class="ql-editor contentBody"></div>
                  <div class="preview absolute flex items-center -bottom-3 bg-[#FFCB42] px-2 z-[99999] rounded-md shadow-md left-5 cursor-pointer hover:scale-110 btnShowModalEditDetailPost">
                      <svg xmlns="https://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="txtEdit bi bi-pencil-square" viewBox="0 0 16 16">
                          <path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z"/>
                          <path fill-rule="evenodd" d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5v11z"/>
                        </svg>
                        <p class="txtEdit text-base ml-2 font-semibold">Edit</p>
                  </div>
              </div>
          </div>`)
     
  }
  $(event.target).closest(".preview").prev().find("select").toggleClass("hidden")
  $(event.target).closest(".preview").prev().find("p:first").toggleClass("hidden")
  $(event.target).parent().next().toggleClass("hidden")
  $(event.target).parent().toggleClass("hidden")
})
// Cancel Edit Row
$(document).on("click", ".btnCancelEditRow",(event)=>{
  $(event.target).closest(".preview").prev().find("select").toggleClass("hidden")
  $(event.target).closest(".preview").prev().find("p:first").toggleClass("hidden")
  $(event.target).parent().next().toggleClass("hidden")
  $(event.target).parent().toggleClass("hidden")
})
$(document).on("click", ".btnShowModalEditDetailPost", (event)=>{
  contentEdited = $(event.target).closest(".w-full.relative").find(".ql-editor")

  quill.root.innerHTML = ""
  quill.root.innerHTML = $(event.target).closest(".w-full.relative").find(".ql-editor").html()
  document.getElementById("modalEditDetailPost").classList.remove("hidden")
})

$(document).on("change","#bgColor", (e)=>{
  modalDetailPost.style.backgroundColor = e.target.value
  inputBgColor.value = e.target.value
})


// Save Content Edit
function saveContentEdit(){
  // console.log(quill.root.innerHTML)
  contentEdited.html(quill.root.innerHTML)
  document.getElementById("modalEditDetailPost").classList.add("hidden")
}
// Close Modal Edit Detail Post
function closeModalEditDetailPost(){
  document.getElementById("modalEditDetailPost").classList.add("hidden")
}
function changeEditColor(data){
  if(data == "tolight"){
      for (let i = 0; i < txtEdit.length; i++) {
         txtEdit[i].style.color = "white";
      }
      for (let i = 0; i < bgEdit.length; i++) {
         bgEdit[i].style.backgroundColor = "white";
      }
      changeEditColorDark.classList.remove("hidden")
      changeEditColorLight.classList.add("hidden")
  }else if(data == "todark"){
      for (let i = 0; i < bgEdit.length; i++) {
         bgEdit[i].style.backgroundColor = "black";
      }
      for (let i = 0; i < txtEdit.length; i++) {
          txtEdit[i].style.color = "black";
      }
      changeEditColorDark.classList.add("hidden")
      changeEditColorLight.classList.remove("hidden")
  }   
}
function getlatestPost(){
    axios({
        method : "POST",
        url : "https://apipuisi.arashiyunus.com/api/auth/latestPost",
        headers : config()
    }).then((res)=>{
        for (a = 0; a < res.data.length; a ++){
            let img = "";
            if(res.data[a].image_path == null){
                img = "https://swiperjs.com/demos/images/nature-4.jpg";
            }else{
                img = "https://apipuisi.arashiyunus.com/public/storage/image/"+res.data[a].image_path;
            }
            $("#latestContent").append(`<div class="swiper-slide group items bg-center bg-cover w-[250px] h-[250px] relative" onclick="clickContent('`+res.data[a].content_path+`')">
            <div class="absolute text-lg group-hover:scale-125 group-hover:cursor-pointer transition-all duration-700 z-50 text-white font-bold text-center w-full h-full flex flex-wrap justify-center">
              <div class="w-full my-auto">
              <div class="h-[60px] block text-center w-full text-lg backdrop-blur-[3px] font-semibold overflow-hidden">
              <p class="text-ellipsis w-fit py-1 px-2 bg-white/10 rounded-md-md mx-auto"> 
              `+res.data[a].title+`
              </p>
            </div>
            <div class="h-[120px] w-full text-center block">
              <p class="font-normal bg-white/10 text-base text-center break-words text-ellipsis max-h-[120px] overflow-hidden w-fit mx-auto">
              `+res.data[a].description+`
            </p>
            </div>
              </div>
              </div>
            <img src="`+img+`" class="block w-full h-full shadow-lg rounded-lg group-hover:scale-110 z-0 transition-all duration-300" />
          </div>`)
        }
  
      var swiper = new Swiper(".mySwiper", {
        effect: "coverflow",
        grabCursor: true,
        centeredSlides: true,
        // initialSlide: 1,
        loopedSlides: 1,
        coverflowEffect: {
            rotate: 40,
            stretch: 0,
            depth: 0,
            modifier: 1,
            slideShadows: true,
        },
        autoplay: {
          delay: 3000,
          disableOnInteraction: false,
        },
        loop: true,
        keyboard: {
          enabled: true,
        },
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
        },
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },
        breakpoints: {
          // when window width is >= 320px
          0: {
            slidesPerView: "auto",
            spaceBetween: 20
          },
          // when window width is >= 480px
          768: {
            slidesPerView: 3,
            spaceBetween: 30
          },
          // when window width is >= 640px
          1024: {
            slidesPerView: 5,
            spaceBetween: 40
          }
        }
      });
  })
  axios({
    method : "POST",
    url : "https://apipuisi.arashiyunus.com/api/auth/getPaginate",
    headers : config(),
    data : {
      category : categoryIndex,
      title : search
    }
  }).then((res)=>{
    if(res.status == 200){
      renderContent(res.data.data)
      pagination(res.data.links);
    }
  })
  }

function navbarClick(){
    hamburger.classList.toggle("hamburger-active-index");
    menu.classList.toggle("hidden");
}
function navbarDashboardClick(){
    hamburger.classList.toggle("hamburger-active-index");
    navbar.classList.toggle("hidden");
}
function clickContent(data){
let path = data.replace(".txt","");
if(path !== null){
    window.location.replace("https://literature.arashiyunus.com/content/"+path)
}
}
function getAllContents(){
  axios({
    method : "POST",
    url : "https://apipuisi.arashiyunus.com/api/auth/getContents",
    headers : config(),
    data :{
        user_id : userid,
        title : $("#inputSearchPost").val(),
        category : category
    }
}).then((res)=>{
    if(res.status == 200){
        paginate(res.data.contents.links)
        renderAllContents(res.data.contents.data)
    }
})
}
function renderAllContents(data){
  $("#allContentsBody").empty()
  let img = "";
  let n = data.length - 1;
        for(n; n > -1; n --){
            if(data[n].image_path == null){
                img = "https://swiperjs.com/demos/images/nature-4.jpg";
            }else{
                img = "https://apipuisi.arashiyunus.com/public/storage/image/"+data[n].image_path;
            }
            let status = "";
            if(data[n].status == "private"){
                status = `<div class="absolute -top-3 left-3 px-3 py-1 rounded-md bg-[#E40017] text-white font-semibold z-[100]">
                Private
              </div>`
            }else if(data[n].status == "draft"){
                status = `<div class="absolute -top-3 left-3 px-3 py-1 rounded-md bg-[#FF884B] text-white font-semibold z-[100]">
                Draft
              </div>`
            }else if(data[n].status == "publish"){
                status = `<div class="absolute -top-3 left-3 px-3 py-1 rounded-md bg-[#1FAB89] text-white font-semibold z-[100]">
                Publish
              </div>`
            }
            $("#allContentsBody").prepend(`<div class="aContent group items bg-center bg-cover w-[230px] md:h-[230px] relative">`+status+`
            <div class="absolute text-lg group-hover:scale-110 group-hover:cursor-pointer transition-all duration-700 z-50 text-white font-bold w-full h-full flex flex-wrap justify-center text-center">
              <div class="w-full mt-2 flex flex-wrap flex-col justify-center">
                  <div class="h-[60px] block text-center w-full text-lg font-semibold overflow-hidden">
                    <p class="text-ellipsis w-fit mx-auto backdrop-blur-[3px]"> 
                    `+data[n].title+`
                    </p>
                  </div>
                  <div class="h-[120px] w-full text-center block">
                    <p class="font-normal text-base text-center break-words text-ellipsis max-h-[120px] overflow-hidden backdrop-blur-[3px] w-fit mx-auto">
                    `+data[n].description+`
                    </p>
                  </div>
                <div class="w-full flex justify-center gap-3">
                    <button type="button" class="px-3 bg-[#E3C770] rounded-md shadow-md hover:scale-110 hover:transition-all duration-300 btnShowModalEdit" data-id="`+data[n].id+`">Edit</button>
                    <a href="https://literature.arashiyunus.com/editContent/`+data[n].id+`/`+data[n].content_path+`"><button type="button" class="px-3 bg-[#1572A1] rounded-md shadow-md
                    hover:scale-110 hover:transition-all duration-300">Detail</button></a>
                </div>
              </div>
            </div>
            <img src="`+img+`" class="block w-[230px] h-[230px] h- shadow-lg rounded-lg group-hover:scale-110 z-0 transition-all duration-300" />
        </div>`)
        }
}
function removeAllContents(){
  let content = $(".aContent");

  for(a = 0; a < content.length; a++){
      content.eq(a).remove()
  }
}
function renderContent(d){
    let content = "";
    const data = d;
    // Content
    for (a = 0; a < data.length; a++){
      let img = "";
        if(data[a].image_path == null){
            img = "https://swiperjs.com/demos/images/nature-4.jpg";
        }else{
            img = "https://apipuisi.arashiyunus.com/public/storage/image/"+data[a].image_path;
        }
      content += ` <div class="group items bg-center bg-cover w-[230px] md:h-[230px] relative">
      <div class="absolute text-lg group-hover:scale-110 group-hover:cursor-pointer transition-all duration-700 z-50 text-white font-bold w-full h-full flex flex-wrap justify-center text-center">
        <div class="w-full mt-2 flex flex-wrap flex-col justify-center">
            <div class="h-[60px] block text-center w-full text-lg font-semibold overflow-hidden">
              <p class="text-ellipsis w-fit backdrop-blur-[3px] mx-auto"> 
              `+data[a].title+`   
              </p>
            </div>
            <div class="h-[120px] w-full text-center block">
              <p class="font-normal backdrop-blur-[3px] text-base text-center break-words text-ellipsis max-h-[120px] overflow-hidden w-fit mx-auto">
              `+data[a].description+`
            </p>
            </div>
        </div>
      </div>
      <img src="`+img+`" class="block w-[230px] h-[230px] shadow-lg rounded-lg group-hover:scale-110 z-0 transition-all duration-300" />
  </div>`
    }
    $("#allContentsBody").empty()
    $("#allContentsBody").append(content)
  }
  

  function pagination(link){
  // Pagination
  const links = link;
  let pagination = "";
  for (a = 0; a < links.length; a ++){
    let label = "";
    if(links[a].label == "&laquo; Previous")
    {
      label = "&laquo";
    }else if(links[a].label == "Next &raquo;")
    {
      label = "&raquo";
    }else{
      label = links[a].label
    }
    if(links[a].active){
      active = "active"
      pagination += `<button class="text-black rounded-md shadow-md ml-2 float-left py-3 px-5 text-lg font-semibold  bg-[#C4B6B6]">`+label+`</button>`;
     }else if(links[a].url == null){
      pagination += `<button class="text-white rounded-md shadow-md ml-2 float-left py-3 px-5 text-lg font-semibold bg-[#151515]" disabled="disabled">`+label+`</button>`
     }else{
      pagination += `<button class="text-white rounded-md shadow-md ml-2 float-left py-3 px-5 text-lg font-semibold hover:scale-125 hover:text-black bg-[#423F3E] transition-all duration-300  hover:bg-[#ddd]" onclick="pages('`+links[a].url+`')">`+label+`</button>`
    }
  }
  
  $("#contentsPagination").empty()
  $("#contentsPagination").append(pagination)
  }
  function paginate(link){
  // Pagination
  const links = link;
  let pagination = "";
  for (a = 0; a < links.length; a ++){
    let label = "";
    if(links[a].label == "&laquo; Previous")
    {
      label = "&laquo";
    }else if(links[a].label == "Next &raquo;")
    {
      label = "&raquo";
    }else{
      label = links[a].label
    }
    if(links[a].active){
        active = "active"
        pagination += `<button class="text-black rounded-md shadow-md ml-2 float-left py-3 px-5 text-lg font-semibold  bg-[#C4B6B6]">`+label+`</button>`;
       }else if(links[a].url == null){
        pagination += `<button class="text-white rounded-md shadow-md ml-2 float-left py-3 px-5 text-lg font-semibold bg-[#151515]" disabled="disabled">`+label+`</button>`
       }else{
        pagination += `<button class="text-white rounded-md shadow-md ml-2 float-left py-3 px-5 text-lg font-semibold hover:scale-125 hover:text-black bg-[#423F3E] transition-all duration-300  hover:bg-[#ddd]" onclick="page('`+links[a].url+`')">`+label+`</button>`
      }
  }
  
  $("#contentsPagination").empty()
  $("#contentsPagination").append(pagination)
  }
// Show Modal Edit
document.addEventListener('click',(e)=>{
    if(e.target.matches('.btnShowModalEdit')){
        // modalEditPost.classList.toggle("hidden")
  
        axios({
            method : "GET",
            url : "https://apipuisi.arashiyunus.com/api/auth/content/"+e.target.getAttribute("data-id"),
            headers : config(),
        }).then((res)=>{
            $("#dataId").val(e.target.getAttribute("data-id"))
            modalEditPost.classList.toggle("scale-0")
            modalEditPost.classList.toggle("scale-100")
            let t = res.data.title; 
            let d = res.data.description; 
            let title = t.replace(/"/g,'\'');
            let description = d.replace(/"/g,'\'');

            modalPostTitle.value = title
            modalPostDescription.value = description
            modalPostStatus.value = res.data.status
            modalPostCategory.value = res.data.category
    
            prevModalPostTitle.innerHTML = title
            prevModalPostDescription.innerHTML = description
            if(res.data.image_path !== null){
                prevModalPostImage.setAttribute("src","https://apipuisi.arashiyunus.com/public/storage/image/"+res.data.image_path)
            }else{
                prevModalPostImage.setAttribute("src","https://swiperjs.com/demos/images/nature-4.jpg")
            }
        })
    }
})

function previewEdit(name){
    if(name == "preview"){
        btnPreviewEdit.classList.toggle("hidden")
        btnBackEdit.classList.toggle("hidden")
        formEditPost.classList.toggle("hidden")
        previewEditImage.classList.toggle("hidden")
        
    }else if(name == "back"){
        btnPreviewEdit.classList.toggle("hidden")
        btnBackEdit.classList.toggle("hidden")
        previewEditImage.classList.toggle("hidden")
        formEditPost.classList.toggle("hidden")
    }
}

function saveEdit(){
  let content = new FormData();
  content.append('title', modalPostTitle.value);
  content.append('description', modalPostDescription.value);
  content.append('status', modalPostStatus.value);
  content.append('category', modalPostCategory.value);
  content.append('id', $("#dataId").val());
  if(postModalImage){
      content.append('image', postModalImage, postModalImage.name );
  }

  axios({
      method : "POST",
      url : "https://apipuisi.arashiyunus.com/api/auth/editContent",
      data : content,
      headers : config(),
  }).then((res)=>{
      if(res.data.status){
        Swal.fire({
          icon: 'success',
          title: 'Success !',
          text: "Your data has been saved successfully",
      })
      closeEditModal()
      removeAllContents()
      getAllContents()
      }
  })
}

function closeEditModal(){
  modalEditPost.classList.toggle("scale-0")
  modalEditPost.classList.toggle("scale-100")
  modalPostTitle.value = ""
  modalPostDescription.value = ""
  setTimeout(()=>{
      // modalEditPost.classList.add("hidden")
  }, 500)
}

$(document).on("keyup", "#modalPostTitle", (e)=>{
  // console.log(e.target.value)
  $("#prevModalPostTitle").html(e.target.value)
})
$(document).on("keyup", "#modalPostDescription", (e)=>{
  $("#prevModalPostDescription").html(e.target.value)
})
$(document).on("change", "#modalPostImage", (e)=>{
  const imageFiles = e.target.files;
  /**
   * Count the number of files selected.
   */
  const imageFilesLength = imageFiles.length;
  /**
   * If at least one image is selected, then proceed to display the preview.
   */
  if (imageFilesLength > 0) {
      /**
       * Get the image path.
       */
      const imageSrc = URL.createObjectURL(imageFiles[0]);
      /**
       * Select the image preview element.
       */
      const imagePreviewElement = document.querySelector("#prevPostImage");
      /**
       * Assign the path to the image preview element.
       */
      $("#prevModalPostImage").attr("src", imageSrc);
      postModalImage = imageFiles[0]
  }
})
function previewPost(name){
    if(name == "preview"){
        btnPreview.classList.toggle("hidden")
        btnBack.classList.toggle("hidden")
        formCreatePost.classList.toggle("hidden")
        previewImage.classList.toggle("hidden")
        
    }else if(name == "back"){
        btnPreview.classList.toggle("hidden")
        btnBack.classList.toggle("hidden")
        previewImage.classList.toggle("hidden")
        formCreatePost.classList.toggle("hidden")
    }
}

  function signout(){
    Swal.fire({
        title : "Sign out",
        icon : "warning",
        text : "Are you sure you want to sign out?",
        showCancelButton : true,
        confirmButtonText : "Sign Out",
        confirmButtonColor : "#FF577F",
    }).then((res)=>{
        if(res.isConfirmed){
            const d = new Date();
            d.setTime(d.getTime()-(1000))
            let expires = "expires="+d.toUTCString();
            document.cookie = "token=;"+expires+";path=/";
            document.cookie = "userid=;"+expires+";path=/";
            config()
            setTimeout(() => {
                router.navigate('/')
            }, 500);
        }
    })
    // window.location.replace("https://localhost/karya_sastra")
}