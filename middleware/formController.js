export default class FormController {
  static formMulti(req, res, next) {
    console.log(req.body);
    res.status(200).json({ status: 200, body: req.body });
  }
}
