import { Outlet } from 'react-router-dom';

const DefaultLayout = () => {
    return (
    <div className="h-full min-h-full">

        <main className="w-full">
            <div className="mx-autop-4 md:p-4 2xl:p-5 overflow-auto">
                <Outlet />
            </div>
        </main>
     </div>
  );
};

export default DefaultLayout;
