
export function ExportAll(){
    return <div>
    <Flex_in_cssReact></Flex_in_cssReact>
    <br />
    <br />
    <FLex_in_TW></FLex_in_TW>
    <br />
    <br />
    <Grid_in_TW></Grid_in_TW>
    <br />
    <br />
    <Responsive_grid></Responsive_grid>
    <br />
    <br />
    <Dukaan_grid></Dukaan_grid>
    <br />
    <br />
    <Bg_n_text_size_color></Bg_n_text_size_color>
    <br />
    <br />
    <Border_radius></Border_radius>
  </div>
}


function Flex_in_cssReact(){
    // IN raw html/css , we write like this:-          <div style="display: flex"></div>
    // in react, we cana pass style obj, like this:-
    return <div>
      <div style={{ 
          display: "flex",
          justifyContent:"space-around"
         }}>
          <div style={{ background: "red" }}>Hi</div>
          <div style={{ background: "blue" }}>Hi</div>
          <div style={{ background: "yellow" }}>Hi</div>
      </div>
    </div>
  }
  
function FLex_in_TW(){
    return <div>
      <div className='flex justify-between'>
          <div className='bg-red-500'>Hi</div>
          <div className='bg-blue-500'>Hi</div>
          <div className='bg-yellow-300'>Hi</div>
        </div>
    </div>
    // w-full can be used to make div cover full length of the screen just like grid
  }
  
function Grid_in_TW(){
    // Lets say we wanna  hv these divs in line but with unequaal widths
    // first we create a grid of 3 here with equal widths
    return <div>
      <div className='grid grid-cols-3'>
        <div className='bg-red-500'>Hi</div>
        <div className='bg-blue-500'>Hi</div>
        <div className='bg-yellow-300'>Hi</div>
        <div className='bg-green-500'>Hi</div>
        <div className='bg-orange-500'>Hi</div>
        <div className='bg-pink-300'>Hi</div>
      </div>
  
      <br />
      <br />
  
      <div className='grid grid-cols-10'>       
        <div className='bg-red-500 col-span-6'>Hi</div>
        <div className='bg-blue-500 col-span-1'>Hi</div>
        <div className='bg-yellow-300 col-span-3'>Hi</div>
        <div className='bg-green-500 col-span-4'>Hi</div>
        <div className='bg-orange-500 col-span-3'>Hi</div>
        <div className='bg-pink-300 col-span-3'>Hi</div>
      </div>    
    </div>
    // Make sure sum of span of divs in 1 row===grid cols of that row
    // <div className='flex'><div className='bg-red-500 w-[40%]'>Hi</div></div>     :- will also do same work if we use flex in outer div
  }
  
function Responsive_grid(){
    // Lets say we want a responsive grid which changes ratio acc to the page configuration, dynamically changing say from 33:33:33% to 50:50|50
    // check out theory bits for breakpount topic
  
    return <div>
      <div className='sm:text-center'>Center for more then 640p</div>
      <br />
      <br />
      <div className='text-center sm:text-left'>Center for less then 640p, Left for less then 640p</div>
      <br />
      <br />
      <div className='bg-red-500 md:bg-blue-500'>GirGit</div>
    </div>
    // 1st div will only center text on screen 640p and wider, not on small screens. Test it by resizing the window
  }
  
function Dukaan_grid(){
    // Here we are making r coloumns that on full screen remains perfectly apart,as soon as dec its size, its config starts changing
    return <div>
      <div className=' flex justify-around'>
        <div className=''>Box 1</div>
        <div className=''>Box 1</div>
        <div className=''>Box 1</div>
      </div>
    </div>
  }
  
function Bg_n_text_size_color(){
    //
    return <div>
      <div className='bg-green-500 text-red-500 text-xs'>Color in TW</div>
    </div>
  }
  
function Border_radius(){
    //md  ,  lg  ,  xl  ,  2xl  ,  3xl  ,  full
    return <div>
      <div className='bg-green-500 text-red-500 rounded-s-full '>
        Border Radius
      </div>
    </div>
  }