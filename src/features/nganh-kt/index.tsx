import { Branch } from "@/components/Branch";
import { LayoutNganh } from "@/layouts/layoutNganh";

export const Kt = () => {
  return (
    <LayoutNganh title="Ngành kế toán">
      <Branch
        name="Kế toán"
        overview={[
          "Kế toán là một ngành gắp gắn với 60 năm phát triển của nhà trường. Hiện tại ngành Kế Toán là một trong những ngành đào tạo thế mạnh của trường được nhiều sinh viên tin tưởng và theo học ",
        ]}
        jobs={[
          "Thí sinh tốt nghiệp THPT hoặc tốt nghiệp trình độ trung cấp trúng tuyển sẽ học theo chương trình đào tạo 4 năm",
          "Thí sinh tốt nghiệp cao đẳng, đại học chính quy hoặc “cử nhân thực hành” chính quy sẽ học theo chương trình đào tạo từ 2,0-2,5 năm.",
          "Thí sinh tốt nghiệp đại học chính quy của nước ngoài thì văn bằng phải được công nhận theo quy định của Bộ Giáo dục và Đào tạo. Thí sinh thuộc diện này cũng học theo chương trình đào tạo tương ứng như trên.",
        ]}
        program={[
          "Người học sau khi tốt nghiệp ngành Kế toán, chuyên ngành Kế toán doanh nghiệp tại đại học từ xa AOF E-Learning nắm vững kiến thức cơ bản về tài chính, kinh doanh, quản lý kinh tế; có kiến thức chuyên sâu về chuyên ngành Kế toán doanh nghiệp thuộc ngành Kế toán; có tư duy sáng tạo và logic; nghiên cứu độc lập, phân tích, đánh giá và hoạch định chính sách liên quan đến kế toán;có khả năng giải quyết các vấn đề liên quan về tài chính, kế toán; có kỹ năng thực hành chuyên môn thành thạo về Kế toán doanh nghiệp; có tính kỷ luật tốt và tác phong chuyên nghiệp, tuân thủ đạo đức nghề nghiệp; có các kỹ năng cần thiết để thực hiện các nghiệp vụ về kế toán; có khả năng thích ứng nhanh với môi trường làm việc trong nước và quốc tế.",
        ]}
        person={[
          "Người đã được công nhận tốt nghiệp trung học phổ thông (THPT), trung cấp, cao đẳng, đại học chính quy của Việt Nam hoặc có bằng tốt nghiệp của nước ngoài được công nhận trình độ tương đương",
        ]}
        procedure={["Xét tuyển theo hồ sơ đăng ký (không thi tuyển)"]}
      />
    </LayoutNganh>
  );
};
