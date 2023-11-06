function Navigation() {
  return (
    <nav className="flex items-center justify-between p-6 lg:px-8">
      <div className="flex lg:flex-1">
        <a href="#" className="-m-1.5 p-1.5">
          <img
            className="h-8 w-auto"
            src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
            alt=""
          />
        </a>
      </div>
      <div className="hidden lg:flex lg:gap-x-12">
        <a href="#" className="text-sm font-semibold leading-6 text-gray-900">
          About
        </a>
        <a href="#" className="text-sm font-semibold leading-6 text-gray-900">
          Skills
        </a>
        <a href="#" className="text-sm font-semibold leading-6 text-gray-900">
          Projects
        </a>
        <a href="#" className="text-sm font-semibold leading-6 text-gray-900">
          Experience
        </a>
        <a href="#" className="text-sm font-semibold leading-6 text-gray-900">
          Contact
        </a>
      </div>
      <div className="lg:flex lg:flex-1 lg:justify-end">
        <a href="#" className="text-sm font-semibold leading-6 text-gray-900">
          Log in
        </a>
      </div>
    </nav>
  );
}

export default Navigation;
