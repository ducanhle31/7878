import {
  Box,
  Center,
  FormControl,
  FormErrorMessage,
  HStack,
  Heading,
  Input,
  InputProps,
  Select,
  SelectProps,
  Text,
  VStack,
  Flex,
} from "@chakra-ui/react";
import { Field, Form, Formik } from "formik";
import Image from "next/image";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { BtnTheme, BtnThemeContacts } from "./BtnTheme";
import { Loading } from "./Loading";
interface IForm {
  title?: string;
  onClose?: () => void;
}

export const FormContact = (props: IForm) => {
  const { title, onClose } = props;
  const [sucess, setSucess] = useState(false);
  const router = useRouter();

  const validateName = (value: string) => {
    let error;
    if (!value) {
      error = "Họ tên là bắt buộc";
    } else if (value?.trim().length < 2) {
      error = "Tên phải lớn hơn 2 ký tự😱";
    }
    return error;
  };

  const validatePhone = (value: string) => {
    const regex = /^(0[3-9]{1}\d{8})|(02[0-9]{1}\d{7,8})$/;
    let error;
    if (!value) {
      error = "Số điện thoại là bắt buộc";
    } else if (!regex.test(value.trim())) {
      error = "Số điện thoại không hợp lệ😱";
    }
    return error;
  };

  const handleSubmit = async (formData: any, actions: any) => {
    const NEXT_PUBLIC_GOOGLE_SCRIPT_WEB_APP_URL =
      process.env.NEXT_PUBLIC_GOOGLE_SCRIPT_WEB_APP_URL || "";
    try {
      const res = await fetch(NEXT_PUBLIC_GOOGLE_SCRIPT_WEB_APP_URL, {
        method: "POST",
        mode: "no-cors",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
        body: new URLSearchParams(formData).toString(),
      });
      actions.setSubmitting(false);
      if (onClose) {
        onClose();
      }
      router?.push("/dang-ky-thanh-cong");
    } catch (error) {
      alert("Đăng ký không thành công, vui lòng thử lại!");
      actions.setSubmitting(false);
      setSucess(false);
    }
  };

  return (
    <>
      <Box rounded={"sm"} pt={"30px"} px={"20px"} h={"max-content"}>
        <Heading
          fontSize={"24px"}
          lineHeight={"48px"}
          textAlign={"center"}
          fontWeight={"700"}
          mb={"24px"}
          color={"#021d6c"}
        >
          {!sucess && (title || "Đăng ký ")}
        </Heading>

        {!sucess && (
          <Formik
            initialValues={{
              name: "",
              phone: "",
              "name-child": "",
              class: "",
              course: "",
              email: "",
              place: "",
            }}
            onSubmit={(values, actions) => {
              handleSubmit(values, actions);
            }}
          >
            {(props) => (
              <Form>
                <VStack spacing={"34px"}>
                  <Field name="name" validate={validateName}>
                    {({ field, form }: { field: InputProps; form: any }) => (
                      <FormControl
                        isRequired
                        isInvalid={form.errors.name && form.touched.name}
                      >
                        <Input
                          {...field}
                          bg={"white"}
                          type="text"
                          name="name"
                          placeholder="Nhập họ tên bạn..."
                          _placeholder={{ color: "#6787c0" }}
                          color="#6787c0"
                        />
                        <FormErrorMessage>{form.errors.name}</FormErrorMessage>
                      </FormControl>
                    )}
                  </Field>

                  <Field name="phone" validate={validatePhone}>
                    {({ field, form }: { field: InputProps; form: any }) => (
                      <FormControl
                        isRequired
                        flex={1}
                        isInvalid={form.errors.phone && form.touched.phone}
                      >
                        <Input
                          {...field}
                          bg={"white"}
                          type="tel"
                          name="phone"
                          _placeholder={{ color: "#6787c0" }}
                          color="#6787c0"
                          placeholder="Nhập số điện thoại..."
                        />
                        <FormErrorMessage>{form.errors.phone}</FormErrorMessage>
                      </FormControl>
                    )}
                  </Field>
                  <Field name="email">
                    {({ field, form }: { field: InputProps; form: any }) => (
                      <FormControl flex={1}>
                        <Input
                          {...field}
                          bg={"white"}
                          type="email"
                          name="email"
                          placeholder="Nhập email..."
                          _placeholder={{ color: "#6787c0" }}
                          color="#6787c0"
                        />
                        <FormErrorMessage>{form.errors.email}</FormErrorMessage>
                      </FormControl>
                    )}
                  </Field>
                  <Field name="course">
                    {({ field, form }: { field: SelectProps; form: any }) => (
                      <FormControl>
                        <Select
                          {...field}
                          bg={"white"}
                          placeholder="Chọn ngành học"
                          name="course"
                          _placeholder={{ color: "#6787c0" }}
                          color="#6787c0"
                        >
                          <option>Ngành kế toán</option>
                          <option>Ngành quản trị kinh doanh</option>
                        </Select>
                        <FormErrorMessage>
                          {form.errors?.course}
                        </FormErrorMessage>
                      </FormControl>
                    )}
                  </Field>

                  <BtnThemeContacts
                    isLoading={props.isSubmitting}
                    type="submit"
                    colorScheme="red"
                    w={"full"}
                    mt={"24px"}
                    mb="25px"
                  >
                    Đăng ký tư vấn
                  </BtnThemeContacts>
                </VStack>
              </Form>
            )}
          </Formik>
        )}
      </Box>
    </>
  );
};
export const FormContactFooter = (props: IForm) => {
  const { title } = props;

  const [sucess, setSucess] = useState(false);

  const handleSubmit = async (formData: any, actions: any) => {
    const NEXT_PUBLIC_GOOGLE_SCRIPT_WEB_APP_URL =
      process.env.NEXT_PUBLIC_GOOGLE_SCRIPT_WEB_APP_URL || "";
    try {
      const res = await fetch(NEXT_PUBLIC_GOOGLE_SCRIPT_WEB_APP_URL, {
        method: "POST",
        mode: "no-cors",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
        body: new URLSearchParams(formData).toString(),
      });
      actions.setSubmitting(false);
      setSucess(true);
    } catch (error) {
      alert("Đăng ký không thành công, vui lòng thử lại!");
      actions.setSubmitting(false);
      setSucess(false);
    }
  };

  return (
    <Box rounded={"sm"} py={"24px"} h={"max-content"}>
      {/* <Heading
        fontSize={"16px"}
        lineHeight={"24px"}
        textAlign={"center"}
        fontWeight={"600"}
        mb={"24px"}
        color={sucess ? "white" : "#ffffff"}
      >
        {!sucess &&
          (title || "Đăng Ký nhận thông tin chi tiết lịch khai giảng mới nhất")}
        {sucess && "Thành công"}
      </Heading> */}

      {!sucess && (
        <Formik
          initialValues={{
            name: "",
            phone: "",
            "name-child": "",
            class: "",
            course: "",
            email: "",
            place: "",
          }}
          onSubmit={(values, actions) => {
            handleSubmit(values, actions);
          }}
        >
          {(props) => (
            <Form>
              <HStack
                justify={"space-between"}
                w={{ base: "full", lg: "400px" }}
                align={"flex-start"}
              >
                <Field name="email">
                  {({ field, form }: { field: InputProps; form: any }) => (
                    <FormControl flex={1}>
                      <Input
                        {...field}
                        bg={"#484848"}
                        type="email"
                        name="email"
                        placeholder="Nhập email..."
                        _placeholder={{ color: "#fff" }}
                        color="#fff"
                        h="50px"
                      />
                      <FormErrorMessage>{form.errors.email}</FormErrorMessage>
                    </FormControl>
                  )}
                </Field>
              </HStack>
            </Form>
          )}
        </Formik>
      )}

      {sucess && (
        <Center flexDir={"column"}>
          <Image
            priority
            src={"/success-icon.png"}
            width={100}
            height={100}
            alt="Thành công"
          />
          <Text fontWeight={600} color={"white"} pt={"16px"}>
            Chúng tôi sẽ liên hệ lại với bạn!
          </Text>
        </Center>
      )}
    </Box>
  );
};
export const FormContactBanner = (props: IForm) => {
  const { title, onClose } = props;
  const router = useRouter();
  const [sucess, setSucess] = useState(false);

  const validateName = (value: string) => {
    let error;
    if (!value) {
      error = "Họ tên là bắt buộc";
    } else if (value?.trim().length < 2) {
      error = "Tên phải lớn hơn 2 ký tự😱";
    }
    return error;
  };

  const validatePhone = (value: string) => {
    const regex = /^(0[3-9]{1}\d{8})|(02[0-9]{1}\d{7,8})$/;
    let error;
    if (!value) {
      error = "Số điện thoại là bắt buộc";
    } else if (!regex.test(value.trim())) {
      error = "Số điện thoại không hợp lệ😱";
    }
    return error;
  };

  const handleSubmit = async (formData: any, actions: any) => {
    const NEXT_PUBLIC_GOOGLE_SCRIPT_WEB_APP_URL =
      process.env.NEXT_PUBLIC_GOOGLE_SCRIPT_WEB_APP_URL || "";
    try {
      const res = await fetch(NEXT_PUBLIC_GOOGLE_SCRIPT_WEB_APP_URL, {
        method: "POST",
        mode: "no-cors",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
        body: new URLSearchParams(formData).toString(),
      });
      actions.setSubmitting(false);
      if (onClose) {
        onClose();
      }
      router?.push("/dang-ky-thanh-cong");
    } catch (error) {
      alert("Đăng ký không thành công, vui lòng thử lại!");
      actions.setSubmitting(false);
      setSucess(false);
    }
  };

  return (
    <Box
      rounded={"sm"}
      px={{ base: "0", md: "60px", lg: "60px" }}
      py={"24px"}
      h={"max-content"}
    >
      <Heading
        fontSize={"36px"}
        lineHeight={"48px"}
        textAlign={"left"}
        fontWeight={"700"}
        mb={"24px"}
        color={"#021d6c"}
      >
        {!sucess && (title || "Đăng Ký")}
      </Heading>

      {!sucess && (
        <Formik
          initialValues={{
            name: "",
            phone: "",
            "name-child": "",
            class: "",
            course: "",
            email: "",
            place: "",
          }}
          onSubmit={(values, actions) => {
            handleSubmit(values, actions);
          }}
        >
          {(props) => (
            <Form>
              <VStack spacing={"20px"}>
                <Field name="name" validate={validateName}>
                  {({ field, form }: { field: InputProps; form: any }) => (
                    <FormControl
                      isRequired
                      isInvalid={form.errors.name && form.touched.name}
                    >
                      <Input
                        {...field}
                        bg={"white"}
                        type="text"
                        name="name"
                        placeholder="Nhập họ tên bạn..."
                        _placeholder={{ color: "#6787c0" }}
                        color="#6787c0"
                      />
                      <FormErrorMessage>{form.errors.name}</FormErrorMessage>
                    </FormControl>
                  )}
                </Field>
                <Field name="phone" validate={validatePhone}>
                  {({ field, form }: { field: InputProps; form: any }) => (
                    <FormControl
                      isRequired
                      flex={1}
                      isInvalid={form.errors.phone && form.touched.phone}
                    >
                      <Input
                        {...field}
                        bg={"white"}
                        type="tel"
                        name="phone"
                        _placeholder={{ color: "#6787c0" }}
                        color="#6787c0"
                        placeholder="Nhập số điện thoại..."
                      />
                      <FormErrorMessage>{form.errors.phone}</FormErrorMessage>
                    </FormControl>
                  )}
                </Field>
                <Field name="email">
                  {({ field, form }: { field: InputProps; form: any }) => (
                    <FormControl flex={1}>
                      <Input
                        {...field}
                        bg={"white"}
                        type="email"
                        name="email"
                        placeholder="Nhập email..."
                        _placeholder={{ color: "#6787c0" }}
                        color="#6787c0"
                      />
                      <FormErrorMessage>{form.errors.email}</FormErrorMessage>
                    </FormControl>
                  )}
                </Field>

                <Field name="course">
                  {({ field, form }: { field: SelectProps; form: any }) => (
                    <FormControl>
                      <Select
                        {...field}
                        bg={"white"}
                        placeholder="Chọn ngành học"
                        name="course"
                        _placeholder={{ color: "#6787c0" }}
                        color="#6787c0"
                      >
                        <option>Ngành kế toán</option>
                        <option>Ngành quản trị kinh doanh</option>
                      </Select>
                      <FormErrorMessage>{form.errors?.course}</FormErrorMessage>
                    </FormControl>
                  )}
                </Field>

                <BtnTheme
                  isLoading={props.isSubmitting}
                  type="submit"
                  colorScheme="red"
                  w={"full"}
                  mt={"24px"}
                >
                  Đăng ký ngay
                </BtnTheme>
              </VStack>
            </Form>
          )}
        </Formik>
      )}
    </Box>
  );
};
export const FormContactLienhe = (props: IForm) => {
  const { title } = props;
  const [sucess, setSucess] = useState(false);
  const router = useRouter();
  const validateName = (value: string) => {
    let error;
    if (!value) {
      error = "Họ tên là bắt buộc";
    } else if (value?.trim().length < 2) {
      error = "Tên phải lớn hơn 2 ký tự😱";
    }
    return error;
  };

  const validatePhone = (value: string) => {
    const regex = /^(0[3-9]{1}\d{8})|(02[0-9]{1}\d{7,8})$/;
    let error;
    if (!value) {
      error = "Số điện thoại là bắt buộc";
    } else if (!regex.test(value.trim())) {
      error = "Số điện thoại không hợp lệ😱";
    }
    return error;
  };

  const handleSubmit = async (formData: any, actions: any) => {
    const NEXT_PUBLIC_GOOGLE_SCRIPT_WEB_APP_URL =
      process.env.NEXT_PUBLIC_GOOGLE_SCRIPT_WEB_APP_URL || "";
    try {
      const res = await fetch(NEXT_PUBLIC_GOOGLE_SCRIPT_WEB_APP_URL, {
        method: "POST",
        mode: "no-cors",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
        body: new URLSearchParams(formData).toString(),
      });
      actions.setSubmitting(false);
      setSucess(true);

      router?.push("/dang-ky-thanh-cong");
    } catch (error) {
      alert("Đăng ký không thành công, vui lòng thử lại!");
      actions.setSubmitting(false);
      setSucess(false);
    }
  };

  return (
    <Box
      rounded={"sm"}
      pl={{ base: "0", md: "60px", lg: "100px" }}
      py={"24px"}
      h={"max-content"}
      w={{ base: "max", md: "400px", lg: "500px" }}
    >
      <Heading
        fontSize={"36px"}
        lineHeight={"48px"}
        textAlign={"left"}
        fontWeight={"700"}
        mb={"24px"}
        color={"#ffffff"}
      >
        {!sucess && (title || "Đăng Ký")}
      </Heading>

      {!sucess && (
        <Formik
          initialValues={{
            name: "",
            phone: "",
            "name-child": "",
            class: "",
            course: "",
            email: "",
            place: "",
          }}
          onSubmit={(values, actions) => {
            handleSubmit(values, actions);
          }}
        >
          {(props) => (
            <Form>
              <VStack spacing={"20px"}>
                <Field name="name" validate={validateName}>
                  {({ field, form }: { field: InputProps; form: any }) => (
                    <FormControl
                      isRequired
                      isInvalid={form.errors.name && form.touched.name}
                    >
                      <Input
                        {...field}
                        bg={"white"}
                        type="text"
                        name="name"
                        placeholder="Nhập họ tên bạn..."
                        _placeholder={{ color: "#6787c0" }}
                        color="#6787c0"
                      />
                      <FormErrorMessage>{form.errors.name}</FormErrorMessage>
                    </FormControl>
                  )}
                </Field>
                <Field name="email">
                  {({ field, form }: { field: InputProps; form: any }) => (
                    <FormControl flex={1}>
                      <Input
                        {...field}
                        bg={"white"}
                        type="email"
                        name="email"
                        placeholder="Nhập email..."
                        _placeholder={{ color: "#6787c0" }}
                        color="#6787c0"
                      />
                      <FormErrorMessage>{form.errors.email}</FormErrorMessage>
                    </FormControl>
                  )}
                </Field>
                <Field name="phone" validate={validatePhone}>
                  {({ field, form }: { field: InputProps; form: any }) => (
                    <FormControl
                      isRequired
                      flex={1}
                      isInvalid={form.errors.phone && form.touched.phone}
                    >
                      <Input
                        {...field}
                        bg={"white"}
                        type="tel"
                        name="phone"
                        _placeholder={{ color: "#6787c0" }}
                        color="#6787c0"
                        placeholder="Nhập số điện thoại..."
                      />
                      <FormErrorMessage>{form.errors.phone}</FormErrorMessage>
                    </FormControl>
                  )}
                </Field>

                <Field name="course">
                  {({ field, form }: { field: SelectProps; form: any }) => (
                    <FormControl>
                      <Select
                        {...field}
                        bg={"white"}
                        placeholder="Chọn ngành học"
                        name="course"
                        _placeholder={{ color: "#6787c0" }}
                        color="#6787c0"
                      >
                        <option>Ngành kế toán</option>
                        <option>Ngành quản trị kinh doanh</option>
                      </Select>
                      <FormErrorMessage>{form.errors?.course}</FormErrorMessage>
                    </FormControl>
                  )}
                </Field>

                <BtnTheme
                  isLoading={props.isSubmitting}
                  type="submit"
                  colorScheme="red"
                  w={"full"}
                  mt={"24px"}
                >
                  Đăng ký ngay
                </BtnTheme>
              </VStack>
            </Form>
          )}
        </Formik>
      )}
    </Box>
  );
};

const comonForm = ({ id, href }: { id: string; href: string }) => {
  const generateMatch = ({ utm, value }: { utm: string; value?: string }) => {
    const valueCur = value || "=([^;]+)";
    const matchers = document.cookie.match(new RegExp(utm + valueCur));
    return matchers ? matchers : [];
  };

  let r =
    window.document.referrer != ""
      ? window.document.referrer
      : window.location.origin;
  const regex = /(https?:\/\/.*?)\//g;
  const furl = regex.exec(r);
  r = furl ? furl[0] : r;
  const f = document.createElement("iframe");
  const url_string = new URLSearchParams(window.location.search);
  let utm_source, utm_campaign, utm_medium, utm_content, utm_term;
  if (
    (!url_string.has("utm_source") || url_string.get("utm_source") == "") &&
    generateMatch({ utm: "utm_source" }) != null
  ) {
    r += "&" + generateMatch({ utm: "utm_source" })[0];
  } else {
    r +=
      url_string.get("utm_source") != null
        ? "&utm_source=" + url_string.get("utm_source")
        : "";
  }
  if (
    (!url_string.has("utm_campaign") || url_string.get("utm_campaign") == "") &&
    generateMatch({ utm: "utm_campaign" }) != null
  ) {
    r += "&" + generateMatch({ utm: "utm_campaign" })[0];
  } else {
    r +=
      url_string.get("utm_campaign") != null
        ? "&utm_campaign=" + url_string.get("utm_campaign")
        : "";
  }
  if (
    (!url_string.has("utm_medium") || url_string.get("utm_medium") == "") &&
    generateMatch({ utm: "utm_medium" }) != null
  ) {
    r += "&" + generateMatch({ utm: "utm_medium" })[0];
  } else {
    r +=
      url_string.get("utm_medium") != null
        ? "&utm_medium=" + url_string.get("utm_medium")
        : "";
  }
  if (
    (!url_string.has("utm_content") || url_string.get("utm_content") == "") &&
    generateMatch({ utm: "utm_content" }) != null
  ) {
    r += "&" + generateMatch({ utm: "utm_content" })[0];
  } else {
    r +=
      url_string.get("utm_content") != null
        ? "&utm_content=" + url_string.get("utm_content")
        : "";
  }
  if (
    (!url_string.has("utm_term") || url_string.get("utm_term") == "") &&
    generateMatch({ utm: "utm_term" }) != null
  ) {
    r += "&" + generateMatch({ utm: "utm_term" })[0];
  } else {
    r +=
      url_string.get("utm_term") != null
        ? "&utm_term=" + url_string.get("utm_term")
        : "";
  }
  if (
    (!url_string.has("utm_user") || url_string.get("utm_user") == "") &&
    generateMatch({ utm: "utm_user" }) != null
  ) {
    r += "&" + generateMatch({ utm: "utm_user" })[0];
  } else {
    r +=
      url_string.get("utm_user") != null
        ? "&utm_user=" + url_string.get("utm_user")
        : "";
  }
  if (
    (!url_string.has("utm_account") || url_string.get("utm_account") == "") &&
    generateMatch({ utm: "utm_account" }) != null
  ) {
    r += "&" + generateMatch({ utm: "utm_account" })[0];
  } else {
    r +=
      url_string.get("utm_account") != null
        ? "&utm_account=" + url_string.get("utm_account")
        : "";
  }
  r += "&full_url=" + encodeURIComponent(window.location.href);
  r += "&full_url=" + encodeURIComponent(window.location.href);
  f.setAttribute("src", href + r);
  f.style.width = "100%";
  f.style.height = "380px";
  f.setAttribute("frameborder", "0");
  f.setAttribute("marginheight", "0");
  f.setAttribute("marginwidth", "0");
  const s = document.getElementById(id);

  if (!s?.hasChildNodes()) s?.appendChild(f);
};

export const FormMain = ({ title }: { title?: string }) => {
  const [id, setId] = useState("getfly-optin-form-iframe-1687745362706");
  const [href, setHref] = useState(
    "https://aum.getflycrm.com/api/forms/viewform/?key=AxFWg9xmg9RGLjPsUiSwBCtbhyYTGWB3rBOtmMnxfQCEc9Draw&referrer="
  );
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const getForm = async () => {
      try {
        const res = await fetch(`/api/data-form/?type=form-main`);
        const data = await res.json();
        const id = data?.id || "";
        id && setId(id);
        const href = data?.href || "";
        href && setHref(href);
        comonForm({
          id,
          href,
        });

        setIsLoading(false);
      } catch (error) {
        console.log(error);
      }
    };

    getForm();
  }, [id, href, isLoading]);

  return (
    <Box minH={"45vh"}>
      {title && (
        <Heading
          as={"h2"}
          size={{ base: "md", md: "lg" }}
          textAlign={"center"}
          color={"blue.700"}
          pb={"16px"}
        >
          Để lại thông tin
        </Heading>
      )}
      {isLoading && <Loading he="38vh" />}
      {!isLoading && <div id={id} />}
    </Box>
  );
};

export const FormPoup = ({ title }: { title?: string }) => {
  const [id, setId] = useState("getfly-optin-form-iframe-1687745455014");
  const [href, setHref] = useState(
    "https://crm.aumerp.com/api/forms/viewform/?key=HJ8H4JKbFVKVrbr7wYvZX8n9KR4yzUsnI2trLbcTwsUdQMZBqg&referrer="
  );
  const [isLoading, setIsLoading] = useState(true);
  const router = useRouter();
  useEffect(() => {
    const getForm = async () => {
      try {
        const res = await fetch(`/api/data-form/?type=form-poup`);
        const data = await res.json();
        const id = data?.id || "";
        id && setId(id);
        const href = data?.href || "";
        href && setHref(href);
        comonForm({
          id,
          href,
        });

        setIsLoading(false);
      } catch (error) {
        console.log(error);
      }
    };

    getForm();
  }, [id, href, isLoading, router]);

  return (
    <Box minH={"45vh"}>
      {title && (
        <Heading
          as={"h2"}
          size={{ base: "md", md: "lg" }}
          textAlign={"center"}
          color={"blue.700"}
          pb={"16px"}
        >
          Để lại thông tin
        </Heading>
      )}
      {isLoading && <Loading he="38vh" />}
      {!isLoading && <div id={id} />}
    </Box>
  );
};
export const FormGetFly2 = ({ title }: { title?: string }) => {
  useEffect(() => {
    comonForm({
      id: "getfly-optin-form-iframe-1687745362706",
      href: "https://crm.aumerp.com/api/forms/viewform/?key=cSFlMFdpvLYAivm2Zwm14DvKTaDKfwrzod2EEp5AmyAWKSove6&referrer=",
    });
  }, []);

  return (
    <>
      {title && (
        <Heading
          as={"h2"}
          size={{ base: "md", md: "lg" }}
          textAlign={"center"}
          color={"blue.700"}
          pb={"16px"}
          pt={"30px"}
        >
          Để lại thông tin
        </Heading>
      )}
      <div id="getfly-optin-form-iframe-1687745362706"></div>
    </>
  );
};

export const FormGetFly1 = ({ title }: { title?: string }) => {
  useEffect(() => {
    comonForm({
      id: "getfly-optin-form-iframe-1687745455014",
      href: "https://crm.aumerp.com/api/forms/viewform/?key=HJ8H4JKbFVKVrbr7wYvZX8n9KR4yzUsnI2trLbcTwsUdQMZBqg&referrer=",
    });
  }, []);

  return (
    <>
      {title && (
        <Heading
          as={"h2"}
          size={{ base: "md", md: "lg" }}
          textAlign={"center"}
          color={"blue.700"}
          pb={"16px"}
          pt={"30px"}
        >
          Để lại thông tin
        </Heading>
      )}
      <div id="getfly-optin-form-iframe-1687745455014"></div>
    </>
  );
};
