angular.module("noteApp", [])
        .controller("NoteController", ['$scope', function ($scope) {
            //console.log($scope.message);  // undefined
            // 初始化文本域
            $scope.message = '';
            // 计算剩余字数
            $scope.getCount = function () {
                //判断输入数据的长度
                if ($scope.message.length > 100) {
                    $scope.message = $scope.message.slice(0, 100);
                }
                //返回剩余字数的个数
                return 100 - $scope.message.length;
            };
            // 保存
            $scope.save = function () {
                //将数据保存到sessionStorage中
                localStorage.setItem("note_key", JSON.stringify($scope.message));
                alert("note is saved");
                //将输入内容清空
                $scope.message = '';
            };
            // 读取
            $scope.read = function () {
                console.log(localStorage.getItem("note_key")); // 第一次直接读取 null
                $scope.message = JSON.parse(localStorage.getItem("note_key") || '[]'); //对读取null做了处理
            };
            // 删除
            $scope.remove = function () {
                localStorage.removeItem("note_key");
                $scope.message = '';
            }
        }]);