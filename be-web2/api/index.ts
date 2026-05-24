export default async (req: any, res: any) => {
  const { default: app } = await import("../src/index.js");
  return app(req, res);
};
