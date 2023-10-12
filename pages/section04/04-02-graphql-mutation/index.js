import { useMutation, gql } from "@apollo/client";

export default function GraphqlMutationPage() {
  const graphqlSetting = gql`
    mutation {
      createProduct(
        seller: "짱구"
        createProductInput: { name: "마우스", detail: "끝내줘요", price: 2000 }
      ) {
        _id
      }
    }
  `;

  const [myfunc] = useMutation(graphqlSetting);

  const onClickSubmit = async () => {
    const result = await myfunc();
    console.log(result);
  };

  return (
    <div>
      <button onClick={onClickSubmit}>graphql-api 요청하기</button>
    </div>
  );
}
