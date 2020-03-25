# 矩形重叠  
leetcode👉https://leetcode-cn.com/problems/rectangle-overlap/  

矩形以列表 [x1, y1, x2, y2] 的形式表示，其中 (x1, y1) 为左下角的坐标，(x2, y2) 是右上角的坐标。

如果相交的面积为正，则称两矩形重叠。需要明确的是，只在角或边接触的两个矩形不构成重叠。

给出两个矩形，判断它们是否重叠并返回结果。

- 根据坐标排除不重叠的情况  
  (数学中的坐标系坐标判断)  
  固定 rec1 不动，判断 rec2 的位置  
  1. 左侧：x1 <= x4 -> rec1[0] <= res2[3]  
  2. 右侧：x2 <= x3 -> rec1[2] <= rec2[0]  
  3. 上侧：y2 <= y3 -> rec1[3] <= rec2[1]  
  4. 下侧：y1 >= y4 -> rec1[1] >= rec2[3]  
  