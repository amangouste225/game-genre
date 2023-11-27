function App() {
  return (
    <>
      <nav className='navbar bg-base-100'>
        <div className='flex-none'>
          <a className='btn btn-ghost text-xl'>daisyUI</a>
        </div>
        <div className='flex-1 gap-2'>
          <div className='form-control w-full'>
            <input
              type='text'
              placeholder='Search games'
              className='input input-bordered w-full md:w-full rounded-full'
            />
          </div>
          <div className='dropdown dropdown-end'>drkmode</div>
        </div>
      </nav>

      <div className='drawer lg:drawer-open'>
        <input id='my-drawer-2' type='checkbox' className='drawer-toggle' />
        <div className='drawer-content flex flex-col items-center justify-center'>
          {/* Page content here */}
          <label
            htmlFor='my-drawer-2'
            className='btn btn-primary drawer-button lg:hidden'
          >
            Open drawer
          </label>
        </div>
        <div className='drawer-side'>
          <label
            htmlFor='my-drawer-2'
            aria-label='close sidebar'
            className='drawer-overlay'
          ></label>
          <ul className='menu p-4 w-80 min-h-full bg-base-200 text-base-content'>
            {/* Sidebar content here */}
            <li>
              <a>Sidebar Item 1</a>
            </li>
            <li>
              <a>Sidebar Item 2</a>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}

export default App;
