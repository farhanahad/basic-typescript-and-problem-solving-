//Convert the following JavaScript array into a TypeScript tuple
// const userInfo = [101, "Ema", "John", true,  , "2023"];

type UserInfo = [number, string, string, boolean, any, string];

const userInfo: UserInfo = [101, "Ema", "John", true, undefined, "2023"];
