import { Branch } from "@/components/Branch";
import { LayoutNganh } from "@/layouts/layoutNganh";

export const Qtkd = () => {
  return (
    <LayoutNganh title="Ngành quản trị kinh doanh">
      <Branch
        name="Quản trị kinh doanh"
        overview={[
          "Sau 20 năm thành lập khoa Quản Trị Kinh Doanh, với bề dày kinh nghiệm đào tạo, Sinh viên tốt nghiệp ra trường 98% có việc làm và đang nắm giữ vị trí cao trong doanh nghiệp.",
        ]}
        jobs={[
          "Thí sinh tốt nghiệp THPT hoặc tốt nghiệp trình độ trung cấp trúng tuyển sẽ học theo chương trình đào tạo 4 năm.",
          "Thí sinh tốt nghiệp cao đẳng, đại học chính quy hoặc “cử nhân thực hành” chính quy sẽ học theo chương trình đào tạo từ 2,0-2,5 năm.",
          "Thí sinh tốt nghiệp đại học chính quy của nước ngoài thì văn bằng phải được công nhận theo quy định của Bộ Giáo dục và Đào tạo. Thí sinh thuộc diện này cũng học theo chương trình đào tạo tương ứng như trên.",
        ]}
        program={[
          "Người học sau khi tốt nghiệp ngành Quản trị kinh doanh, chuyên ngành Quản trị doanh nghiệp tại đại học từ xa AOF E-Leanring nắm vững kiến thức chuyên sâu về chuyên ngành QTDN, ngành QTKD; Am hiểu cấu trúc và cơ chế vận hành của tổ chức và doanh nghiệp; có tư duy sáng tạo và logic; có khả năng nghiên cứu độc lập phân tích, đánh giá và hoạch định các chính sách liên quan đến lĩnh vực Quản trị kinh doanh; Có kỹ năng thực hành thành thạo về chuyên môn; có tính kỷ luật và chuyên nghiệp cao; có các kỹ năng cần thiết; có khả năng thích ứng nhanh với môi trường làm việc trong nước và quốc tế.",
        ]}
        work={["Sinh viên tốt nghiệp chuyên ngành Quản trị doanh nghiệp tại AOF E-Learning có cơ hội và có khả năng đảm nhận các công việc chuyên môn được đào tạo về lĩnh vực QTDN và các lĩnh vực khác thuộc ngành QTKD trong các cơ quan Nhà nước; các công ty, tổ chức, tập đoàn trong nước và quốc tế; cụ thể:"]}
        workjobs={["Đảm nhận các công việc chuyên môn như: Quản trị nguồn nhân lực, Quản trị chiến lược, Quản trị sản xuất và tác nghiệp, Quản trị bán hàng, quản trị chất lượng trong công ty, doanh nghiệp", "Đủ khả năng khởi sự doanh nghiệp của riêng mình","Trở thành giảng viên, trợ giảng, chuyên gia tư vấn, nghiên cứu viên chuyên môn về lĩnh vực QTKD nói chung và lĩnh vực QTDN nói riêng tại các cơ sở đào tạo, cơ sở nghiên cứu khoa học trên phạm vi cả nước"]}
        person={[
          "Người đã được công nhận tốt nghiệp trung học phổ thông (THPT), trung cấp, cao đẳng, đại học chính quy của Việt Nam hoặc có bằng tốt nghiệp của nước ngoài được công nhận trình độ tương đương.",
        ]}
        procedure={["Xét tuyển theo hồ sơ đăng ký (không thi tuyển)."]}
      />
    </LayoutNganh>
  );
};
