// 创建模块对象
angular.module("todoApp", [])
        // 生成作用域对象
        .controller("MyCtrl", ['$scope', function ($scope) {
            // 初始化数据
            $scope.todos = [
                {todo: '吃饭', isChecked: false},
                {todo: '睡觉', isChecked: false},
                {todo: '打豆豆', isChecked: false}
            ];

            // 新增
            $scope.add = function () {
                if (!$scope.newTodo) {
                    alert("要添加的数据不能为空。。。");
                    return;
                }
                // 组合新的todo对象
                var obj = {
                    todo: $scope.newTodo,
                    isChecked: false
                };
                // 将新的对象添加到todos中
                $scope.todos.unshift(obj);
                //添加完将输入的内容清空
                $scope.newTodo = '';
            };

            // 用下面的第二种删除方法
            // $scope.del = function () {
            //     $scope.todos.forEach(function (item, index) {
            //         if (item.isChecked) {
            //             $scope.todos.splice(index, 1);
            //             $scope.del(); // 递归
            //         }
            //     })
            // };
            // 删除
            $scope.del = function () {
                var oldTodo = $scope.todos;
                //将$scope.todos的数据清空
                $scope.todos = [];
                //进行遍历
                oldTodo.forEach(function (item, index) {
                    //将没被选中的todo添加到 $scope.todos 数组中
                    if (!item.isChecked) {
                        $scope.todos.push(item);
                    }
                })
            };
        }]);