export const data_themes = {
  //toàn bộ cấu hình router của web được viết ở đây khi thay đổi file này hãy thay đổi cả cấu trúc file trong thư mục pages tương ứng
  routers: [
  
    {
      path: "#section0", // the url
      title: "Giới thiệu",
    },
    {
      path: "#section1", // the url
      title: "Đối tượng",
    },
  
    {
      path: "#section2", // the url
      title: "Lợi ích",
    
    },
    {
      path: "#section3", // the url
      title: "Nội dung khóa học ",
    },
    {
      path: "#section4", // the url
      title: "Giảng viên",
    },
    {
      path: "#section5", // the url
      title: "Đối tác ", // view rendered
    },
    {
      path: "#section7", // the url
      title: "Cam kết ", // view rendered
    },
    {
      path: "#section8", // the url
      title: "Đăng ký ngay ", // view rendered
    },
  ],

  layouts: {
    primary_color: "blue.700",
    header: {
      header_top: {
        logo: false,
        phone: "0914709118",
        email: "daihoctructuyen@tnu.edu.vn",
        background_phone_email: { from: "#f68920", to: "#fc5934" },
        background_left: { from: "#004685", to: "#004956e6" },
      },
      header_bottom: {
        logo: true,
        phone: "0914709118",
        email: "daihoctructuyen@tnu.edu.vn",
        background_phone_email: { from: "#f68920", to: "#fc5934" },
        background_left: { from: "#004685", to: "#004956e6" },
      },
    },
  },
};
