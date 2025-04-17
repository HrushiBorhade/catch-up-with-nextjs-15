"use server";
// throw error to test error handling of server actions
export async function createUser(
  previousState: {
    message: string;
  },
  formData: FormData
) {
  console.log("previousState", previousState);
  console.log("formData", formData);

  await new Promise((resolve) => setTimeout(resolve, 2000));

  return {
    message: "please enter valid email",
  };
}