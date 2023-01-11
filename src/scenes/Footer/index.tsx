import React from "react";

type Props = {};

const Footer = (props: Props) => {
  return (
    <footer className="bg-primary-100 py-10">
      <div className="justify-content mx-auto w-5/6 gap-16 md:flex">
        <div className="mt-16 basis-1/2 md:mt-0">
          ICON
          <p className="my-5">
            Magna aliqua cillum est ullamco mollit nostrud amet et dolore
            laborum velit quis sit. Lorem cupidatat fugiat nisi eu officia sunt
            aliquip. Labore ut irure amet sint culpa amet eu do ad nulla
            proident culpa pariatur velit.
          </p>
          <p className="my-3">ALL ICONS FROM storyset.com</p>
          <p>All Rights Reserved.</p>
        </div>
        <div className="mt-16 basis-1/4 md:mt-0">
          <h4 className="font-bold">Links</h4>
          <p className="my-1">
            Fugiat aliquip consequat veniam qui proident proident.
          </p>
          <p className="my-1">
            Fugiat aliquip consequat veniam qui proident proident.
          </p>
          <p className="my-1">We gone make it</p>
        </div>
        <div className="mt-16 basis-1/4 md:mt-0">
          <h4 className="font-bold">Links</h4>
          <p className="my-1">
            Fugiat aliquip consequat veniam qui proident proident.
          </p>
          <p className="my-1">
            Fugiat aliquip consequat veniam qui proident proident.
          </p>
          <p className="mb-4">We gone make it</p>
          <p>RANDOM PHONE NUMBER</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
