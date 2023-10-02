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
  Textarea,
} from "@chakra-ui/react";
import { Field, Form, Formik } from "formik";
import Image from "next/image";
import { useEffect, useState } from "react";
import { BtnTheme } from "./BtnTheme";

interface IForm {
  title?: string;
}

export const FormContact = (props: IForm) => {
  const { title } = props;

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
      setSucess(true);
    } catch (error) {
      alert("Đăng ký không thành công, vui lòng thử lại!");
      actions.setSubmitting(false);
      setSucess(false);
    }
  };

  return (
    <Box rounded={"sm"} px={"24px"} py={"24px"} h={"max-content"}>
      <Heading
        as={"h2"}
        size={"md"}
        textAlign={"center"}
        pb={"24px"}
        color={sucess ? "green.700" : "gray.700"}
      >
        {!sucess}
        {sucess && "Thành công"}
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
              <VStack spacing={"12px"}>
                <HStack
                  spacing={"8px"}
                  justify={"space-between"}
                  w={"full"}
                  align={"flex-start"}
                >
                  <Field name="name" validate={validateName}>
                    {({ field, form }: { field: InputProps; form: any }) => (
                      <FormControl
                        isRequired
                        flex={1}
                        isInvalid={form.errors.name && form.touched.name}
                      >
                        <Input
                          {...field}
                          borderRadius={"50px"}
                          color="#FFF"
                          bg={"#f1f1f14d"}
                          border={"none"}
                          type="text"
                          name="name"
                          placeholder="Tên của bạn"
                          _placeholder={{ color: "#FFF" }}
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
                          borderRadius={"50px"}
                          color="#FFF"
                          border={"none"}
                          bg={"#f1f1f14d"}
                          type="tel"
                          name="phone"
                          placeholder="Số điện thoại"
                          _placeholder={{ color: "#FFF" }}
                        
                        />
                        <FormErrorMessage>{form.errors.phone}</FormErrorMessage>
                      </FormControl>
                    )}
                  </Field>
                </HStack>

                <HStack
                  spacing={"8px"}
                  justify={"space-between"}
                  w={"full"}
                  align={"flex-start"}
                >
                  <Field name="email">
                    {({ field, form }: { field: InputProps; form: any }) => (
                      <FormControl flex={1}>
                        <Input
                          {...field}
                          bg={"#f1f1f14d"}
                          borderRadius={"50px"}
                          color="#FFF"
                          border={"none"}
                          type="email"
                          name="email"
                          placeholder="Email"
                          _placeholder={{ color: "#FFF" }}
                        />
                        <FormErrorMessage>{form.errors.email}</FormErrorMessage>
                      </FormControl>
                    )}
                  </Field>
                  <Field name="  place">
                    {({ field, form }: { field: InputProps; form: any }) => (
                      <FormControl isRequired flex={1}>
                        <Input
                          {...field}
                          bg={"#f1f1f14d"}
                          color="#FFF"
                          border={"none"}
                          borderRadius={"50px"}
                          type="tel"
                          name="phone"
                          placeholder="Địa chỉ"
                          _placeholder={{ color: "#FFF" }}
                        />
                        <FormErrorMessage>{form.errors.place}</FormErrorMessage>
                      </FormControl>
                    )}
                  </Field>
                </HStack>

                <Field name="course">
                  {({ field, form }: { field: SelectProps; form: any }) => (
                    <FormControl>
                      <Textarea
                        color="#FFF"
                        placeholder="Lời nhắn"
                        _placeholder={{ color: "#FFF" }}
                        border={"none"}
                        bg={"#f1f1f14d"}
                      />
                    </FormControl>
                  )}
                </Field>

                <BtnTheme
                  isLoading={props.isSubmitting}
                  type="submit"
                  colorScheme="red"
                  mt={"24px"}
                >
                  Đăng ký
                </BtnTheme>
              </VStack>
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
          <Text fontWeight={600} color={"green.700"} pt={"16px"}>
            Chúng tôi sẽ liên hệ lại với bạn!
          </Text>
        </Center>
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

export const FormGetFly2 = ({ title }: { title?: string }) => {
  useEffect(() => {
    comonForm({
      id: "getfly-optin-form-iframe-1695175881155",
      href: "https://aum.getflycrm.com/api/forms/viewform/?key=AxFWg9xmg9RGLjPsUiSwBCtbhyYTGWB3rBOtmMnxfQCEc9Draw&referrer=",
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
        >
          Để lại thông tin
        </Heading>
      )}
      <div id="getfly-optin-form-iframe-1695175881155"></div>
    </>
  );
};

export const FormGetFly1 = ({ title }: { title?: string }) => {
  useEffect(() => {
    comonForm({
      id: "getfly-optin-form-iframe-1695175842604",
      href: "https://aum.getflycrm.com/api/forms/viewform/?key=Gks7frPWuBMzyzUC6CzH0zKCnGrO7OBcnenVzuBlKcWsplsPTm&referrer=",
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
        >
          Để lại thông tin
        </Heading>
      )}
      <div id="getfly-optin-form-iframe-1695175842604"></div>
    </>
  );
};
