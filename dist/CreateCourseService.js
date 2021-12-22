"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var CreateCourserService = /** @class */ (function () {
    function CreateCourserService() {
    }
    CreateCourserService.prototype.execute = function (name, duration, educator) {
        console.log(name, duration, educator);
    };
    return CreateCourserService;
}());
exports.default = new CreateCourserService();
