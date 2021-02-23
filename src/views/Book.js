/* eslint-disable */
export default [
  {
    id: '01',
    name: '第一章',
    list: [
      {
        title: '代码1.3.1',
        codes: [
          {
            language: 'Cpp',
            content:
              '\nint sum(int n) {\n  int res = 0;\n  for (int i = 0; i < n; i++) {\n    res += i;\n  }\n  return res;\n}\n\n'
          },
          {
            language: 'Java',
            content:
              'class Solution {\n  public int sum(int n) {\n    int res = 0;\n    for (int i = 0; i < n; i++) {\n      res += i;\n    }\n    return res;\n  }\n}\n'
          },
          {
            language: 'Js',
            content:
              'function sum(n) {\n  let res = 0;\n  for (let i = 0; i < n; i++) {\n    res += i;\n  }\n  return res;\n}\n\n'
          },
          {
            language: 'Py',
            content:
              'def sum(n: int) -> int:\n    res = 0\n    for i in range(1, n + 1):\n        res += i\n    return res\n\n'
          }
        ]
      },
      {
        title: '代码1.3.2',
        codes: [
          {
            language: 'Cpp',
            content:
              'class Solution {\npublic:\n  vector<int> twoSum(vector<int> &nums, int target) {\n\n    unordered_map<int, int> mapper;\n\n    for (int i = 0; i < nums.size(); i++) {\n      if (mapper.find(target - nums[i]) != mapper.end())\n        return {mapper[target - nums[i]], i};\n\n      mapper[nums[i]] = i;\n    }\n    return {};\n  }\n};\n\n'
          },
          {
            language: 'Java',
            content:
              'class Solution {\n  public int[] twoSum(int[] nums, int target) {\n    Map<Integer, Integer> mapper = new HashMap<>();\n    for (int i = 0; i < nums.length; i++) {\n      if (mapper.containsKey(target - nums[i])) {\n        return new int[] {mapper.get(target - nums[i]), i};\n      }\n      mapper.put(nums[i], i);\n    }\n    return new int[] {};\n  }\n}\n\n'
          },
          {
            language: 'Js',
            content:
              '/**\n * @param {number[]} nums\n * @param {number} target\n * @return {number[]}\n */\nvar twoSum = function(nums, target) {\n  const n = nums.length;\n  const mapper = {};\n  for (let i = 0; i < n; i++) {\n    if (mapper[target - nums[i]] !== void 0)\n      return [mapper[target - nums[i]], i];\n    mapper[nums[i]] = i;\n  }\n  return [];\n};\n\n'
          },
          {
            language: 'Py',
            content:
              'class Solution:\n    def twoSum(self, nums: List[int], target: int) -> List[int]:\n        n = len(nums)\n        mapper = {}\n        for i in range(n):\n            if target - nums[i] in mapper:\n                return [mapper[target - nums[i]], i]\n            else:\n                mapper[nums[i]] = i\n\n        return []\n\n'
          }
        ]
      },
      {
        title: '代码1.3.3',
        codes: [
          {
            language: 'Cpp',
            content:
              'class Solution {\npublic:\n  vector<int> dailyTemperatures(vector<int> &T) {\n    stack<int> st;\n    vector<int> ans(T.size(), 0);\n    for (int i = 0; i < T.size(); i++) {\n      while (!st.empty() && T[i] > T[st.top()]) {\n        int top = st.top();\n        st.pop();\n        ans[top] = i - top;\n      }\n      st.push(i);\n    }\n    return ans;\n  }\n};\n'
          },
          {
            language: 'Js',
            content:
              '/**\n * @param {number[]} T\n * @return {number[]}\n */\nvar dailyTemperatures = function(T) {\n  const stack = [];\n  const ans = [];\n\n  for (let i = 0; i < T.length; i++) {\n    ans[i] = 0;\n    while (stack.length !== 0 && T[i] > T[stack[stack.length - 1]]) {\n      const peek = stack.pop();\n      ans[peek] = i - peek;\n    }\n    stack.push(i);\n  }\n\n  return ans;\n};\n\n'
          },
          {
            language: 'Py',
            content:
              'class Solution:\n    def dailyTemperatures(self, T: List[int]) -> List[int]:\n        stack = []\n        ans = [0] * len(T)\n        for i in range(len(T)):\n            while stack and T[i] > T[stack[-1]]:\n                peek = stack.pop(-1)\n                ans[peek] = i - peek\n            stack.append(i)\n        return ans\n\n'
          },
          {
            language: 'Java',
            content:
              'class Solution {\n  public int[] dailyTemperatures(int[] T) {\n    Stack<Integer> stack = new Stack<Integer>();\n    int[] ans = new int[T.length];\n    for (int i = 0; i < T.length; i++) {\n      while (!stack.empty() && T[i] > T[stack.peek()]) {\n        int top = stack.pop();\n        ans[top] = i - top;\n      }\n      stack.push(i);\n    }\n    return ans;\n  }\n}\n\n'
          }
        ]
      },
      {
        title: '代码1.3.4',
        codes: [
          {
            language: 'Cpp',
            content:
              'class Solution {\npublic:\n  int numRescueBoats(vector<int> &people, int limit) {\n    int res = 0;\n    int l = 0;\n    int r = people.size() - 1;\n    sort(people.begin(), people.end());\n    while (l < r) {\n      int total = people[l] + people[r];\n      if (total > limit) {\n        r -= 1;\n        res += 1;\n      } else {\n        r -= 1;\n        l += 1;\n        res += 1;\n      }\n    }\n    if (l == r) {\n      return res + 1;\n    }\n    return res;\n  }\n};\n\n'
          },
          {
            language: 'Java',
            content:
              'class Solution {\n  public int numRescueBoats(int[] people, int limit) {\n    int res = 0;\n    int l = 0;\n    int r = people.length - 1;\n    Arrays.sort(people);\n    while (l < r) {\n      int total = people[l] + people[r];\n      if (total > limit) {\n        r -= 1;\n        res += 1;\n      } else {\n        r -= 1;\n        l += 1;\n        res += 1;\n      }\n    }\n    if (l == r) {\n      return res + 1;\n    }\n    return res;\n  }\n}\n\n'
          },
          {
            language: 'Js',
            content:
              '/**\n * @param {number[]} people\n * @param {number} limit\n * @return {number}\n */\nvar numRescueBoats = function(people, limit) {\n  let res = 0;\n  let l = 0;\n  let r = people.length - 1;\n  people.sort((a, b) => a - b);\n  while (l < r) {\n    let total = people[l] + people[r];\n    if (total > limit) {\n      r -= 1;\n      res += 1;\n    } else {\n      r -= 1;\n      l += 1;\n      res += 1;\n    }\n  }\n  if (l == r) {\n    return res + 1;\n  }\n  return res;\n};\n\n'
          },
          {
            language: 'Py',
            content:
              'def numRescueBoats(self, people: List[int], limit: int) -> int:\n    res = 0\n    l = 0\n    r = len(people) - 1\n    people.sort()\n\n    while l < r:\n        total = people[l] + people[r]\n        if total > limit:\n            r -= 1\n            res += 1\n        else:\n            r -= 1\n            l += 1\n            res += 1\n    if l == r:\n        return res + 1\n    return res\n\n'
          }
        ]
      },
      {
        title: '代码1.3.5',
        codes: [
          {
            language: 'Cpp',
            content:
              'class Solution {\npublic:\n  int fibonacci(int n) {\n    if (n < 2) {\n      return n\n    }\n    return fibonacci(n - 1) + fibonacci(n - 2);\n  }\n};\n'
          },
          {
            language: 'Java',
            content:
              'class Solution {\n  public int fibonacci(int n) {\n    if (n < 2) return n;\n    return fibonacci(n - 1) + fibonacci(n - 2);\n  }\n}\n\n'
          },
          {
            language: 'Js',
            content:
              'function fibonacci(n) {\n  if (n < 2) return n;\n  return fibonacci(n - 1) + fibonacci(n - 2);\n}\n\n'
          },
          {
            language: 'Py',
            content:
              'def fibonacci(n: int) -> int:\n    if n < 2:\n        return n\n    return fibonacci(n - 1) + fibonacci(n - 2)\n\n'
          }
        ]
      },
      {
        title: '代码1.3.6',
        codes: [
          {
            language: 'Cpp',
            content:
              'class Solution {\npublic:\n  vector<vector<int>> ans;\n  void dfs(int idx, vector<int> path, vector<int> nums, int n,\n           vector<bool> visited) {\n    // 结束条件\n    // 1. 找到解\n    if (path.size() == n) {\n      vector<int> temp(path.size());\n      std::copy(path.begin(), path.end(), temp.begin());\n      ans.push_back(temp);\n      return;\n    }\n\n    // 2. 搜索完毕\n    if (idx == n)\n      return;\n\n    // 考虑可能的解，进入下一层递归\n    for (int i = 0; i < n; ++i) {\n      int num = nums[i];\n      // 非法解忽略\n      if (visited[i])\n        continue;\n      // 更新状态\n      visited[i] = true;\n      path.push_back(num);\n      dfs(idx + 1, path, nums, n, visited);\n      // 恢复状态\n      path.pop_back();\n      visited[i] = false;\n    }\n  }\n  vector<vector<int>> permute(vector<int> &nums) {\n    vector<int> path;\n    vector<bool> visited(nums.size(), false);\n    int n = nums.size();\n    dfs(0, path, nums, n, visited);\n    return ans;\n  }\n};\n\n'
          },
          {
            language: 'Java',
            content:
              'class Solution {\n  private void backtrack(\n      List<List<Integer>> ans, ArrayList<Integer> tempList, ArrayList<Integer> nums) {\n    if (tempList.size() == nums.size()) {\n      ans.add(new ArrayList<Integer>(tempList));\n      return;\n    }\n    for (int i = 0; i < nums.size(); i++) {\n      if (tempList.contains(nums.get(i))) continue;\n      tempList.add(nums.get(i));\n      backtrack(ans, tempList, nums);\n      tempList.remove(tempList.size() - 1);\n    }\n  }\n\n  public List<List<Integer>> permute(int[] nums) {\n    List<List<Integer>> ans = new LinkedList();\n    ArrayList<Integer> tempList = new ArrayList<Integer>();\n    ArrayList<Integer> anums = new ArrayList<Integer>();\n    for (int num : nums) anums.add(num);\n    backtrack(ans, tempList, anums);\n    return ans;\n  }\n}\n\n'
          },
          {
            language: 'Js',
            content:
              'function backtrack(list, tempList, nums) {\n  if (tempList.length === nums.length) return list.push([...tempList]);\n  for (let i = 0; i < nums.length; i++) {\n    if (tempList.includes(nums[i])) continue;\n    tempList.push(nums[i]);\n    backtrack(list, tempList, nums);\n    tempList.pop();\n  }\n}\n/**\n * @param {number[]} nums\n * @return {number[][]}\n */\nvar permute = function(nums) {\n  const list = [];\n  backtrack(list, [], nums);\n  return list;\n};\n\n'
          },
          {
            language: 'Py',
            content:
              'class Solution:\n    def permute(self, nums: List[int]) -> List[List[int]]:\n        def dfs(idx: int, path: List[int]) -> None:\n            # 结束条件\n            # 1. 找到解\n            if len(path) == n:\n                ans.append(path.copy())\n                return\n            # 2. 搜索完毕\n            if idx == n:\n                return\n\n            # 考虑可能的解，进入下一层递归\n            for num in nums:\n                # 非法解忽略\n                if num in visited:\n                    continue\n                # 更新状态\n                visited.add(num)\n                path.append(num)\n                dfs(idx + 1, path)\n                # 恢复状态\n                path.pop()\n                visited.remove(num)\n\n        ans = []\n        visited = set()\n        n = len(nums)\n        dfs(0, [])\n        return ans\n\n'
          }
        ]
      }
    ]
  },
  {
    id: '02',
    name: '第二章',
    list: [
      {
        title: '代码2.1.1',
        codes: [
          {
            language: 'Cpp',
            content:
              'class Solution {\npublic:\n  vector<int> twoSum(vector<int> &nums, int target) {\n    int n = nums.size();\n    sort(nums.begin(), nums.end());\n    int l = 0;\n    int r = n - 1;\n    while (l < r) {\n      if (nums[l] + nums[r] < target) {\n        l += 1;\n      } else if (nums[l] + nums[r] > target) {\n        r -= 1;\n      } else {\n        return {l, r};\n      }\n    }\n    return {};\n  }\n};\n'
          },
          {
            language: 'Java',
            content:
              'class Solution {\n  public int[] twoSum(int[] nums, int target) {\n    int n = nums.length;\n    Arrays.sort(nums);\n    int l = 0;\n    int r = n - 1;\n    while (l < r) {\n      if (nums[l] + nums[r] < target) {\n        l += 1;\n      } else if (nums[l] + nums[r] > target) {\n        r -= 1;\n      } else {\n        return new int[] {l, r};\n      }\n    }\n    return new int[] {};\n  }\n}\n\n'
          },
          {
            language: 'Js',
            content:
              '/**\n * @param {number[]} nums\n * @param {number} target\n * @return {number[]}\n */\nvar twoSum = function(nums, target) {\n  const n = nums.length;\n  nums.sort((a, b) => a - b);\n  let l = 0;\n  let r = n - 1;\n  while (l < r) {\n    if (nums[l] + nums[r] < target) {\n      l += 1;\n    } else if (nums[l] + nums[r] > target) {\n      r -= 1;\n    } else {\n      return [l, r];\n    }\n  }\n  return [];\n};\n\n'
          },
          {
            language: 'Py',
            content:
              'class Solution:\n    def twoSum(self, nums: List[int], target: int) -> List[int]:\n        n = len(nums)\n        nums.sort()\n        l = 0\n        r = n - 1\n        while l < r:\n            if nums[l] + nums[r] < target:\n                l += 1\n            elif nums[l] + nums[r] > target:\n                r -= 1\n            else:\n                return [l, r]\n        return []\n\n'
          }
        ]
      },
      {
        title: '代码2.1.2',
        codes: [
          {
            language: 'Cpp',
            content:
              'class Solution {\npublic:\n  vector<int> twoSum(vector<int> &nums, int target) {\n\n    unordered_map<int, int> mapper;\n\n    for (int i = 0; i < nums.size(); i++) {\n      if (mapper.find(target - nums[i]) != mapper.end())\n        return {mapper[target - nums[i]], i};\n\n      mapper[nums[i]] = i;\n    }\n    return {};\n  }\n};\n'
          },
          {
            language: 'Java',
            content:
              'class Solution {\n  public int[] twoSum(int[] nums, int target) {\n    Map<Integer, Integer> mapper = new HashMap<>();\n    for (int i = 0; i < nums.length; i++) {\n      if (mapper.containsKey(target - nums[i])) {\n        return new int[] {mapper.get(target - nums[i]), i};\n      }\n      mapper.put(nums[i], i);\n    }\n    return new int[] {};\n  }\n}\n\n'
          },
          {
            language: 'Js',
            content:
              '/**\n * @param {number[]} nums\n * @param {number} target\n * @return {number[]}\n */\nvar twoSum = function(nums, target) {\n    const n = nums.length\n    const mapper = {}\n    for(let i = 0;i < n;i++) {\n        if (mapper[target - nums[i]] !== void 0) return [mapper[target - nums[i]], i]\n        mapper[nums[i]] = i\n    }\n    return []\n};\n'
          },
          {
            language: 'Py',
            content:
              'class Solution:\n    def twoSum(self, nums: List[int], target: int) -> List[int]:\n        n = len(nums)\n        mapper = {}\n        for i in range(n):\n            if target - nums[i] in mapper:\n                # 实际上这里返回的索引顺序是不重要的\n                # 即返回 [i, mapper[target - nums[i]]] 也是正确的\n                return [mapper[target - nums[i]], i]\n            else:\n                mapper[nums[i]] = i\n\n        return []\n\n'
          }
        ]
      },
      {
        title: '代码2.10.1',
        codes: [
          {
            language: 'Cpp',
            content:
              'typedef long long ll;\n\nconst ll magic = 1000000007LL;\n\nclass Solution {\npublic:\n  ll factorial(ll n) {\n    return (n <= 1LL) ? 1LL : n % magic * (factorial(n - 1) % magic) % magic;\n  }\n  ll numPrimeArrangements(ll n) {\n    ll primes[] = {\n            2,\n            3,\n            5,\n            7,\n            11,\n            13,\n            17,\n            19,\n            23,\n            29,\n            31,\n            37,\n            41,\n            43,\n            47,\n            53,\n            59,\n            61,\n            67,\n            71,\n            73,\n            79,\n            83,\n            89,\n            97,\n            101,\n    };\n    int primeCount = 0;\n    while (primes[primeCount] <= n)\n      primeCount += 1;\n    return factorial(primeCount) % magic * \\\n      (factorial(n - primeCount) % magic) % magic;\n  }\n};\n\n'
          },
          {
            language: 'Java',
            content:
              'public class Solution {\n  public final long magic = (long)1000000007;\n  public long factorial(long n) {\n    return (n <= 1) ? 1 : n % magic * (factorial(n - 1) % magic) % magic;\n  }\n  public int numPrimeArrangements(int n) {\n    int[] primes = {\n            2,\n            3,\n            5,\n            7,\n            11,\n            13,\n            17,\n            19,\n            23,\n            29,\n            31,\n            37,\n            41,\n            43,\n            47,\n            53,\n            59,\n            61,\n            67,\n            71,\n            73,\n            79,\n            83,\n            89,\n            97,\n            101\n    };\n    int primeCount = 0;\n    while (primes[primeCount] <= n)\n      primeCount += 1;\n    return (int)(factorial((long)primeCount) % magic *\n      (factorial((long)n - (long)primeCount) % magic) % magic);\n  }\n}\n\n'
          },
          {
            language: 'Py',
            content:
              'class Solution:\n    def numPrimeArrangements(self, n: int) -> int:\n        def factorial(n) -> int:\n            if n <= 1:\n                return 1\n            return n * factorial(n - 1)\n\n        primes = [\n            2,\n            3,\n            5,\n            7,\n            11,\n            13,\n            17,\n            19,\n            23,\n            29,\n            31,\n            37,\n            41,\n            43,\n            47,\n            53,\n            59,\n            61,\n            67,\n            71,\n            73,\n            79,\n            83,\n            89,\n            97,\n            101,\n        ]\n\n        primeCount = 0\n        while primes[primeCount] <= n:\n            primeCount += 1\n        return factorial(primeCount) * factorial(n - primeCount) % (10 ** 9 + 7)\n\n'
          }
        ]
      },
      {
        title: '代码2.2.1',
        codes: [
          {
            language: 'Cpp',
            content:
              'class Solution {\npublic:\n  vector<vector<int>> threeSum(vector<int> &nums) {\n    int n = nums.size();\n    sort(nums.begin(), nums.end());\n    vector<vector<int>> res;\n\n    for (int i = 0; i < n - 2; i++) {\n      if (i > 0 && nums[i] == nums[i - 1])\n        continue;\n      int l = i + 1;\n      int r = n - 1;\n      while (l < r) {\n        if (nums[i] + nums[l] + nums[r] < 0) {\n          l += 1;\n        } else if (nums[i] + nums[l] + nums[r] > 0) {\n          r -= 1;\n        } else {\n          res.push_back(vector<int>{nums[i], nums.at(l), nums.at(r)});\n          while (l < r && nums[l] == nums[l + 1]) {\n            l += 1;\n          }\n          while (l < r && nums[r] == nums[r - 1]) {\n            r -= 1;\n          }\n          l += 1;\n          r -= 1;\n        }\n      }\n    }\n    return res;\n  }\n};\n'
          },
          {
            language: 'Java',
            content:
              'class Solution {\n  public List<List<Integer>> threeSum(int[] nums) {\n    int n = nums.length;\n    Arrays.sort(nums);\n    List<List<Integer>> res = new ArrayList<>();\n\n    for (int i = 0; i < n - 2; i++) {\n      if (i > 0 && nums[i] == nums[i - 1]) continue;\n      int l = i + 1;\n      int r = n - 1;\n      while (l < r) {\n        if (nums[i] + nums[l] + nums[r] < 0) {\n          l += 1;\n        } else if (nums[i] + nums[l] + nums[r] > 0) {\n          r -= 1;\n        } else {\n          res.add(new ArrayList<Integer>(Arrays.asList(nums[i], nums[l], nums[r])));\n          while (l < r && nums[l] == nums[l + 1]) {\n            l += 1;\n          }\n          while (l < r && nums[r] == nums[r - 1]) {\n            r -= 1;\n          }\n          l += 1;\n          r -= 1;\n        }\n      }\n    }\n    return res;\n  }\n}\n\n'
          },
          {
            language: 'Js',
            content:
              '/**\n * @param {number[]} nums\n * @return {number[][]}\n */\nvar threeSum = function(nums) {\n  const n = nums.length;\n  nums.sort((a, b) => a - b);\n  const res = [];\n\n  for (let i = 0; i < n - 2; i++) {\n    if (i > 0 && nums[i] == nums[i - 1]) continue;\n    let l = i + 1;\n    let r = n - 1;\n    while (l < r) {\n      if (nums[i] + nums[l] + nums[r] < 0) {\n        l += 1;\n      } else if (nums[i] + nums[l] + nums[r] > 0) {\n        r -= 1;\n      } else {\n        res.push([nums[i], nums[l], nums[r]]);\n        while (l < r && nums[l] == nums[l + 1]) {\n          l += 1;\n        }\n        while (l < r && nums[r] == nums[r - 1]) {\n          r -= 1;\n        }\n        l += 1;\n        r -= 1;\n      }\n    }\n  }\n  return res;\n};\n\n'
          },
          {
            language: 'Py',
            content:
              'class Solution:\n    def threeSum(self, nums: List[int]) -> List[List[int]]:\n        n = len(nums)\n        nums.sort()\n        res = []\n\n        # 要找到三个数字，因此只需要找到倒数 n-3 个数字即可\n        for i in range(n - 2):\n            # 去重\n            if i > 0 and nums[i] == nums[i - 1]:\n                continue\n            # 固定 i，寻找 l 和 r ，使用双指针法\n            l = i + 1\n            r = n - 1\n            while l < r:\n                if nums[i] + nums[l] + nums[r] < 0:\n                    l += 1\n                elif nums[i] + nums[l] + nums[r] > 0:\n                    r -= 1\n                else:\n                    res.append([nums[i], nums[l], nums[r]])\n                    # 去重\n                    while l < r and nums[l] == nums[l + 1]:\n                        l += 1\n                    while l < r and nums[r] == nums[r - 1]:\n                        r -= 1\n                    l += 1\n                    r -= 1\n\n        return res\n\n'
          }
        ]
      },
      {
        title: '代码2.3.1',
        codes: [
          {
            language: 'Cpp',
            content:
              '\nclass Solution {\npublic:\n  vector<vector<int>> res;\n  set<string> set;\n  void backtrack(vector<int> &nums, int n, vector<int> tempList, int remain,\n                 int start) {\n    if (tempList.size() > 4) {\n      return;\n    }\n    if (remain == 0 && tempList.size() == 4) {\n      stringstream ss;\n      copy(tempList.begin(), tempList.end(), ostream_iterator<int>(ss, ""));\n      string s = ss.str();\n      if (set.count(s) != 0) {\n        return;\n      } else {\n        set.insert(s);\n        vector<int> copy;\n        copy.assign(tempList.begin(), tempList.end());\n        res.push_back(copy);\n        return;\n      }\n    }\n    for (int i = start; i < n; i++) {\n      tempList.push_back(nums[i]);\n      backtrack(nums, n, tempList, remain - nums[i], i + 1);\n      tempList.pop_back();\n    }\n  }\n  vector<vector<int>> fourSum(vector<int> &nums, int target) {\n    sort(nums.begin(), nums.end());\n    vector<int> tempList;\n    backtrack(nums, nums.size(), tempList, target, 0);\n    return res;\n  }\n};\n'
          },
          {
            language: 'Java',
            content:
              'class Solution {\n  private void backtrack(\n      List<List<Integer>> res,\n      int[] nums,\n      int n,\n      List<Integer> tempList,\n      int remain,\n      int start,\n      HashSet set) {\n    if (tempList.size() > 4) {\n      return;\n    }\n    if (remain == 0 && tempList.size() == 4) {\n      if (set.contains(tempList.toString())) {\n        return;\n      } else {\n        set.add(tempList.toString());\n        res.add(new ArrayList<Integer>(tempList));\n        return;\n      }\n    }\n    for (int i = start; i < n; i++) {\n      tempList.add(nums[i]);\n      backtrack(res, nums, n, tempList, remain - nums[i], i + 1, set);\n      tempList.remove(tempList.size() - 1);\n    }\n  }\n\n  public List<List<Integer>> fourSum(int[] nums, int target) {\n    List<List<Integer>> res = new ArrayList<>();\n    HashSet set = new HashSet();\n    Arrays.sort(nums);\n    List<Integer> tempList = new ArrayList<Integer>();\n    backtrack(res, nums, nums.length, tempList, target, 0, set);\n    return res;\n  }\n}\n\n'
          },
          {
            language: 'Py',
            content:
              'class Solution:\n    def backtrack(\n        self,\n        res: List[List[int]],\n        nums: List[int],\n        n: int,\n        tempList: List[int],\n        remain: int,\n        start: int,\n        hashmap: dict,\n    ) -> None:\n        if len(tempList) > 4:\n            return\n        if remain == 0 and len(tempList) == 4:\n            if str(tempList) in hashmap:\n                return\n            else:\n                hashmap[str(tempList)] = True\n                res.append(tempList.copy())\n                return\n        for i in range(start, n):\n            tempList.append(nums[i])\n            self.backtrack(res, nums, n, tempList, remain - nums[i], i + 1, hashmap)\n            tempList.pop()\n\n    def fourSum(self, nums: List[int], target: int) -> List[List[int]]:\n        res = []\n        hashmap = {}\n        nums.sort()\n        self.backtrack(res, nums, len(nums), [], target, 0, hashmap)\n        return res\n\n'
          }
        ]
      },
      {
        title: '代码2.3.2',
        codes: [
          {
            language: 'Cpp',
            content:
              '#include <vector>\n#include <algorithm>\nusing namespace std;\n\nclass Solution {\npublic:\n  vector<vector<int> > fourSum(vector<int>& nums,\n      int target) {\n    sort(nums.begin(), nums.end());\n    vector<vector<int> > results;\n    vector<int> tempList;\n    findNsum(nums, target, 4, tempList, results);\n    return results;\n  }\n  void findNsum(vector<int> nums, int target, int N,\n      vector<int> tempList,\n      vector<vector<int> >& results) {\n    if (nums.size() < N || N < 2) return;\n    if (N == 2) {\n      int l = 0, r = nums.size() - 1;\n      while (l < r) {\n        if (nums[l] + nums[r] == target) {\n          vector<int> bufList = tempList;\n          bufList.push_back(nums[l]);\n          bufList.push_back(nums[r]);\n          results.push_back(bufList);\n          l += 1;\n          r -= 1;\n          while (l < r && nums[l] == nums[l - 1])\n            l += 1;\n          while (r > l && nums[r] == nums[r + 1])\n            r -= 1;\n        }\n        else if (nums[l] + nums[r] < target) l += 1;\n        else r -= 1;\n      }\n    } else {\n      for (int i = 0; i < nums.size(); i++)\n        if (i == 0 || i > 0 && nums[i - 1] != nums[i]) {\n          vector<int> buf_nums;\n          for (int j = i + 1; j < nums.size(); j++)\n            buf_nums.push_back(nums[j]);\n          vector<int> bufList = tempList;\n          bufList.push_back(nums[i]);\n          findNsum(buf_nums, target - nums[i],\n              N - 1, bufList, results);\n        }\n    }\n  }\n};\n\n'
          },
          {
            language: 'Java',
            content:
              'import java.util.*;\nimport java.lang.Math;\n\npublic class Solution {\n  public List<List<Integer> > fourSum(\n      int[] nums, int target\n      ) {\n    Arrays.sort(nums);\n    List<List<Integer> > results = new ArrayList<List<Integer> >();\n    List<Integer> tempList = new ArrayList<>();\n    findNsum(nums, target, 4, tempList, results);\n    return results;\n  }\n  void findNsum(int[] nums, int target, int N,\n      List<Integer> tempList,\n      List<List<Integer> > results) {\n    if (nums.length < N || N < 2) return;\n    if (N == 2) {\n      int l = 0, r = nums.length - 1;\n      while (l < r) {\n        if (nums[l] + nums[r] == target) {\n          List<Integer> bufList = new ArrayList<>();\n          for (int ww = 0; ww < tempList.size(); ww++)\n            bufList.add(tempList.get(ww));\n          bufList.add(nums[l]);\n          bufList.add(nums[r]);\n          results.add(bufList);\n          l += 1;\n          r -= 1;\n          while (l < r && nums[l] == nums[l - 1])\n            l += 1;\n          while (r > l && nums[r] == nums[r + 1])\n            r -= 1;\n        }\n        else if (nums[l] + nums[r] < target) l += 1;\n        else r -= 1;\n      }\n    } else {\n      for (int i = 0; i < nums.length; i++)\n        if (i == 0 || i > 0 && nums[i - 1] != nums[i]) {\n          int[] buf_nums = new int[nums.length - i - 1];\n          for (int j = i + 1; j < nums.length; j++)\n            buf_nums[j - i - 1] = nums[j];\n          List<Integer> bufList = new ArrayList<>();\n          for (int ww = 0; ww < tempList.size(); ww++)\n            bufList.add(tempList.get(ww));\n          bufList.add(nums[i]);\n          findNsum(buf_nums, target - nums[i], N - 1,\n              bufList, results);\n        }\n    }\n  }\n}\n\n'
          },
          {
            language: 'Py',
            content:
              'class Solution:\n    def fourSum(self, nums: List[int], target: int):\n        nums.sort()\n        results = []\n        self.findNsum(nums, target, 4, [], results)\n        return results\n\n    def findNsum(\n        self,\n        nums: List[int],\n        target: int,\n        N: int,\n        tempList: List[int],\n        results: List[List[int]],\n    ) -> None:\n        if len(nums) < N or N < 2:\n            return\n\n        # two-sum\n        if N == 2:\n            l = 0\n            r = len(nums) - 1\n            while l < r:\n                if nums[l] + nums[r] == target:\n                    results.append(tempList + [nums[l], nums[r]])\n                    l += 1\n                    r -= 1\n                    # skip duplicated\n                    while l < r and nums[l] == nums[l - 1]:\n                        l += 1\n                    while r > l and nums[r] == nums[r + 1]:\n                        r -= 1\n                elif nums[l] + nums[r] < target:\n                    l += 1\n                else:\n                    r -= 1\n        # 缩减问题规模\n        else:\n            for i in range(0, len(nums)):\n                # skip duplicated\n                if i == 0 or i > 0 and nums[i - 1] != nums[i]:\n                    self.findNsum(\n                        nums[i + 1 :],\n                        target - nums[i],\n                        N - 1,\n                        tempList + [nums[i]],\n                        results,\n                    )\n        return\n\n'
          }
        ]
      },
      {
        title: '代码2.4.1',
        codes: [
          {
            language: 'Cpp',
            content:
              '#include <vector>\n#include <map>\nusing namespace std;\n\nclass Solution {\npublic:\n  int fourSumCount(const vector<int>& A,\n      const vector<int>& B,\n      const vector<int>& C,\n      const vector<int>& D) {\n    map<int, int> mapper;\n    int res = 0;\n    for (int i = 0; i < A.size(); i++)\n      for (int j = 0; j < B.size(); j++) {\n        if (mapper.count(A[i] + B[j]))\n          mapper[A[i] + B[j]] = mapper[A[i] + B[j]] + 1;\n        else\n          mapper[A[i] + B[j]] = 1;\n      }\n    for (int i = 0; i < C.size(); i++)\n      for (int j = 0; j < D.size(); j++)\n        if (mapper.count(-1 * (C[i] + D[j])))\n          res += mapper[-1 * (C[i] + D[j])];\n    return res;\n  }\n};\n\n'
          },
          {
            language: 'Java',
            content:
              'import java.util.*;\n\npublic class Solution {\n  public int fourSumCount(int[] A,\n      int[] B, int[] C, int[] D) {\n    Map<Integer, Integer> mapper = new HashMap<Integer, Integer>();\n    int res = 0;\n    for (int i = 0; i < A.length; i++)\n      for (int j = 0; j < B.length; j++) {\n        if (mapper.get(A[i] + B[j]) != null)\n          mapper.put(A[i] + B[j], mapper.get(A[i] + B[j]) + 1);\n        else\n          mapper.put(A[i] + B[j], 1);\n      }\n    for (int i = 0; i < C.length; i++)\n      for (int j = 0; j < D.length; j++)\n        if (mapper.get(-1 * (C[i] + D[j])) != null)\n          res += mapper.get(-1 * (C[i] + D[j]));\n    return res;\n  }\n}\n\n'
          },
          {
            language: 'Py',
            content:
              'class Solution:\n    def fourSumCount(\n        self, A: List[int], B: List[int], C: List[int], D: List[int]\n    ) -> int:\n        mapper = {}\n        res = 0\n        for i in A:\n            for j in B:\n                mapper[i + j] = mapper.get(i + j, 0) + 1\n\n        for i in C:\n            for j in D:\n                res += mapper.get(-1 * (i + j), 0)\n        return res\n\n'
          }
        ]
      },
      {
        title: '代码2.5.1',
        codes: [
          {
            language: 'Cpp',
            content:
              '#include <vector>\n#include <cmath>\n#include <cstdlib>\n#include <algorithm>\nusing namespace std;\n\nclass Solution {\npublic:\n  int threeSumClosest(vector<int>& nums, int target) {\n    int n = nums.size();\n    //if (n < 3) return;\n    sort(nums.begin(), nums.end());\n    int res = nums[0] + nums[1] + nums[2];\n    for (int i = 0; i < n - 2; i++) {\n      if (i && nums[i] == nums[i - 1]) continue;\n      int l = i + 1, r = n - 1;\n      while (l < r) {\n        int s = nums[i] + nums[l] + nums[r];\n        if (s == target) return s;\n        if (abs(s - target) < abs(res - target))\n          res = s;\n        if (s < target) l += 1;\n        else if (s > target) r -= 1;\n      }\n    }\n    return res;\n  }\n};\n\n'
          },
          {
            language: 'Java',
            content:
              'import java.lang.Math;\nimport java.util.*;\n\npublic class Solution {\n  public int threeSumClosest(int[] nums, int target) {\n    int n = nums.length;\n    //if (n < 3) return;\n    Arrays.sort(nums);\n    int res = nums[0] + nums[1] + nums[2];\n    for (int i = 0; i < n - 2; i ++) {\n      if (i != 0 && nums[i] == nums[i - 1]) continue;\n      int l = i + 1, r = n - 1;\n      while (l < r) {\n        int s = nums[i] + nums[l] + nums[r];\n        if (s == target) return s;\n        if (Math.abs(s - target) < Math.abs(res - target))\n          res = s;\n        if (s < target) l += 1;\n        else if (s > target) r -= 1;\n      }\n    }\n    return res;\n  }\n}\n\n'
          },
          {
            language: 'Py',
            content:
              'class Solution:\n    def threeSumClosest(self, nums: List[int], target: int) -> int:\n        n = len(nums)\n        if n < 3:\n            return\n        nums.sort()\n        res = nums[0] + nums[1] + nums[2]\n        for i in range(n - 2):\n            # 去重\n            if i > 0 and nums[i] == nums[i - 1]:\n                continue\n            # 固定 i，寻找 l 和 r，使用双指针法\n            l = i + 1\n            r = n - 1\n            while l < r:\n                s = nums[i] + nums[l] + nums[r]\n                if s == target:\n                    return s\n\n                if abs(s - target) < abs(res - target):\n                    res = s\n\n                if s < target:\n                    l += 1\n                elif s > target:\n                    r -= 1\n\n        return res\n\n'
          }
        ]
      },
      {
        title: '代码2.6.1',
        codes: [
          {
            language: 'Cpp',
            content:
              '#include <algorithm>\n#include <vector>\nusing namespace std;\n\nclass Solution {\npublic:\n  int maxSubArray(const vector<int>& nums) {\n    int n = nums.size();\n    int maxSum = -0x7fffffff, total = 0;\n    for (int i = 0; i < n; i++) {\n      total = 0;\n      for (int j = i; j < n; j++) {\n        total += nums[j];\n        maxSum = max(maxSum, total);\n      }\n    }\n    return maxSum;\n  }\n};\n\n'
          },
          {
            language: 'Java',
            content:
              'import java.lang.Math;\n\npublic class Solution {\n  public int maxSubArray(int[] nums) {\n    int n = nums.length;\n    int maxSum = -0x7fffffff, total = 0;\n    for (int i = 0; i < n; i++) {\n      total = 0;\n      for (int j = i; j < n; j++) {\n        total += nums[j];\n        maxSum = Math.max(maxSum, total);\n      }\n    }\n    return maxSum;\n  }\n}\n\n'
          },
          {
            language: 'Py',
            content:
              'class Solution:\n    def maxSubArray(self, nums: List[int]) -> int:\n        n = len(nums)\n        maxSum = float("-inf")\n        total = 0\n        for i in range(n):\n            total = 0\n            for j in range(i, n):\n                total += nums[j]\n                maxSum = max(maxSum, total)\n\n        return maxSum\n\n'
          }
        ]
      },
      {
        title: '代码2.6.2',
        codes: [
          {
            language: 'Cpp',
            content:
              '#include <vector>\n#include <algorithm>\nusing namespace std;\n\nclass Solution {\npublic:\n  int helper(const vector<int>& nums, int l, int r) {\n    if (l > r) return -0x7fffffff;\n    int mid = (l + r) / 2;\n    int left = helper(nums, l, mid - 1);\n    int right = helper(nums, mid + 1, r);\n    int left_suffix_max_sum = 0;\n    int right_prefix_max_sum = 0;\n    int total = 0;\n    for (int i = mid - 1; i >= l; i--) {\n      total += nums[i];\n      left_suffix_max_sum = max(left_suffix_max_sum,\n          total);\n    }\n    total = 0;\n    for (int i = mid + 1; i < r + 1; i++) {\n      total += nums[i];\n      right_prefix_max_sum = max(right_prefix_max_sum,\n          total);\n    }\n    int cross_max_sum = left_suffix_max_sum + \\\n                        right_prefix_max_sum + \\\n                        nums[mid];\n    return max(cross_max_sum, max(left, right));\n  }\n  int maxSubArray(const vector<int>& nums) {\n    return helper(nums, 0, nums.size() - 1);\n  }\n};\n\n'
          },
          {
            language: 'Java',
            content:
              'import java.lang.Math;\n\npublic class Solution {\n  public int helper(int[] nums, int l, int r) {\n    if (l > r) return -0x7fffffff;\n    int mid = (l + r) / 2;\n    int left = helper(nums, l, mid - 1);\n    int right = helper(nums, mid + 1, r);\n    int left_suffix_max_sum = 0;\n    int right_prefix_max_sum = 0;\n    int total = 0;\n    for (int i = mid - 1; i >= l; i--) {\n      total += nums[i];\n      left_suffix_max_sum = Math.max(left_suffix_max_sum,\n          total);\n    }\n    total = 0;\n    for (int i = mid + 1; i < r + 1; i ++) {\n      total += nums[i];\n      right_prefix_max_sum = Math.max(right_prefix_max_sum,\n          total);\n    }\n    int cross_max_sum = left_suffix_max_sum\n      + right_prefix_max_sum\n      + nums[mid];\n    return Math.max(cross_max_sum, Math.max(left, right));\n  }\n  public int maxSubArray(int[] nums) {\n    return helper(nums, 0, nums.length - 1);\n  }\n}\n\n'
          },
          {
            language: 'Py',
            content:
              'class Solution:\n    def maxSubArray(self, nums: List[int]) -> int:\n        return self.helper(nums, 0, len(nums) - 1)\n\n    def helper(self, nums: List[int], l: int, r: int) -> int:\n        if l > r:\n            return float("-inf")\n        mid = (l + r) // 2\n        left = self.helper(nums, l, mid - 1)\n        right = self.helper(nums, mid + 1, r)\n        left_suffix_max_sum = right_prefix_max_sum = 0\n        total = 0\n        for i in reversed(range(l, mid)):\n            total += nums[i]\n            left_suffix_max_sum = max(left_suffix_max_sum, total)\n        total = 0\n        for i in range(mid + 1, r + 1):\n            total += nums[i]\n            right_prefix_max_sum = max(right_prefix_max_sum, total)\n        cross_max_sum = left_suffix_max_sum + right_prefix_max_sum + nums[mid]\n        return max(cross_max_sum, left, right)\n\n'
          }
        ]
      },
      {
        title: '代码2.6.3',
        codes: [
          {
            language: 'Cpp',
            content:
              '#include <vector>\n#include <algorithm>\nusing namespace std;\n\nclass Solution {\npublic:\n  int maxSubArray(const vector<int>& nums) {\n    int n = nums.size();\n    int max_sum_ending_curr_idx = nums[0];\n    int max_sum = nums[0];\n    for (int i = 1; i < n; i++) {\n      max_sum_ending_curr_idx = max(\n          max_sum_ending_curr_idx + nums[i],\n          nums[i]\n          );\n      max_sum = max(\n          max_sum_ending_curr_idx,\n          max_sum\n          );\n    }\n    return max_sum;\n  }\n};\n\n'
          },
          {
            language: 'Java',
            content:
              'import java.lang.Math;\n\npublic class Solution {\n  public int maxSubArray(int[] nums) {\n    int n = nums.length;\n    int max_sum_ending_curr_idx = nums[0];\n    int max_sum = nums[0];\n    for (int i = 1; i < n; i++) {\n      max_sum_ending_curr_idx = Math.max(\n          max_sum_ending_curr_idx + nums[i],\n          nums[i]\n          );\n      max_sum = Math.max(\n          max_sum_ending_curr_idx,\n          max_sum\n          );\n    }\n    return max_sum;\n  }\n}\n\n'
          },
          {
            language: 'Py',
            content:
              'class Solution:\n    def maxSubArray(self, nums: List[int]) -> int:\n        n = len(nums)\n        max_sum_ending_curr_index = max_sum = nums[0]\n        for i in range(1, n):\n            max_sum_ending_curr_index = max(\n                max_sum_ending_curr_index + nums[i], nums[i]\n            )\n            max_sum = max(max_sum_ending_curr_index, max_sum)\n\n        return max_sum\n\n'
          }
        ]
      },
      {
        title: '代码2.6.4',
        codes: [
          {
            language: 'Cpp',
            content:
              '#include <algorithm>\n#include <vector>\nusing namespace std;\n\nclass Solution {\npublic:\n  int maxSubArray(const vector<int>& nums) {\n    int n = nums.size();\n    int maxSum = nums[0], minSum = 0, sum = 0;\n    for (int i = 0; i < n; i++) {\n      sum += nums[i];\n      maxSum = max(maxSum, sum - minSum);\n      minSum = min(minSum, sum);\n    }\n    return maxSum;\n  }\n};\n\n'
          },
          {
            language: 'Java',
            content:
              'import java.lang.Math;\n\npublic class Solution {\n  public int maxSubArray(int[] nums) {\n    int n = nums.length;\n    int maxSum = nums[0], minSum = 0, sum = 0;\n    for (int i = 0; i < n; i++) {\n      sum += nums[i];\n      maxSum = Math.max(maxSum, sum - minSum);\n      minSum = Math.min(minSum, sum);\n    }\n    return maxSum;\n  }\n}\n\n'
          },
          {
            language: 'Py',
            content:
              'class Solution:\n    def maxSubArray(self, nums: List[int]) -> int:\n        n = len(nums)\n        maxSum = nums[0]\n        minSum = sum = 0\n        for i in range(n):\n            sum += nums[i]\n            maxSum = max(maxSum, sum - minSum)\n            minSum = min(minSum, sum)\n\n        return maxSum\n\n'
          }
        ]
      },
      {
        title: '代码2.7.1',
        codes: [
          {
            language: 'Cpp',
            content:
              '#include <string>\n#include <vector>\n#include <algorithm>\n#include <cstdlib>\n#include <cstdio>\nusing namespace std;\n\nstruct my_str {\n  string str;\n  my_str(int num): str(to_string(num)) {}\n  bool operator < (const my_str& rhs) const {\n    return str + rhs.str > rhs.str + str;\n  }\n};\n\nclass Solution {\npublic:\n  string largestNumber(const vector<int>& nums) {\n    vector<my_str> s;\n    for (int i = 0; i < nums.size(); i++)\n      s.push_back(my_str(nums[i]));\n    sort(s.begin(), s.end());\n    string ans("");\n    for (int i = 0; i < nums.size(); i++)\n      ans += s[i].str;\n    string real_ans("");\n    bool flag = false;\n    for (int i = 0; i < ans.length(); i++) {\n      if (!flag) flag = !(ans[i] == \'0\');\n      if (flag) real_ans.push_back(ans[i]);\n    }\n    if (!flag) return string("0");\n    else return real_ans;\n  }\n};\n\n'
          },
          {
            language: 'Java',
            content:
              'import java.util.*;\n\npublic class Solution {\n  public class my_str {\n    public String str;\n    public void setStr(int num) {\n        Integer buf_num = new Integer(num);\n        this.str = buf_num.toString();\n    }\n  }\n  public class my_cmp implements Comparator<my_str> {\n    @Override\n    public int compare(my_str a, my_str b) {\n      if (a != null && b != null) {\n        String left = a.str + b.str;\n        String right = b.str + a.str;\n        return right.compareTo(left);\n      }\n      return 0;\n    }\n  }\n  String largestNumber(int[] nums) {\n    my_str[] s;\n    s = new my_str[nums.length];\n    for (int i = 0; i < nums.length; i++) {\n        s[i] = new my_str();\n        s[i].setStr(nums[i]);\n    }\n    Arrays.sort(s, new my_cmp());\n    String ans = "";\n    for (int i = 0; i < nums.length; i++)\n      if (s[i] != null) ans = ans + s[i].str;\n    String real_ans = "";\n    boolean flag = false;\n    for (int i = 0; i < ans.length(); i++) {\n      if (!flag) flag = !(ans.charAt(i) == \'0\');\n      if (flag) real_ans = real_ans + ans.substring(i, i + 1);\n    }\n    if (!flag) return "0";\n    else return real_ans;\n  }\n}\n\n'
          },
          {
            language: 'Py',
            content:
              'import functools\n\n\nclass Solution:\n    def largestNumber(self, nums: List[int]) -> str:\n        s = [str(i) for i in nums]\n\n        def comp(a, b):\n            if (a + b) > (b + a):\n                return 1\n            if (a + b) < (b + a):\n                return -1\n            return 0\n\n        # 这里加了一次 int 转换过程，用于处理第一个数字为 0 的情况\n        s.sort(reverse=True, key=functools.cmp_to_key(comp))\n        return str(int("".join(s)))\n\n'
          }
        ]
      },
      {
        title: '代码2.7.2',
        codes: [
          {
            language: 'Cpp',
            content:
              '#include <vector>\n#include <algorithm>\n#include <cstdio>\n#include <string>\n#include <cstdlib>\nusing namespace std;\n\nstring largestNumber(const vector<int>& nums) {\n  vector<string> s;\n  for (int i = 0; i < nums.size(); i++)\n    s.push_back(to_string(nums[i]));\n  // clang++/g++: need parameter \'-std=c++11\'\n  sort(s.begin(), s.end(), [](string a, string b)\n      -> bool {\n      return a + b > b + a;\n      });\n  string ans("");\n  for (int i = 0; i < nums.size(); i++)\n    ans += s[i];\n    string real_ans("");\n    bool flag = false;\n    for (int i = 0; i < ans.length(); i++) {\n      if (!flag) flag = !(ans[i] == \'0\');\n      if (flag) real_ans.push_back(ans[i]);\n    }\n    if (!flag) return string("0");\n    else return real_ans;\n}\n\n'
          },
          {
            language: 'Java',
            content:
              'import java.util.*;\n\npublic class Solution {\n  public String largestNumber(int[] nums) {\n    String[] s = new String[nums.length];\n    for (int i = 0; i < nums.length; i++)\n      s[i] = String.valueOf(nums[i]);\n    List<String> str = Arrays.asList(s);\n    str.sort((String a, String b) -> {\n      String left = a + b, right = b + a;\n      return right.compareTo(left);\n    });\n    String ans = "";\n    for (int i = 0; i < nums.length; i++)\n      ans = ans + str.get(i);\n    String real_ans = "";\n    boolean flag = false;\n    for (int i = 0; i < ans.length(); i++) {\n      if (!flag) flag = !(ans.charAt(i) == \'0\');\n      if (flag) real_ans = real_ans + ans.substring(i, i + 1);\n    }\n    if (!flag) return "0";\n    else return real_ans;\n  }\n}\n\n'
          },
          {
            language: 'Py',
            content:
              'def largestNumber(self, nums: List[int]) -> str:\n    return str(int("".join(sorted(map(str, nums), cmp=lambda a, b: cmp(b + a, a + b)))))\n\n'
          }
        ]
      },
      {
        title: '代码2.8.1',
        codes: [
          {
            language: 'Cpp',
            content:
              '#include <cstdlib>\n#include <cmath>\n#include <string>\n#include <map>\nusing namespace std;\n\ntypedef long long ll;\n\nclass Solution {\npublic:\n  string fractionToDecimal(ll numerator,\n      ll denominator) {\n    string res("");\n    if (double(numerator) / double(denominator) < 0.0) res += "-";\n    numerator = llabs(numerator);\n    denominator = llabs(denominator);\n    ll n = numerator / denominator;\n    ll remainder = numerator % denominator;\n    res += to_string(n);\n    if (!remainder) return res;\n    res += ".";\n    int idx = res.size();\n    map<ll, int> seen;\n    while (remainder && !seen.count(remainder)) {\n      seen[remainder] = idx++;\n      n = (remainder * 10LL) / denominator;\n      remainder = (remainder * 10LL) % denominator;\n      res += to_string(n);\n    }\n    if (remainder) {\n      res.insert(seen[remainder], 1, \'(\');\n      res += ")";\n    }\n    return res;\n  }\n};\n\n\n'
          },
          {
            language: 'Java',
            content:
              'import java.util.*;\nimport java.lang.Math;\n\npublic class Solution {\n  public String fractionToDecimal(long numerator,\n      long denominator) {\n    String res = "";\n    if ((double)numerator / (double)denominator < 0.0) res = res + "-";\n    numerator = Math.abs(numerator);\n    denominator = Math.abs(denominator);\n    long n = numerator / denominator;\n    long remainder = numerator % denominator;\n    res = res + String.valueOf(n);\n    if (remainder == 0) return res;\n    res = res + ".";\n    int idx = res.length();\n    Map<Long, Integer> seen = new HashMap<Long,\n      Integer>();\n    while (remainder != 0 && seen.get(remainder) == null) {\n      seen.put(remainder, idx);\n      idx = idx + 1;\n      n = (remainder * 10) / denominator;\n      remainder = (remainder * 10) % denominator;\n      res = res + String.valueOf(n);\n    }\n    if (remainder != 0) {\n      StringBuffer ano_str =  new StringBuffer(res);\n      ano_str.insert(seen.get(remainder), "(");\n      res = ano_str.toString();\n      res += ")";\n    }\n    return res;\n  }\n}\n\n'
          },
          {
            language: 'Py',
            content:
              'class Solution:\n    def fractionToDecimal(self, numerator: int, denominator: int) -> str:\n        # 最终结果由两部分组成， 符号和值\n        # 简单起见，全部取绝对值，计算出最终结果的值\n        # 符号我们可以通过除是否大于0来判断\n\n        # 长除法\n        n, remainder = divmod(abs(numerator), abs(denominator))\n        sign = ""\n        if numerator // denominator < 0:\n            sign = "-"\n\n        res = [str(n), "."]\n        seen = []\n        while remainder not in seen:\n            seen.append(remainder)\n            n, remainder = divmod(remainder * 10, abs(denominator))\n            res.append(str(n))\n        # 处理循环节的格式\n        index = seen.index(remainder)\n        res.insert(index + 2, "(")\n        res.append(")")\n\n        return sign + "".join(res).replace("(0)", "").rstrip(".")\n\n'
          }
        ]
      },
      {
        title: '代码2.9.1',
        codes: [
          {
            language: 'Cpp',
            content:
              '#include <vector>\n#include <set>\n#include <map>\n#include <algorithm>\nusing namespace std;\n\nstruct node {\n  set<int> s;\n  node() {\n    s.clear();\n  }\n  bool operator < (const node& rhs) const {\n    return s.size() > rhs.s.size();\n  }\n  void operator = (const node& rhs) {\n    s = rhs.s;\n  }\n};\n\nclass Solution {\npublic:\n  vector<int> largestDivisibleSubset(\n      vector<int>& nums\n      ) {\n    map<int, node> S;\n    S[-1] = node();\n    sort(nums.begin(), nums.end());\n    for (int i = 0; i < nums.size(); i++) {\n      int x = nums[i];\n      vector<node> temp;\n      for (map<int, node>::iterator it = S.begin();\n          it != S.end(); it++) {\n        int d = it->first;\n        if (x % d == 0) {\n          S[d].s.insert(x);\n          temp.push_back(S[d]);\n          S[d].s.erase(x);\n        }\n      }\n      node buf = node();\n      for (int j = 0; j < temp.size(); j++)\n        if (temp[j] < buf) buf = temp[j];\n      if (!buf.s.count(x)) buf.s.insert(x);\n      S[x] = buf;\n    }\n    vector<int> ans;\n    node buf = node();\n    for (map<int, node>::iterator it = S.begin();\n        it != S.end(); it++)\n      if (it->second < buf) buf = it->second;\n    for (set<int>::iterator it = buf.s.begin();\n        it != buf.s.end(); it++)\n      ans.push_back(*it);\n    return ans;\n  }\n};\n\n'
          },
          {
            language: 'Java',
            content:
              'import java.util.*;\n\npublic class Solution {\n  public class node {\n    Set<Integer> s;\n    node() {\n      this.s = new HashSet<Integer>();\n    }\n    boolean less (node rhs) {\n      return this.s.size() > rhs.s.size();\n    }\n  }\n  public List<Integer> largestDivisibleSubset(int[] nums) {\n    Map<Integer, node> S = new HashMap<Integer, node>();\n    S.put(-1, new node());\n    Arrays.sort(nums);\n    for (int i = 0; i < nums.length; i++) {\n      int x = nums[i];\n      List<node> temp = new ArrayList<>();\n      Set<Map.Entry<Integer, node> > key_set = S.entrySet();\n      Iterator<Map.Entry<Integer, node> > it = key_set.iterator();\n      while (it.hasNext()) {\n        Map.Entry<Integer, node> entry = it.next();\n        int d = entry.getKey();\n        if (x % d == 0) {\n          entry.getValue().s.add(x);\n          temp.add(S.get(d));\n          S.get(d).s.remove(x);\n        }\n      }\n      node buf = new node();\n      for (int j = 0; j < temp.size(); j++)\n        if (temp.get(j).less(buf)) {\n          buf.s = new HashSet<Integer>();\n          Iterator<Integer> copy_it = temp.get(j).s.iterator();\n          while (copy_it.hasNext()) {\n            Integer buf_val = copy_it.next();\n            buf.s.add(buf_val);\n          }\n        }\n      if (!buf.s.contains(x)) buf.s.add(x);\n      S.put(x, buf);\n    }\n    List<Integer> ans = new ArrayList<>();\n    node buf = new node();\n    Set<Map.Entry<Integer, node> > key_set = S.entrySet();\n    Iterator<Map.Entry<Integer, node> > it = key_set.iterator();\n    while (it.hasNext()) {\n      Map.Entry<Integer, node> entry = it.next();\n      node mid = entry.getValue();\n      if (mid.less(buf)) buf.s = mid.s;\n    }\n    Iterator<Integer> ano_it = buf.s.iterator();\n    while (ano_it.hasNext()) {\n      Integer val = ano_it.next();\n      ans.add(val);\n    }\n    return ans;\n  }\n}\n\n'
          },
          {
            language: 'Py',
            content:
              'class Solution:\n    def largestDivisibleSubset(self, nums: List[int]) -> List[int]:\n        # base case for simplicity\n        S = {-1: set()}\n        nums.sort()\n        for x in nums:\n            temp = []\n            for d in S:\n                if x % d == 0:\n                    S[d].add(x)\n                    temp.append(S[d])\n                    S[d].remove(x)\n            S[x] = max(temp, key=len) | {x}\n        return list(max(S.values(), key=len))\n\n'
          }
        ]
      },
      {
        title: '代码2.9.2',
        codes: [
          {
            language: 'Cpp',
            content: '// reference 2.9.1.largestDivisibleSubset.cpp\n\n\n'
          },
          {
            language: 'Java',
            content: '// reference 2.9.1.largestDivisibleSubset.java\n\n\n'
          },
          {
            language: 'Py',
            content:
              'class Solution:\n    def largestDivisibleSubset(self, nums: List[int]) -> List[int]:\n        S = {-1: set()}\n        for x in sorted(nums):\n            S[x] = max((S[d] for d in S if x % d == 0), key=len) | {x}\n        return list(max(S.values(), key=len))\n\n'
          }
        ]
      }
    ]
  },
  {
    id: '03',
    name: '第三章',
    list: [
      {
        title: '代码3.1.1',
        codes: [
          {
            language: 'Cpp',
            content:
              '#include <iostream>\n#include <string>\n\nbool isPalindrome(std::string s, int n) {\n  int l = 0;\n  int r = n - 1;\n  while (l < r) {\n    if (s[l] != s[r])\n      return false;\n    l += 1;\n    r -= 1;\n  }\n  return true;\n}\n\n'
          },
          {
            language: 'Java',
            content:
              'class Solution {\n  public boolean isPalindrome(String s, int n) {\n    int l = 0;\n    int r = n - 1;\n    while (l < r) {\n      if (s.charAt(l) != s.charAt(r)) return false;\n      l += 1;\n      r -= 1;\n    }\n    return true;\n  }\n}\n\n'
          },
          {
            language: 'Js',
            content:
              'function isPalindrome(s, n) {\n  let l = 0;\n  let r = n - 1;\n  while (l < r) {\n    if (s[l] !== s[r]) return false;\n    l += 1;\n    r -= 1;\n  }\n  return true;\n}\n\n'
          },
          {
            language: 'Py',
            content:
              'def isPalindrome(s: str, n: int) -> bool:\n    l = 0\n    r = n - 1\n    while l < r:\n        if s[l] != s[r]:\n            return False\n        l += 1\n        r -= 1\n\n    return True\n\n'
          }
        ]
      },
      {
        title: '代码3.1.2',
        codes: [
          {
            language: 'Cpp',
            content:
              'class Solution {\npublic:\n  bool isPalindrome(string s, int i, int n) {\n    int l = 0;\n    int r = n - 1;\n    while (l < r) {\n      if (l == i)\n        l += 1;\n      else if (r == i)\n        r -= 1;\n      if (s[l] != s[r])\n        return false;\n      l += 1;\n      r -= 1;\n    }\n    return true;\n  }\n  bool validPalindrome(string s) {\n    int n = s.length();\n    int l = 0;\n    int r = n - 1;\n    while (l < r) {\n      if (s[l] != s[r]) {\n        return isPalindrome(s, l, n) || isPalindrome(s, r, n);\n      }\n      l += 1;\n      r -= 1;\n    }\n    return true;\n  }\n};\n'
          },
          {
            language: 'Java',
            content:
              'class Solution {\n  private boolean isPalindrome(String s, int i, int n) {\n    int l = 0;\n    int r = n - 1;\n    while (l < r) {\n      if (l == i) l += 1;\n      else if (r == i) r -= 1;\n      if (s.charAt(l) != s.charAt(r)) return false;\n      l += 1;\n      r -= 1;\n    }\n    return true;\n  }\n\n  public boolean validPalindrome(String s) {\n    int n = s.length();\n    int l = 0;\n    int r = n - 1;\n    while (l < r) {\n      if (s.charAt(l) != s.charAt(r)) {\n        return isPalindrome(s, l, n) || isPalindrome(s, r, n);\n      }\n      l += 1;\n      r -= 1;\n    }\n    return true;\n  }\n}\n\n'
          },
          {
            language: 'Js',
            content:
              '/**\n * @param {string} s\n * @return {boolean}\n */\nvar validPalindrome = function(s) {\n  function isPalindrome(s, i, n) {\n    let l = 0;\n    let r = n - 1;\n    while (l < r) {\n      if (l == i) l += 1;\n      else if (r == i) r -= 1;\n      if (s.charAt(l) != s.charAt(r)) return false;\n      l += 1;\n      r -= 1;\n    }\n    return true;\n  }\n\n  let n = s.length;\n  let l = 0;\n  let r = n - 1;\n  while (l < r) {\n    if (s.charAt(l) != s.charAt(r)) {\n      return isPalindrome(s, l, n) || isPalindrome(s, r, n);\n    }\n    l += 1;\n    r -= 1;\n  }\n  return true;\n};\n\n'
          },
          {
            language: 'Py',
            content:
              'class Solution:\n    def validPalindrome(self, s: str) -> bool:\n        n = len(s)\n\n        def isPalindrome(s: str, i: int, n: int) -> bool:\n            l = 0\n            r = n - 1\n            while l < r:\n                if l == i:\n                    l += 1\n                elif r == i:\n                    r -= 1\n                if s[l] != s[r]:\n                    return False\n                l += 1\n                r -= 1\n\n            return True\n\n        l = 0\n        r = n - 1\n\n        while l < r:\n            if s[l] != s[r]:\n                return isPalindrome(s, l, n) or isPalindrome(s, r, n)\n            l += 1\n            r -= 1\n        return True\n\n'
          }
        ]
      },
      {
        title: '代码3.2.1',
        codes: [
          {
            language: 'Cpp',
            content:
              '#include <cstdio>\n#include <cstdlib>\n\nclass Solution {\npublic:\n  ListNode *reverseList(ListNode *head) {\n    if (!head) return NULL;\n    ListNode *prev = NULL, *cur = head;\n    while (cur) {\n      cur->next = prev;\n      prev = cur;\n      cur = cur->next;\n    }\n    return prev;\n  }\n};\n\n'
          },
          {
            language: 'Java',
            content:
              'public class Solution {\n  public ListNode reverseList(ListNode head) {\n    if (!head) return null;\n    ListNode prev = null, cur = head;\n    while (cur) {\n      cur.next = prev;\n      prev = cur;\n      cur = cur.next;\n    }\n    return prev;\n  }\n}\n\n'
          },
          {
            language: 'Py',
            content:
              'class Solution:\n    def reverseList(self, head: ListNode) -> ListNode:\n        if not head:\n            return None\n        prev = None\n        cur = head\n        while cur:\n            cur.next, prev, cur = prev, cur, cur.next\n        return prev\n\n'
          }
        ]
      },
      {
        title: '代码3.2.2',
        codes: [
          {
            language: 'Cpp',
            content:
              '#include <cstdio>\n#include <cstdlib>\n\nclass Solution {\npublic:\n  bool isPalindrome(ListNode *head) {\n    ListNode *pre = NULL;\n    ListNode *slow = head, *fast = head;\n    while (fast && fast->next) {\n      fast = fast->next->next;\n      ListNode *next = slow->next;\n      slow->next = pre;\n      pre = slow;\n      slow = next;\n    }\n    if (fast) slow = slow->next;\n    while (slow) {\n      if (slow->val != pre->val) return false;\n      pre = pre->next;\n      slow = slow->next;\n    }\n    return true;\n  }\n};\n\n'
          },
          {
            language: 'Java',
            content:
              'public class Solution {\n  public boolean isPalindrome(ListNode head) {\n    ListNode pre = null;\n    ListNode slow = head, fast = head;\n    while (fast != null && fast.next != null) {\n      fast = fast.next.next;\n      ListNode next = slow.next;\n      slow.next = pre;\n      pre = slow;\n      slow = next;\n    }\n    if (fast != null) slow = slow.next;\n    while (slow != null) {\n      if (slow.val != pre.val) return false;\n      pre = pre.next;\n      slow = slow.next;\n    }\n    return true;\n  }\n}\n\n'
          },
          {
            language: 'Py',
            content:
              'class Solution:\n    def isPalindrome(self, head: ListNode) -> bool:\n        pre = None\n        slow = fast = head\n\n        # 一边反转前半部分，一边找中点\n        while fast and fast.next:\n            # 先更新fast指针\n            fast = fast.next.next\n            # 再反转和更新slow指针\n            next = slow.next\n            slow.next = pre\n            pre = slow\n            slow = next\n        # 处理奇数个节点的情况\n        if fast:\n            slow = slow.next\n        # 从中点开始分别向前和后遍历，逐个比较是否相同即可\n        while slow:\n            if slow.val != pre.val:\n                return False\n            pre = pre.next\n            slow = slow.next\n        return True\n\n'
          }
        ]
      },
      {
        title: '代码3.3.1',
        codes: [
          {
            language: 'Cpp',
            content:
              'class Solution {\npublic:\n  bool isPalindrome(int x) {\n    if (x < 0) return false;\n    if (x == 0) return true;\n    if (x % 10 == 0) return false;\n    int res = 0, copy = x;\n    while (x > 0) {\n      res = res * 10 + (x % 10);\n      x /= 10;\n    }\n    return copy == res;\n  }\n};\n\n'
          },
          {
            language: 'Java',
            content:
              'public class Solution {\n  public boolean isPalindrome(int x) {\n    if (x < 0) return false;\n    if (x == 0) return true;\n    if (x % 10 == 0) return false;\n    int res = 0, copy = x;\n    while (x  > 0) {\n      res = res * 10 + (x % 10);\n      x = x / 10;\n    }\n    return copy == res;\n  }\n}\n\n'
          },
          {
            language: 'Py',
            content:
              'class Solution:\n    def isPalindrome(self, x: int) -> bool:\n        if x < 0:\n            return False\n        if x == 0:\n            return True\n        if x % 10 == 0:\n            return False\n\n        res = 0\n        copy = x\n        while x > 0:\n            res = res * 10 + (x % 10)\n            x = x // 10\n\n        return copy == res\n\n'
          }
        ]
      },
      {
        title: '代码3.4.1',
        codes: [
          {
            language: 'Cpp',
            content:
              '#include <string>\nusing namespace std;\n\nclass Solution {\npublic:\n  string extend(int i, int j, string s) {\n    while (i >= 0 && j < s.length() && s[i] == s[j]) {\n      i -= 1;\n      j += 1;\n    }\n    return s.substr(i + 1, j - i - 1);\n  }\n  string longestPalindrome(string s) {\n    int n = s.length();\n    if (n == 0) return "";\n    string res = s.substr(0, 1);\n    for (int i = 0; i < n - 1; i++) {\n      string e1 = extend(i, i, s);\n      string e2 = extend(i, i + 1, s);\n      if (max(e1.length(), e2.length()) > res.length())\n        res = ((e1.length() > e2.length()) ? e1 : e2);\n    }\n    return res;\n  }\n};\n\n'
          },
          {
            language: 'Java',
            content:
              'import java.util.*;\nimport java.lang.Math;\n\npublic class Solution {\n  public String extend(int i, int j, String s) {\n    while (i >= 0 && j < s.length() && s.charAt(i) ==\n        s.charAt(j)) {\n      i -= 1;\n      j += 1;\n    }\n    return s.substring(i + 1, j);\n  }\n  public String longestPalindrome(String s) {\n    int n = s.length();\n    if (n == 0) return "";\n    String res = s.substring(0, 1);\n    for (int i = 0; i < n - 1; i++) {\n      String e1 = extend(i, i, s);\n      String e2 = extend(i, i + 1, s);\n      if (Math.max(e1.length(), e2.length()) > res.length())\n        res = ((e1.length() > e2.length()) ? e1 : e2);\n    }\n    return res;\n  }\n}\n\n'
          },
          {
            language: 'Py',
            content:
              'class Solution:\n    def longestPalindrome(self, s: str) -> str:\n        n = len(s)\n        if n == 0:\n            return ""\n        res = s[0]\n\n        def extend(i: int, j: int, s: str) -> str:\n            while i >= 0 and j < len(s) and s[i] == s[j]:\n                i -= 1\n                j += 1\n            return s[i + 1 : j]\n\n        for i in range(n - 1):\n            # 以自身为中心点\n            e1 = extend(i, i, s)\n            # 以自身和自身的下一个元素为中心点\n            e2 = extend(i, i + 1, s)\n            if max(len(e1), len(e2)) > len(res):\n                res = e1 if len(e1) > len(e2) else e2\n        return res\n\n'
          }
        ]
      },
      {
        title: '代码3.5.1',
        codes: [
          {
            language: 'Cpp',
            content:
              '#include <cstdlib>\n#include <string>\n#include <algorithm>\nusing namespace std;\n\nclass Solution {\npublic:\n  int longestPalindromeSubseq(string s) {\n    int n = s.length();\n    int **dp = (int **)malloc(n * sizeof(int *));\n    for (int i = 0; i < n; i++) {\n      dp[i] = (int *)malloc(n * sizeof(int));\n      for (int j = 0; j < n; j++) dp[i][j] = 0;\n    }\n    for (int i = n - 1; i >= 0; i--)\n      for (int j = i; j < n; j++) {\n        if (i == j) dp[i][j] = 1;\n        else if (s[i] == s[j])\n          dp[i][j] = dp[i + 1][j - 1] + 2;\n        else\n          dp[i][j] = max(dp[i + 1][j], dp[i][j - 1]);\n      }\n    int ans = dp[0][n - 1];\n    for (int i = 0; i < n; i++) free(dp[i]);\n    free(dp);\n    return ans;\n  }\n};\n\n'
          },
          {
            language: 'Java',
            content:
              'import java.lang.Math;\n\npublic class Solution {\n  public int longestPalindromeSubseq(String s) {\n    int n = s.length();\n    int[][] dp = new int[n][n];\n    for (int i = 0; i < n; i++)\n      for (int j = 0; j < n; j++) dp[i][j] = 0;\n    for (int i = n - 1; i >= 0; i--)\n      for (int j = i; j < n; j++) {\n        if (i == j) dp[i][j] = 1;\n        else if (s.charAt(i) == s.charAt(j))\n          dp[i][j] = dp[i + 1][j - 1] + 2;\n        else\n          dp[i][j] = Math.max(dp[i + 1][j], dp[i][j - 1]);\n      }\n    return dp[0][n - 1];\n  }\n}\n\n'
          },
          {
            language: 'Py',
            content:
              'class Solution:\n    def longestPalindromeSubseq(self, s: str) -> int:\n        n = len(s)\n        dp = [[0] * n for i in range(n)]\n\n        for i in reversed(range(n)):\n            for j in range(i, n):\n                if i == j:\n                    dp[i][j] = 1\n                elif s[i] == s[j]:\n                    dp[i][j] = dp[i + 1][j - 1] + 2\n                else:\n                    dp[i][j] = max(dp[i + 1][j], dp[i][j - 1])\n        return dp[0][n - 1]\n\n'
          }
        ]
      },
      {
        title: '代码3.5.2',
        codes: [
          {
            language: 'Cpp',
            content:
              '#include <cstdlib>\n#include <string>\n#include <algorithm>\nusing namespace std;\n\nclass Solution {\npublic:\n  int longestPalindromeSubseq(string s) {\n    int n = s.length();\n    int *pre = (int *)malloc(n * sizeof(int));\n    int *cur = (int *)malloc(n * sizeof(int));\n    for (int i = 0; i < n; i++)\n      pre[i] = cur[i] = 0;\n    for (int i = n - 1; i >= 0; i--) {\n      for (int j = i; j < n; j++) {\n        if (i == j) cur[j] = 1;\n        else if (s[i] == s[j])\n          cur[j] = pre[j - 1] + 2;\n        else\n          cur[j] = max(pre[j], cur[j - 1]);\n      }\n      for (int j = 0; j < n; j++) pre[j] = cur[j];\n    }\n    int ans = pre[n - 1];\n    free(pre);\n    free(cur);\n    return ans;\n  }\n};\n\n'
          },
          {
            language: 'Java',
            content:
              'import java.lang.Math;\n\npublic class Solution {\n  public int longestPalindromeSubseq(String s) {\n    int n = s.length();\n    int[] pre = new int[n];\n    int[] cur = new int[n];\n    for (int i = 0; i < n; i++) pre[i] = cur[i] = 0;\n    for (int i = n - 1; i >= 0; i--) {\n      for (int j = i; j < n; j++) {\n        if (i == j) cur[j] = 1;\n        else if (s.charAt(i) == s.charAt(j))\n          cur[j] = pre[j - 1] + 2;\n        else\n          cur[j] = Math.max(pre[j], cur[j - 1]);\n      }\n      for (int j = 0; j < n; j++) pre[j] = cur[j];\n    }\n    return pre[n - 1];\n  }\n}\n\n'
          },
          {
            language: 'Py',
            content:
              'class Solution:\n    def longestPalindromeSubseq(self, s: str) -> int:\n        n = len(s)\n        pre = [0] * n\n        cur = [0] * n\n\n        for i in reversed(range(n)):\n            for j in range(i, n):\n                if i == j:\n                    cur[j] = 1\n                elif s[i] == s[j]:\n                    cur[j] = pre[j - 1] + 2\n                else:\n                    cur[j] = max(pre[j], cur[j - 1])\n            pre = cur.copy()\n        return pre[-1]\n\n'
          }
        ]
      },
      {
        title: '代码3.6.1',
        codes: [
          {
            language: 'Cpp',
            content:
              "#include <cmath>\n#include <cstdlib>\n#include <string>\nusing namespace std;\n\ntypedef long long ll;\n\nclass Solution {\npublic:\n  bool validPalindrome(string s) {\n    int l = 0, r = s.length() - 1;\n    while (l < r) {\n      if (s[l] != s[r]) return false;\n      l += 1;\n      r -= 1;\n    }\n    return true;\n  }\n  int superpalindromesInRange(string L, string R) {\n    int cnt = 0;\n    ll l_num = 0LL, r_num = 0LL;\n    for (int i = 0; i < L.length(); i++)\n      l_num = (l_num * 10LL) + ll(L[i] - '0');\n    for (int i = 0; i < R.length(); i++)\n      r_num = (r_num * 10LL) + ll(R[i] - '0');\n    for (ll i = ll(floor(sqrt(double(l_num))));\n        i < ll(ceil(sqrt(double(r_num)))); i += 1LL)\n      if (validPalindrome(to_string(i)) && \\\n          validPalindrome(to_string(i * i))) cnt += 1;\n    return cnt;\n  }\n};\n\n"
          },
          {
            language: 'Java',
            content:
              'import java.lang.Math;\n\npublic class Solution {\n  public boolean validPalindrome(String s) {\n    int l = 0, r = s.length() - 1;\n    while (l < r) {\n      if (s.charAt(l) != s.charAt(r)) return false;\n      l += 1;\n      r -= 1;\n    }\n    return true;\n  }\n  public int superpalindromesInRange(String L, String R) {\n    int cnt = 0;\n    long lbound = (long)Math.floor(Math.sqrt(Long.parseLong(L)));\n    long rbound = (long)Math.ceil(Math.sqrt(Long.parseLong(R)));\n    for (long i = lbound; i < rbound; i += (long)1)\n      if (validPalindrome(String.valueOf(i)) &&\n          validPalindrome(String.valueOf(i * i)))\n        cnt = cnt + 1;\n    return cnt;\n  }\n}\n\n'
          },
          {
            language: 'Py',
            content:
              'import math\n\n\nclass Solution:\n    def superpalindromesInRange(self, L: str, R: str) -> int:\n        cnt = 0\n\n        def validPalindrome(s: str) -> bool:\n            l = 0\n            r = len(s) - 1\n            while l < r:\n                if s[l] != s[r]:\n                    return False\n                l += 1\n                r -= 1\n            return True\n\n        for i in range(math.floor(int(L) ** 0.5), math.ceil(int(R) ** 0.5)):\n            if validPalindrome(str(i)) and validPalindrome(str(i ** 2)):\n                cnt += 1\n        return cnt\n\n'
          }
        ]
      },
      {
        title: '代码3.6.2',
        codes: [
          {
            language: 'Cpp',
            content:
              "#include <map>\n#include <string>\n#include <cmath>\n#include <cstdlib>\n#include <iostream>\n#include <limits.h>\nusing namespace std;\n\ntypedef long long ll;\n\nclass Solution {\npublic:\n  bool validPalindrome(string s) {\n    int l = 0, r = s.length() - 1;\n    while (l < r) {\n      if (s[l] != s[r]) return false;\n      l += 1;\n      r -= 1;\n    }\n    return true;\n  }\n  int superpalindromesInRange(string L, string R) {\n    int cnt = 0;\n    ll i = 1;\n    map<ll, bool> seen;\n    seen.clear();\n    while (i < 100000LL) {\n      ll power = ll(floor(log(i) / log(10.0) + 0.5));\n      ll x = i, r = 0;\n      while (x > 0LL) {\n        r = r * 10LL + (x % 10LL);\n        x /= 10LL;\n      }\n      ll Q = ll(i * pow(10, power) + \\\n          r % ll(pow(10, power)));\n      if (LLONG_MAX / Q < Q) return cnt;\n      Q = Q * Q;\n      ll l_num = 0LL, r_num = 0LL;\n      for (int ww = 0; ww < L.size(); ww++)\n        l_num = (l_num * 10LL) + ll(L[ww] - '0');\n      for (int ww = 0; ww < R.size(); ww++)\n        r_num = (r_num * 10LL) + ll(R[ww] - '0');\n      if (Q > r_num) return cnt;\n      if (Q >= l_num && validPalindrome(to_string(Q)))\n        if (!seen.count(Q)) {\n          cnt += 1;\n          seen[Q] = true;\n        }\n      Q = i * pow(10, power + 1LL) + r;\n      if (LLONG_MAX / Q < Q) return cnt;\n      Q = Q * Q;\n      if (Q >= l_num && Q <= r_num && validPalindrome(to_string(Q)))\n        if (!seen.count(Q)) {\n          cnt += 1;\n          seen[Q] = true;\n        }\n      i += 1LL;\n    }\n    return cnt;\n  }\n};\n\n"
          },
          {
            language: 'Java',
            content:
              'import java.util.*;\nimport java.lang.Math;\n\npublic class Solution {\n  public boolean validPalindrome(String s) {\n    int l = 0, r = s.length() - 1;\n    while (l < r) {\n      if (s.charAt(l) != s.charAt(r)) return false;\n      l += 1;\n      r -= 1;\n    }\n    return true;\n  }\n  public int superpalindromesInRange(String L, String R) {\n    int cnt = 0;\n    long i = 1;\n    Set<Long> seen = new HashSet<Long>();\n    while (i < (long)100000) {\n      long power = (long)Math.floor(Math.log(i) / Math.log(10.0) + 0.5);\n      long x = i, r = 0;\n      while (x > 0) {\n        r = r * (long)10 + (x % (long)10);\n        x /= (long)10;\n      }\n      long Q = (long)(i * Math.pow(10, power) +\n          r % (long)Math.pow(10, power));\n      if (Long.MAX_VALUE / Q < Q) return cnt;\n      Q = Q * Q;\n      if (Q > Long.parseLong(R)) return cnt;\n      if (Q >= Long.parseLong(L) &&\n          validPalindrome(String.valueOf(Q)))\n        if (!seen.contains(Q)) {\n          cnt = cnt + 1;\n          seen.add(Q);\n        }\n      Q = (long)(i * Math.pow(10, power + 1) + r);\n      if (Long.MAX_VALUE / Q < Q) return cnt;\n      Q = Q * Q;\n      if (Q >= Long.parseLong(L) && Q <= Long.parseLong(R) &&\n          validPalindrome(String.valueOf(Q)))\n        if (!seen.contains(Q)) {\n          cnt = cnt + 1;\n          seen.add(Q);\n        }\n      i = i + 1;\n    }\n    return cnt;\n  }\n}\n\n'
          },
          {
            language: 'Py',
            content:
              'import math\n\n\nclass Solution:\n    def superpalindromesInRange(self, L: str, R: str) -> int:\n        cnt = 0\n        i = 1\n        # 防止重复的数据\n        seen = {}\n\n        def validPalindrome(s: str) -> bool:\n            l = 0\n            r = len(s) - 1\n            while l < r:\n                if s[l] != s[r]:\n                    return False\n                l += 1\n                r -= 1\n            return True\n\n        while i < 10 ** 5:\n            # log10 防止精度丢失问题\n            power = math.floor(math.log10(i))\n            x = i\n            r = 0\n            while x > 0:\n                r = r * 10 + (x % 10)\n                x = x // 10\n            # 如果i等于123\n            # 那么Q就是12321\n            Q = (i * 10 ** power + r % 10 ** power) ** 2\n\n            if Q > int(R):\n                return cnt\n            if Q >= int(L) and validPalindrome(str(Q)):\n                if Q not in seen:\n                    cnt += 1\n                    seen[Q] = True\n            # 那么就是123321\n            Q = (i * 10 ** (power + 1) + r) ** 2\n            if Q >= int(L) and Q <= int(R) and validPalindrome(str(Q)):\n                if Q not in seen:\n                    cnt += 1\n                    seen[Q] = True\n            i += 1\n\n        return cnt\n\n'
          }
        ]
      }
    ]
  },
  {
    id: '04',
    name: '第四章',
    list: [
      {
        title: '代码4.1.1',
        codes: [
          {
            language: 'Cpp',
            content:
              'class Solution {\npublic:\n    string countAndSay(int n) {\n        string res = "1";\n        \n        for (int i = 1; i < n; i++) {\n            string tmp = "";\n            char current_char = res[0];\n            int  char_count   = 0;\n            \n            for (int j = 0; j < res.size(); j++) {\n                if (res[j] != current_char) {\n                    tmp += itoa(char_count) + current_char;\n                    current_char = res[j];\n                    char_count = 1;\n                } else {\n                    char_count += 1;\n                }\n            }\n            \n            tmp += itoa(char_count) + current_char;\n            res = tmp;\n        }\n        \n        return res;\n    }\n};\n\n'
          },
          {
            language: 'Java',
            content:
              'public class CountAndSay {\n    public String countAndSay(int n) {\n        String ans = "1";\n        for (int i = 1; i < n; i++) {\n            StringBuffer stringBuffer = new StringBuffer();\n            char currentChar = ans.charAt(0);\n            int charCount = 0;\n\n            for (int j = 0; j < ans.length(); j++) {\n                if (ans.charAt(j) != currentChar) {\n                    stringBuffer.append(charCount);\n                    stringBuffer.append(currentChar);\n                    currentChar = ans.charAt(j);\n                    charCount = 1;\n                } else {\n                    charCount++;\n                }\n            }\n            stringBuffer.append(charCount);\n            stringBuffer.append(currentChar);\n            ans = stringBuffer.toString();\n        }\n        return ans;\n    }\n}\n'
          },
          {
            language: 'Py',
            content:
              'class Solution:\n    def countAndSay(self, n: int) -> str:\n        ans = "1"\n        for i in range(1, n):\n            tmp = ""\n            current_char, char_count = ans[0], 0\n            for j in range(len(ans)):\n                if ans[j] != current_char:\n                    tmp += str(char_count) + current_char\n                    current_char, char_count = ans[j], 1\n                else:\n                    char_count += 1\n            tmp += str(char_count) + current_char\n            ans = tmp\n        return ans\n\n\n'
          }
        ]
      },
      {
        title: '代码4.1.2',
        codes: [
          {
            language: 'Cpp',
            content:
              'class Solution {\npublic:\n    string countAndSay(int n) {\n        if (n == 1) return "1";\n        \n        string pre_str = countAndSay(n - 1);\n        \n        int char_index = 0, char_count = 1;\n        string cur_str = "";\n        \n        for (int i = 0; i < pre_str.length() - 1; i++) {\n            if (pre_str[char_index] == pre_str[i + 1])\n                char_count += 1;\n            else {\n                cur_str += to_string(char_count) + pre_str[char_index];\n                char_index = i + 1;\n                char_count = 1;\n            }\n        }\n        \n        cur_str += to_string(char_count) + pre_str[char_index];\n        \n        return cur_str;\n    }\n};\n\n'
          },
          {
            language: 'Java',
            content:
              'public class CountAndSay {\n    public String countAndSay(int n) {\n        String ans = "1";\n        for (int i = 1; i < n; i++) {\n            String tmp = "";\n            char currentChar = ans.charAt(0);\n            int charCount = 0;\n\n            for (int j = 0; j < ans.length(); j++) {\n                if (ans.charAt(j) != currentChar) {\n                    tmp += (charCount + "" + currentChar);\n                    currentChar = ans.charAt(j);\n                    charCount = 1;\n                } else {\n                    charCount++;\n                }\n            }\n            tmp += (charCount + "" + currentChar);\n            ans = tmp;\n        }\n        return ans;\n    }\n}\n'
          },
          {
            language: 'Py',
            content:
              'class Solution:\n    def countAndSay(self, n: int) -> str:\n        if n == 1:\n            return "1"\n        else:\n            previous_string = self.countAndSay(n - 1)\n            char_index, char_count = 0, 1\n            current_string = ""\n            for i in range(len(previous_string)):\n                if (\n                    i + 1 < len(previous_string)\n                    and previous_string[char_index] == previous_string[i + 1]\n                ):\n                    char_count += 1\n                else:\n                    current_string += str(char_count) + previous_string[char_index]\n                    char_index, char_count = i + 1, 1\n\n            return current_string\n\n'
          }
        ]
      },
      {
        title: '代码4.2.1',
        codes: [
          {
            language: 'Cpp',
            content:
              'class Solution {\nprivate:\n    bool compute(double a) {\n        return fabs(24 - a) < 1e-8;\n    }\n    bool compute(double a, double b) {\n        return compute(a + b) || compute(a - b) || compute(a * b) || (b && compute(a / b));\n    }\n    bool compute(double a, double b, double c) {\n        return compute(a + b, c) || compute(a - b, c) || compute(a * b, c) || (b && compute(a / b, c)) ||\n               compute(a, b + c) || compute(a, b - c) || compute(a, b * c) || (c && compute(a, b / c));\n    }\n    bool compute(double a, double b, double c, double d) {\n        bool res = compute(a + b, c, d) || compute(a - b, c, d) || compute(a * b, c, d) || (b && compute(a / b, c, d)) ||\n                   compute(a, b + c, d) || compute(a, b - c, d) || compute(a, b * c, d) || (c && compute(a, b / c, d)) ||\n                   compute(a, b, c + d) || compute(a, b, c - d) || compute(a, b, c * d) || (d && compute(a, b, c / d));\n        \n        return res;\n    }\npublic:\n    bool judgePoint24(vector<int>& nums) {\n        sort (nums.begin(), nums.end());\n        \n        do {\n            if (compute(nums[0], nums[1], nums[2], nums[3]))\n                return true;\n        } while (next_permutation(nums.begin(), nums.end()));\n\n        return false;\n    }\n};\n\n'
          },
          {
            language: 'Java',
            content:
              'package ch04.code;\n\nimport java.util.ArrayList;\nimport java.util.Arrays;\nimport java.util.List;\n\npublic class TwentyFourGame {\n    List<List<Double>> permutationList = new ArrayList<>();\n\n    // 9ms at best\n    public boolean judgePoint24(int[] nums) {\n        permuteUnique(nums);\n        for (List<Double> permutation : permutationList) {\n            if (compute(permutation))\n                return true;\n        }\n        return false;\n    }\n\n    private boolean compute(List<Double> nums) {\n        if (nums.size() == 1)\n            return Math.abs(nums.get(0) - 24) <= 1e-6;\n\n        for (int i = 0; i < nums.size() - 1; i++) {\n            // compute possible result from + - * /\n            List<Double> tmpResultList = new ArrayList<>();\n            tmpResultList.add(nums.get(i) + nums.get(i + 1));\n            tmpResultList.add(nums.get(i) - nums.get(i + 1));\n            tmpResultList.add(nums.get(i) * nums.get(i + 1));\n            if (nums.get(i + 1) != 0) {\n                tmpResultList.add(nums.get(i) / nums.get(i + 1));\n            }\n\n            // replace nums[i] and nums[i+1] with the result\n            // continue with the new list\n            for (Double newNum : tmpResultList) {\n                List<Double> newList = new ArrayList<>(nums);\n                newList.set(i, newNum);\n                newList.remove(i + 1);\n                if (compute(newList))\n                    return true;\n            }\n        }\n        return false;\n    }\n\n\n    public void permuteUnique(int[] nums) {\n        boolean[] visited = new boolean[nums.length];\n        Arrays.sort(nums);\n        backtracking(nums, new ArrayList<>(), visited);\n    }\n\n    private void backtracking(int[] nums, List<Double> tmp, boolean[] visited) {\n        if (tmp.size() == nums.length) {\n            permutationList.add(new ArrayList<>(tmp));\n            return;\n        }\n\n        for (int i = 0; i < nums.length; i++) {\n            if (visited[i])\n                continue;\n            // !visited[i - 1] 说明已经遍历完被撤销了状态记录\n            if (i > 0 && nums[i] == nums[i - 1] && !visited[i - 1])\n                continue;\n            visited[i] = true;\n            tmp.add((double) nums[i]);\n            backtracking(nums, tmp, visited);\n\n            visited[i] = false;\n            tmp.remove(tmp.size() - 1);\n        }\n    }\n}\n'
          },
          {
            language: 'Py',
            content:
              'from typing import List\n\n\nclass Solution:\n    def judgePoint24(self, nums: List[int]) -> bool:\n        permutations = self.permuteUnique(nums)\n        for permutation in permutations:\n            if self.compute(permutation):\n                return True\n        return False\n\n    def compute(self, nums: List[float]) -> bool:\n        if len(nums) == 1:\n            return abs(nums[0] - 24) <= 0.00001\n        for i in range(len(nums) - 1):\n            # compute possible result from + - * /\n            tmp = []\n            tmp.append(nums[i] + nums[i + 1])\n            tmp.append(nums[i] - nums[i + 1])\n            tmp.append(nums[i] * nums[i + 1])\n            if nums[i + 1] != 0:\n                tmp.append(nums[i] / nums[i + 1])\n\n            for num in tmp:\n                new_list = nums[:]\n                new_list[i] = num\n                new_list.pop(i + 1)\n                if self.compute(new_list):\n                    return True\n        return False\n\n    def permuteUnique(self, nums: List[int]) -> List[List[int]]:\n        permutations = []\n        nums.sort()\n        tmp = []\n        visited = [False] * len(nums)\n\n        self.backtracking(nums, tmp, visited, permutations)\n        return permutations\n\n    def backtracking(\n        self, nums: List[int], tmp: List[float], visited: List[bool], perm: List[int],\n    ) -> None:\n        if len(nums) == len(tmp):\n            perm.append(tmp[:])\n            return\n        for i in range(len(nums)):\n            if visited[i]:\n                continue\n            if i > 0 and nums[i] == nums[i - 1] and not visited[i - 1]:\n                continue\n            visited[i] = True\n            tmp.append(nums[i])\n            self.backtracking(nums, tmp, visited, perm)\n            visited[i] = False\n            tmp.pop()\n\n'
          }
        ]
      },
      {
        title: '代码4.2.2',
        codes: [
          {
            language: 'Cpp',
            content:
              'class Solution {\nprivate:\n    bool compute(vector<double>& nums) {\n        if (nums.size() == 1)\n            return fabs(nums[0] - 24.0) < 1e-8;\n        \n        for (int left = 0; left < nums.size() - 1; left++) {\n            for (int right = left + 1; right < nums.size(); right++) {\n                vector<double> tmp;\n                for (int k = 0; k < nums.size(); k++)\n                    if (k != left && k != right) tmp.push_back(nums[k]);\n                \n                tmp.push_back(nums[left] + nums[right]);\n                if (compute(tmp))\n                    return  true;\n                \n                tmp.back() = nums[left] * nums[right];\n                if (compute(tmp))\n                    return true;\n                \n                tmp.back() = nums[left] - nums[right];\n                if (compute(tmp))\n                    return true;\n                \n                tmp.back() = nums[left] / nums[right];\n                if (compute(tmp))\n                    return true;\n                \n                tmp.back() = nums[right] - nums[left];\n                if (compute(tmp))\n                    return true;\n                \n                tmp.back() = nums[right] / nums[left];\n                if (compute(tmp))\n                    return true;\n            }\n        }\n        \n        return false;\n    }\npublic:\n    bool judgePoint24(vector<int>& nums) {\n        vector<double> tmp(nums.begin(), nums.end());\n        return compute(tmp);\n    }\n};\n\n'
          },
          {
            language: 'Java',
            content:
              'package ch04.code;\n\nimport java.util.ArrayList;\nimport java.util.Arrays;\nimport java.util.List;\n\npublic class TwentyFourGame {\n    public boolean judgePoint24(int[] nums) {\n        double[] nums1 = new double[nums.length];\n        for (int i = 0; i < nums.length; i++) {\n            nums1[i] = nums[i];\n        }\n        return helper(nums1, 4);\n    }\n\n    private boolean helper(double[] nums, int n) {\n        if (n == 1)\n            return Math.abs(nums[0] - 24) <= 1e-6;\n\n        double newNums[] = new double[4];\n\n        for (int left = 0; left < n - 1; left++) {\n            for (int right = left + 1; right < n; right++) {\n                int m = 0;\n                // put all other num at the beginning first\n                for (int k = 0; k < n; k++) {\n                    if (k != left && k != right)\n                        newNums[m++] = nums[k];\n                }\n                // put newNum in after + = * /\n                newNums[m] = nums[left] + nums[right];\n                if (helper(newNums, m + 1))\n                    return true;\n                newNums[m] = nums[left] - nums[right];\n                if (helper(newNums, m + 1))\n                    return true;\n                newNums[m] = nums[right] - nums[left];\n                if (helper(newNums, m + 1))\n                    return true;\n                newNums[m] = nums[left] * nums[right];\n                if (helper(newNums, m + 1))\n                    return true;\n                if (nums[right] != 0) {\n                    newNums[m] = nums[left] / nums[right];\n                    if (helper(newNums, m + 1))\n                        return true;\n                }\n                if (nums[left] != 0) {\n                    newNums[m] = nums[right] / nums[left];\n                    if (helper(newNums, m + 1))\n                        return true;\n                }\n            }\n        }\n        return false;\n    }\n}\n'
          },
          {
            language: 'Py',
            content:
              'from typing import List\n\n\nclass Solution:\n    def judgePoint24(self, nums: List[int]) -> bool:\n        return self.compute([float(i) for i in nums], 4)\n\n    def compute(self, nums: List[int], n: int) -> bool:\n        if n == 1:\n            return abs(nums[0] - 24) < 0.000001\n        new_nums = [0] * 4\n\n        for left in range(n - 1):\n            for right in range(left + 1, n):\n                index = 0\n                for i in range(n):\n                    if i != left and i != right:\n                        new_nums[index] = nums[i]\n                        index += 1\n\n                new_nums[index] = nums[left] + nums[right]\n                if self.compute(new_nums, index + 1):\n                    return True\n                new_nums[index] = nums[left] - nums[right]\n                if self.compute(new_nums, index + 1):\n                    return True\n                new_nums[index] = nums[right] - nums[left]\n                if self.compute(new_nums, index + 1):\n                    return True\n                new_nums[index] = nums[right] * nums[left]\n                if self.compute(new_nums, index + 1):\n                    return True\n                if nums[left] != 0:\n                    new_nums[index] = nums[right] / nums[left]\n                    if self.compute(new_nums, index + 1):\n                        return True\n                if nums[right] != 0:\n                    new_nums[index] = nums[left] / nums[right]\n                    if self.compute(new_nums, index + 1):\n                        return True\n        return False\n\n'
          }
        ]
      },
      {
        title: '代码4.3.1',
        codes: [
          {
            language: 'Cpp',
            content:
              "class Solution {\nprivate:\n    vector<vector<bool>> row_state;\n    vector<vector<bool>> column_state;\n    vector<vector<bool>> box_state;\n    \nprivate:\n    void placeNumber(vector<vector<char>>& board, int row, int column, char d) {\n        board[row][column] = d;\n        row_state[row][d - '1']    = true;\n        column_state[column][d - '1'] = true;\n        box_state[((row / 3) * 3) + (column / 3)][d - '1'] = true;\n    }\n\n    void undoNumberPlace(vector<vector<char>>& board, int row, int column, char d) {\n        board[row][column] = '.';\n        row_state[row][d - '1'] = false;\n        column_state[column][d - '1'] = false;\n        box_state[((row / 3) * 3) + (column / 3)][d - '1'] = false;\n    }\n\n    void initialState(vector<vector<char>>& board) {\n        for (int i = 0; i < 9; i++)\n            for (int j = 0; j < 9; j++)\n                if (board[i][j] != '.')\n                    placeNumber(board, i, j, board[i][j]);\n    }\n    \n    bool recursivePlaceNumber(vector<vector<char>>& board, int row, int column) {\n        if (row == 9) return true;\n        if (column == 9) return recursivePlaceNumber(board, row + 1, 0);\n        if (board[row][column] != '.') return recursivePlaceNumber(board, row, column + 1);\n        \n        for (int i = '1'; i <= '9'; i++) {\n            if (!(row_state[row][i - '1'] \n                  || column_state[column][i - '1'] \n                  || box_state[((row / 3) * 3) + (column / 3)][i - '1'])) {\n                placeNumber(board, row, column, i);\n                if (recursivePlaceNumber(board, row, column + 1) == true)\n                    return true;\n                undoNumberPlace(board, row, column, i);\n            }\n        }\n        \n        return false;\n    }\npublic:\n    void solveSudoku(vector<vector<char>>& board) {\n        row_state    = vector<vector<bool>>(9, vector<bool>(9, false));\n        column_state = vector<vector<bool>>(9, vector<bool>(9, false));\n        box_state    = vector<vector<bool>>(9, vector<bool>(9, false));\n        \n        initialState(board);\n        \n        recursivePlaceNumber(board, 0, 0);\n    }\n};\n\n"
          },
          {
            language: 'Java',
            content:
              "public class SudokuSolver {\n    public void solveSudoku(char[][] board) {\n        boolean rowState[][] = new boolean[9][10];\n        boolean columnState[][] = new boolean[9][10];\n        boolean boxState[][] = new boolean[9][10];\n        for (int i = 0; i < 9; i++) {\n            for (int j = 0; j < 9; j++) {\n                if (board[i][j] != '.') {\n                    int index = board[i][j] - '0';\n                    rowState[i][index] = true;\n                    columnState[j][index] = true;\n                    boxState[(i / 3) * 3 + j / 3][index] = true;\n                }\n            }\n        }\n        recursivePlaceNumber(board, rowState, columnState, boxState, 0, 0);\n    }\n\n    private boolean recursivePlaceNumber(char[][] board, boolean[][] rowState, boolean[][] columnState, boolean[][] boxState, int row, int column) {\n        if (column == 9) {\n            column = 0;\n            row++;\n            if (row == 9) {\n                // game complete\n                return true;\n            }\n        }\n\n        if (board[row][column] != '.') {\n            return recursivePlaceNumber(board, rowState, columnState, boxState, row, column + 1);\n        } else {\n            for (int i = 1; i < 10; i++) {\n                if (rowState[row][i] || columnState[column][i] || boxState[(row / 3) * 3 + column / 3][i]) {\n                    continue;\n                } else {\n                    placeNumber(board, rowState, columnState, boxState, row, column, i);\n                    if (recursivePlaceNumber(board, rowState, columnState, boxState, row, column + 1)) {\n                        return true;\n                    }\n                    undoNumberPlacement(board, rowState, columnState, boxState, row, column, i);\n                }\n            }\n        }\n        // failed to get an answer\n        return false;\n    }\n\n    private void placeNumber(char[][] board, boolean[][] rowState, boolean[][] columnState, boolean[][] boxState, int row, int column, int i) {\n        rowState[row][i] = true;\n        columnState[column][i] = true;\n        boxState[(row / 3) * 3 + column / 3][i] = true;\n        board[row][column] = (char) ('0' + i);\n    }\n\n    private void undoNumberPlacement(char[][] board, boolean[][] rowState, boolean[][] columnState, boolean[][] boxState, int row, int column, int i) {\n        rowState[row][i] = false;\n        columnState[column][i] = false;\n        boxState[(row / 3) * 3 + column / 3][i] = false;\n        board[row][column] = '.';\n    }\n}\n"
          },
          {
            language: 'Py',
            content:
              'from typing import List\n\n\nclass Solution:\n    row_state = [[False for i in range(10)] for _ in range(9)]\n    column_state = [[False for i in range(10)] for _ in range(9)]\n    box_state = [[False for i in range(10)] for _ in range(9)]\n    board = []\n\n    def solveSudoku(self, board: List[List[str]]) -> None:\n        # leetcode 判定时会重复调用函数，因此需要反复初始化状态表\n        self.row_state = [[False for i in range(10)] for _ in range(9)]\n        self.column_state = [[False for i in range(10)] for _ in range(9)]\n        self.box_state = [[False for i in range(10)] for _ in range(9)]\n        self.board = board\n        for i in range(9):\n            for j in range(9):\n                if self.board[i][j] != ".":\n                    num = int(self.board[i][j])\n                    self.row_state[i][num] = True\n                    self.column_state[j][num] = True\n                    self.box_state[(i // 3) * 3 + j // 3][num] = True\n\n        def recursive_place_number(self, row: int, column: int,) -> bool:\n            if column == 9:\n                row += 1\n                column = 0\n                if row == 9:\n                    return True\n\n            if self.board[row][column] != ".":\n                return recursive_place_number(self, row, column + 1)\n            else:\n                for i in range(1, 10):\n                    if (\n                        self.row_state[row][i]\n                        or self.column_state[column][i]\n                        or self.box_state[(row // 3) * 3 + column // 3][i]\n                    ):\n                        continue\n                    else:\n                        self.place_number(row, column, i)\n                        if recursive_place_number(self, row, column + 1,):\n                            return True\n                        self.undo_number_placement(row, column, i)\n            return False\n\n        recursive_place_number(self, 0, 0)\n\n    def place_number(self, row: int, column: int, i: int,) -> bool:\n        self.row_state[row][i] = True\n        self.column_state[column][i] = True\n        self.box_state[(row // 3) * 3 + column // 3][i] = True\n        self.board[row][column] = str(i)\n\n    def undo_number_placement(self, row: int, column: int, i: int,) -> bool:\n        self.row_state[row][i] = False\n        self.column_state[column][i] = False\n        self.box_state[(row // 3) * 3 + column // 3][i] = False\n        self.board[row][column] = "."\n\n'
          }
        ]
      },
      {
        title: '代码4.3.2',
        codes: [
          {
            language: 'Cpp',
            content:
              "class Solution {\nprivate:\n    vector<vector<bool>> row_state;\n    vector<vector<bool>> column_state;\n    vector<vector<bool>> box_state;\n\nprivate:\n    pair<int, int> getMaxPossibleCoordinate(vector<vector<char>>& board) {\n        int x = -1, y = -1, min_count = 9;\n        for (int i = 0; i < 9; i++)\n            for (int j = 0; j < 9; j++) {\n                if (board[i][j] != '.') continue;\n                int tmp_count = 9;\n                for (int k = 0; k < 9; k++) {\n                    if (row_state[i][k] || column_state[j][k] || box_state[(i / 3) * 3 + j / 3][k])\n                        tmp_count -= 1;\n                }\n                \n                if (tmp_count == 1) return make_pair(i, j);\n                if (min_count > tmp_count) {\n                    min_count = tmp_count;\n                    x = i;\n                    y = j;\n                }\n            }\n        \n        return make_pair(x, y);\n    }\n\n    void placeNumber(vector<vector<char>>& board, int row, int column, int i) {\n        board[row][column] = i + '0';\n        row_state[row][i]    = true;\n        column_state[column][i] = true;\n        box_state[((row / 3) * 3) + (column / 3)][i] = true;\n    }\n\n    void undoNumberPlace(vector<vector<char>>& board, int row, int column, int i) {\n        board[row][column] = '.';\n        row_state[row][i] = false;\n        column_state[column][i] = false;\n        box_state[((row / 3) * 3) + (column / 3)][i] = false;\n    }\n\n    void initialState(vector<vector<char>>& board) {\n        for (int i = 0; i < 9; i++)\n            for (int j = 0; j < 9; j++)\n                if (board[i][j] != '.') {\n                    row_state[i][board[i][j] - '0']     = true;\n                    column_state[j][board[i][j] - '0']  = true;\n                    box_state[(i / 3) * 3 + j / 3][board[i][j] - '0'] = true;\n                }\n    }\n\n    bool recursivePlaceNumber(vector<vector<char>>& board, int row, int column) {\n        if (row == -1 and column == -1) return true;\n        if (board[row][column] != '.') return false;\n\n        for (int i = 1; i < 10; i ++) {\n            if (row_state[row][i] ||\n                column_state[column][i] ||\n                box_state[(row / 3) * 3 + column / 3][i]) {\n                continue;\n            } else {\n                placeNumber(board, row, column, i);\n                pair<int, int> coordinate = getMaxPossibleCoordinate(board);\n                if (recursivePlaceNumber(board, coordinate.first, coordinate.second))\n                    return true;\n                undoNumberPlace(board, row, column, i);\n            }\n        }\n        \n        return false;\n    }\n\npublic:\n    void solveSudoku(vector<vector<char>>& board) {\n        row_state    = vector<vector<bool>>(9, vector<bool>(10, false));\n        column_state = vector<vector<bool>>(9, vector<bool>(10, false));\n        box_state    = vector<vector<bool>>(9, vector<bool>(10, false));\n        \n        initialState(board);\n\n        pair<int, int> coor = getMaxPossibleCoordinate(board);\n        \n        recursivePlaceNumber(board, coor.first, coor.second);\n    }\n};\n\n"
          },
          {
            language: 'Java',
            content:
              "public class SudokuSolver {\n    public void solveSudoku(char[][] board) {\n        boolean rowState[][] = new boolean[9][10];\n        boolean columnState[][] = new boolean[9][10];\n        boolean boxState[][] = new boolean[9][10];\n\n        for (int i = 0; i < 9; i++) {\n            for (int j = 0; j < 9; j++) {\n                if (board[i][j] != '.') {\n                    int index = board[i][j] - '0';\n                    rowState[i][index] = true;\n                    columnState[j][index] = true;\n                    boxState[(i / 3) * 3 + j / 3][index] = true;\n                }\n            }\n        }\n        int[] coordinate = getMaxPossibleCoordinate(board, rowState, columnState, boxState);\n\n        recursivePlaceNumber2(board, rowState, columnState, boxState, coordinate[0], coordinate[1]);\n    }\n\n    private int[] getMaxPossibleCoordinate(char[][] board, boolean[][] rowState, boolean[][] columnState, boolean[][] boxState) {\n        int x = -1, y = -1, minCount = 9;\n        for (int i = 0; i < 9; i++) {\n            for (int j = 0; j < 9; j++) {\n                if (board[i][j] != '.') {\n                    continue;\n                }\n                int tmpCount = 9;\n                for (int k = 0; k < 9; k++) {\n                    if (rowState[i][k] || columnState[j][k] || boxState[(i / 3) * 3 + j / 3][k])\n                        tmpCount--;\n                }\n                if (tmpCount == 1)\n                    return new int[]{i, j};\n\n                if (minCount > tmpCount) {\n                    minCount = tmpCount;\n                    x = i;\n                    y = j;\n                }\n            }\n        }\n        return new int[]{x, y};\n    }\n\n    private boolean recursivePlaceNumber2(char[][] board, boolean[][] rowState, boolean[][] columnState, boolean[][] boxState, int row, int column) {\n        if (row == -1 && column == -1)\n            return true;\n        if (board[row][column] != '.')\n            return false;\n\n        for (int i = 1; i < 10; i++) {\n            if (rowState[row][i] || columnState[column][i] || boxState[(row / 3) * 3 + column / 3][i]) {\n                continue;\n            } else {\n                placeNumber(board, rowState, columnState, boxState, row, column, i);\n                int[] coordinate = getMaxPossibleCoordinate(board, rowState, columnState, boxState);\n                if (recursivePlaceNumber2(board, rowState, columnState, boxState, coordinate[0], coordinate[1])) {\n                    return true;\n                }\n                undoNumberPlacement(board, rowState, columnState, boxState, row, column, i);\n            }\n        }\n        // failed to get an answer\n        return false;\n    }\n\n    private void placeNumber(char[][] board, boolean[][] rowState, boolean[][] columnState, boolean[][] boxState, int row, int column, int i) {\n        rowState[row][i] = true;\n        columnState[column][i] = true;\n        boxState[(row / 3) * 3 + column / 3][i] = true;\n        board[row][column] = (char) ('0' + i);\n    }\n\n    private void undoNumberPlacement(char[][] board, boolean[][] rowState, boolean[][] columnState, boolean[][] boxState, int row, int column, int i) {\n        rowState[row][i] = false;\n        columnState[column][i] = false;\n        boxState[(row / 3) * 3 + column / 3][i] = false;\n        board[row][column] = '.';\n    }\n}\n"
          },
          {
            language: 'Py',
            content:
              'from typing import List\n\n\nclass Solution:\n    row_state = [[False for i in range(10)] for _ in range(9)]\n    column_state = [[False for i in range(10)] for _ in range(9)]\n    box_state = [[False for i in range(10)] for _ in range(9)]\n    board = []\n\n    def solveSudoku(self, board: List[List[str]]) -> None:\n\n        self.row_state = [[False for i in range(10)] for _ in range(9)]\n        self.column_state = [[False for i in range(10)] for _ in range(9)]\n        self.box_state = [[False for i in range(10)] for _ in range(9)]\n        self.board = board\n        for i in range(9):\n            for j in range(9):\n                if self.board[i][j] != ".":\n                    num = int(self.board[i][j])\n                    self.row_state[i][num] = True\n                    self.column_state[j][num] = True\n                    self.box_state[(i // 3) * 3 + j // 3][num] = True\n\n        def recursive_place_number(self, row: int, column: int,) -> bool:\n            if row == -1 and column == -1:\n                return True\n            if board[row][column] != ".":\n                return False\n\n            for i in range(1, 10):\n                if (\n                    self.row_state[row][i]\n                    or self.column_state[column][i]\n                    or self.box_state[(row // 3) * 3 + column // 3][i]\n                ):\n                    continue\n                else:\n                    self.place_number(row, column, i)\n                    x, y = self.get_max_possible_coordinate()\n                    if recursive_place_number(self, x, y,):\n                        return True\n                    self.undo_number_placement(row, column, i)\n            return False\n\n        x, y = self.get_max_possible_coordinate()\n        recursive_place_number(self, x, y)\n\n    def place_number(self, row: int, column: int, i: int,) -> bool:\n        self.row_state[row][i] = True\n        self.column_state[column][i] = True\n        self.box_state[(row // 3) * 3 + column // 3][i] = True\n        self.board[row][column] = str(i)\n\n    def undo_number_placement(self, row: int, column: int, i: int,) -> bool:\n        self.row_state[row][i] = False\n        self.column_state[column][i] = False\n        self.box_state[(row // 3) * 3 + column // 3][i] = False\n        self.board[row][column] = "."\n\n    def get_max_possible_coordinate(self) -> (int, int):\n        x, y, min_count = -1, -1, 9\n        for i in range(9):\n            for j in range(9):\n                if self.board[i][j] != ".":\n                    continue\n                tmp_count = 9\n                for k in range(9):\n                    if (\n                        self.row_state[i][k]\n                        or self.column_state[j][k]\n                        or self.box_state[(i // 3) * 3 + j // 3][k]\n                    ):\n                        tmp_count -= 1\n                if tmp_count == 1:\n                    return i, j\n                if min_count > tmp_count:\n                    min_count = tmp_count\n                    x = i\n                    y = j\n        return x, y\n\n'
          }
        ]
      },
      {
        title: '代码4.4.1',
        codes: [
          {
            language: 'Cpp',
            content:
              'class Solution {\nprivate:\n    int get_neighbor_count(int i, int j, vector<vector<int>>& board) {\n        int top = std::max(0, i - 1);\n        int bottom = std::min<int>(board.size() - 1, i + 1);\n        int left = std::max(0, j - 1);\n        int right = std::min<int>(board[0].size() - 1, j + 1);\n        \n        int count = 0;\n        for (int x = top; x < bottom + 1; x++)\n            for (int y = left; y < right + 1; y++)\n                if (board[x][y] == 1 || board[x][y] == -1)\n                    count += 1;\n        \n        return count;\n    }\npublic:\n    void gameOfLife(vector<vector<int>>& board) {\n        for (int i = 0; i < board.size(); i++) {\n            for (int j = 0; j < board[0].size(); j++) {\n                int res = get_neighbor_count(i, j, board);\n                if (board[i][j] == 1 && (res == 3 || res == 4))\n                    board[i][j] = 1;\n                else if (board[i][j] == 1)\n                    board[i][j] = -1;\n                else if (board[i][j] == 0 && res == 3)\n                    board[i][j] = -2;\n            }\n        }\n        \n        for (int i = 0; i < board.size(); i++) {\n            for (int j = 0; j < board[0].size(); j++) {\n                if (board[i][j] == -2)\n                    board[i][j] = 1;\n                else if (board[i][j] == -1)\n                    board[i][j] = 0;\n            }\n        }\n    }\n};\n\n'
          },
          {
            language: 'Java',
            content:
              'public class GameOfLife {\n    public void gameOfLife(int[][] board) {\n        // do in place life check\n        for (int i = 0; i < board.length; i++) {\n            for (int j = 0; j < board[i].length; j++) {\n                board[i][j] = checkLifeInPlace(board, board[i][j], i, j);\n            }\n        }\n        // translate\n        for (int i = 0; i < board.length; i++) {\n            for (int j = 0; j < board[i].length; j++) {\n                if (board[i][j] == 2)\n                    board[i][j] = 1;\n                else if (board[i][j] == -1)\n                    board[i][j] = 0;\n            }\n        }\n    }\n\n    private int checkLifeInPlace(int[][] board, int preState, int i, int j) {\n        int neighborCount = getNeighborCountForInPlace(board, preState, i, j);\n        if (neighborCount < 2 || neighborCount > 3)\n            return preState == 0 ? 0 : -1;\n        else if (neighborCount == 3)\n            return preState == 1 ? 1 : 2;\n        else\n            return preState;\n    }\n\n    //      -1 as for 1 to 0;\n    //      2 as for 0 to 1;\n    private int getNeighborCountForInPlace(int[][] board, int preState, int i, int j) {\n        int count = 0;\n        int maxRow = board.length - 1, maxColumn = board[0].length - 1;\n\n        if (i != 0) {\n            count += board[i - 1][j] == 1 || board[i - 1][j] == -1 ? 1 : 0;\n            if (j != 0) {\n                count += board[i - 1][j - 1] == 1 || board[i - 1][j - 1] == -1 ? 1 : 0;\n            }\n            if (j != maxColumn) {\n                count += board[i - 1][j + 1] == 1 || board[i - 1][j + 1] == -1 ? 1 : 0;\n            }\n\n        }\n\n        if (i != maxRow) {\n            count += board[i + 1][j] == 1 || board[i + 1][j] == -1 ? 1 : 0;\n            if (j != 0) {\n                count += board[i + 1][j - 1] == 1 || board[i + 1][j - 1] == -1 ? 1 : 0;\n            }\n            if (j != maxColumn) {\n                count += board[i + 1][j + 1] == 1 || board[i + 1][j + 1] == -1 ? 1 : 0;\n            }\n        }\n\n        if (j != 0) {\n            count += board[i][j - 1] == 1 || board[i][j - 1] == -1 ? 1 : 0;\n        }\n        if (j != maxColumn) {\n            count += board[i][j + 1] == 1 || board[i][j + 1] == -1 ? 1 : 0;\n        }\n        return count;\n    }\n}\n'
          },
          {
            language: 'Py',
            content:
              'from typing import List\n\n\nclass Solution:\n    def gameOfLife(self, board: List[List[int]]) -> None:\n        def get_neighbor_count(i, j, board):\n            top = max(0, i - 1)\n            bottom = min(len(board) - 1, i + 1)\n            left = max(0, j - 1)\n            right = min(len(board[0]) - 1, j + 1)\n\n            count = 0\n            for x in range(top, bottom + 1):\n                for y in range(left, right + 1):\n                    if board[x][y] == 1 or board[x][y] == -1:\n                        count += 1\n            return count\n\n        for i in range(len(board)):\n            for j in range(len(board[0])):\n                res = get_neighbor_count(i, j, board)\n                if board[i][j] == 1 and res in [3, 4]:\n                    board[i][j] = 1\n                elif board[i][j] == 1:\n                    board[i][j] = -1\n                elif board[i][j] == 0 and res == 3:\n                    board[i][j] = -2\n\n        for i in range(len(board)):\n            for j in range(len(board[0])):\n                if board[i][j] == -2:\n                    board[i][j] = 1\n                elif board[i][j] == -1:\n                    board[i][j] = 0\n\n'
          }
        ]
      }
    ]
  },
  {
    id: '05',
    name: '第五章',
    list: [
      {
        title: '代码5.1.1',
        codes: [
          {
            language: 'Cpp',
            content:
              '/**\n * Definition for a binary tree node.\n * struct TreeNode {\n *     int val;\n *     TreeNode *left;\n *     TreeNode *right;\n *     TreeNode(int x) : val(x), left(NULL), right(NULL) {}\n * };\n */\nclass Solution {\npublic:\n    bool hasPathSum(TreeNode* root, int sum) {\n        if(root == NULL) return false;\n\n        if(root->left == NULL && root->right == NULL) {\n            if(root->val == sum) return true;\n        \n            return false;\n        }\n\n        return hasPathSum(root->left, sum - root->val) || hasPathSum(root->right, sum - root.val);\n    }\n\n};\n'
          },
          {
            language: 'Java',
            content:
              'public class TreeNode {\n  int val;\n  TreeNode left;\n  TreeNode right;\n\n  TreeNode(int x) {\n    val = x;\n  }\n}\n\nclass Solution {\n  public boolean hasPathSum(TreeNode root, int sum) {\n    if (root == null) return false;\n\n    sum -= root.val;\n\n    if ((root.left == null) && (root.right == null)) return (sum == 0);\n\n    return hasPathSum(root.left, sum) || hasPathSum(root.right, sum);\n  }\n}\n'
          },
          {
            language: 'Py',
            content:
              'class TreeNode:\n    def __init__(self, x):\n        self.val = x\n        self.left = None\n        self.right = None\n\n\nclass Solution:\n    def hasPathSum(self, root: TreeNode, sum: int) -> bool:\n        if not root:\n            return False\n\n        if root.left is None and root.right is None:\n            if root.val == sum:\n                return True\n            return False\n\n        return self.hasPathSum(root.left, sum - root.val) or self.hasPathSum(\n            root.right, sum - root.val\n        )\n\n'
          }
        ]
      },
      {
        title: '代码5.1.2',
        codes: [
          {
            language: 'Java',
            content:
              'public class TreeNode {\n  int val;\n  TreeNode left;\n  TreeNode right;\n\n  TreeNode(int x) {\n    val = x;\n  }\n}\n\nclass Solution {\n  public boolean hasPathSum(TreeNode root, int sum) {\n    if (root == null) return false;\n\n    Deque<Pair<TreeNode, Integer>> stack = new ArrayDeque<Pair<TreeNode, Integer>>();\n    stack.addLast(new Pair<TreeNode, Integer>(root, sum - root.val));\n\n    while (!stack.isEmpty()) {\n      Pair<TreeNode, Integer> top = stack.removeLast();\n      TreeNode node = top.getKey();\n      int remain = top.getValue();\n\n      if ((node.right == null) && (node.left == null) && (remain == 0)) return true;\n      if (node.right != null) {\n        stack.addLast(new Pair<TreeNode, Integer>(node.right, remain - node.right.val));\n      }\n      if (node.left != null) {\n        stack.addLast(new Pair<TreeNode, Integer>(node.left, remain - node.left.val));\n      }\n    }\n\n    return false;\n  }\n}\n'
          },
          {
            language: 'Py',
            content:
              'class TreeNode:\n    def __init__(self, x):\n        self.val = x\n        self.left = None\n        self.right = None\n\n\nclass Solution:\n    def hasPathSum(self, root: TreeNode, sum: int) -> bool:\n        if root is None:\n            return False\n\n        stack = [(root, sum - root.val)]\n        while stack:\n            node, remain = stack.pop()\n            if not node.left and not node.right and remain == 0:\n                return True\n            if node.right:\n                stack.append((node.right, remain - node.right.val))\n            if node.left:\n                stack.append((node.left, remain - node.left.val))\n        return False\n\n'
          }
        ]
      },
      {
        title: '代码5.1.3',
        codes: [
          {
            language: 'Java',
            content:
              'class TreeNode {\n    int val;\n    TreeNode left;\n    TreeNode right;\n\n    TreeNode(int x) {\n        val = x;\n    }\n}\n\npublic class Solution {\n    public List<List<Integer>> pathSum(TreeNode root, int sum) {\n        List<List<Integer>> res = new ArrayList<>();\n\n        if(root == null) return res;\n\n        Deque<Integer> path = new ArrayDeque<>();\n        pathSum(root, sum, path, res);\n\n        return res;\n    }\n\n    public void pathSum(TreeNode node, int sum, Deque<Integer> path, List<List<Integer>> res) {\n        if (node == null)  return;\n\n        // 沿途结点必须选择，这个时候要做两件事：1、sum 减去这个结点的值；2、添加到 path 里\n        sum -= node.val;\n        path.addLast(node.val);\n\n        if (sum == 0 && node.left == null && node.right == null) {\n            // path 全局只有一份，必须做拷贝\n            res.add(new ArrayList<>(path));\n            // 注意：这里 return 之前必须重置\n            path.removeLast();\n            return;\n        }\n\n        pathSum(node.left, sum, path, res);\n        pathSum(node.right, sum, path, res);\n        // 递归完成以后，必须重置变量\n        path.removeLast();      \n    }\n}\n'
          },
          {
            language: 'Py',
            content:
              'from typing import List\n\n\nclass TreeNode:\n    def __init__(self, x):\n        self.val = x\n        self.left = None\n        self.right = None\n\n\nclass Solution:\n    def pathSum(self, root: TreeNode, sum: int) -> List[List[int]]:\n        def helper(root: TreeNode, sum: int, path: List):\n            if not root:\n                return\n            if not root.left and not root.right and sum - root.val == 0:\n                path += [root.val]\n                ans.append(path)\n            helper(root.left, sum - root.val, path + [root.val])\n            helper(root.right, sum - root.val, path + [root.val])\n\n        ans = []\n        helper(root, sum, [])\n        return ans\n\n'
          }
        ]
      },
      {
        title: '代码5.1.4',
        codes: [
          {
            language: 'Java',
            content:
              'class TreeNode {\n    int val;\n    TreeNode left;\n    TreeNode right;\n\n    TreeNode(int x) {\n        val = x;\n    }\n}\n\npublic class Solution {\n    public List<List<Integer>> pathSum(TreeNode root, int sum) {\n        List<List<Integer>> res = new ArrayList<>();\n\n        if(root == null) return res;\n\n        Deque<Integer> path = new ArrayDeque<>();\n        Deque<Pair<TreeNode, Integer>> stack = new ArrayDeque<>();\n\n        stack.addLast(new Pair<TreeNode, Integer>(root, root.val));\n        path.addLast(root.val)\n\n        while (!stack.isEmpty()) {\n            Pair<TreeNode, Integer> top = stack.removeLast();\n            TreeNode node = top.getKey();\n            int total = top.getValue();\n\n            if ((node.right == null) && (node.left == null) && (total == sum)) {\n                res.add(new ArrayList<>(path));\n            }\n            if (node.right != null) {\n                stack.addLast(new Pair<TreeNode, Integer>(node.right, total + node.right.val));\n                path.addLast(node.right.val);\n            }\n            if (node.left != null) {\n                stack.addLast(new Pair<TreeNode, Integer>(node.left, total + node.left.val));\n                path.addLast(node.left.val);\n            }\n        }\n\n        return res;\n    }\n}\n'
          },
          {
            language: 'Py',
            content:
              'from typing import List\n\n\nclass TreeNode:\n    def __init__(self, x):\n        self.val = x\n        self.left = None\n        self.right = None\n\n\nclass Solution:\n    def pathSum(self, root: TreeNode, sum: int) -> List[List[int]]:\n        if not root:\n            return []\n        stack = [(root, [root.val], root.val)]\n        ans = []\n        while stack:\n            node, path, total = stack.pop()\n            if not node.right and not node.left and total == sum:\n                ans.append(path)\n            if node.right:\n                stack.append((node.right, path + [node.right.val], total + node.right.val))\n            if node.left:\n                stack.append((node.left, path + [node.left.val], total + node.left.val))\n        return ans\n\n'
          }
        ]
      },
      {
        title: '代码5.1.5',
        codes: [
          {
            language: 'Cpp',
            content:
              'class Solution {\nprivate:\n    int maxSum = INT_MIN;\n\npublic:\n    int helper(TreeNode* node) {\n        if (node == nullptr) {\n            return 0;\n        }\n        \n        // 递归计算左右子节点的最大贡献值\n        // 只有在最大贡献值大于 0 时，才会选取对应子节点\n        int leftGain = max(helper(node->left), 0);\n        int rightGain = max(helper(node->right), 0);\n\n        // 节点的最大路径和取决于该节点的值与该节点的左右子节点的最大贡献值\n        int priceNewpath = node->val + leftGain + rightGain;\n\n        // 更新答案\n        maxSum = max(maxSum, priceNewpath);\n\n        // 返回节点的最大贡献值\n        return node->val + max(leftGain, rightGain);\n    }\n\n    int maxPathSum(TreeNode* root) {\n        helper(root);\n        return maxSum;\n    }\n};\n'
          },
          {
            language: 'Java',
            content:
              'class Solution {\n    int maxSum = Integer.MIN_VALUE;\n\n    public int maxPathSum(TreeNode root) {\n        helper(root);\n        return maxSum;\n    }\n\n    public int helper(TreeNode node) {\n        if (node == null) {\n            return 0;\n        }\n        \n        // 递归计算左右子节点的最大贡献值\n        // 只有在最大贡献值大于 0 时，才会选取对应子节点\n        int leftGain = Math.max(helper(node.left), 0);\n        int rightGain = Math.max(helper(node.right), 0);\n\n        // 节点的最大路径和取决于该节点的值与该节点的左右子节点的最大贡献值\n        int priceNewpath = node.val + leftGain + rightGain;\n\n        // 更新答案\n        maxSum = Math.max(maxSum, priceNewpath);\n\n        // 返回节点的最大贡献值\n        return node.val + Math.max(leftGain, rightGain);\n    }\n}\n'
          },
          {
            language: 'Py',
            content:
              'from typing import List\n\n\nclass TreeNode:\n    def __init__(self, x):\n        self.val = x\n        self.left = None\n        self.right = None\n\n\nclass Solution:\n    def maxPathSum(self, root: TreeNode) -> int:\n        self.maxSum = float("-inf")\n\n        def helper(root: TreeNode):\n            if not root:\n                return 0\n\n            maxLeft = max(helper(root.left), 0)\n            maxRight = max(helper(root.right), 0)\n            self.maxSum = max(self.maxSum, maxLeft + maxRight + root.val)\n\n            return root.val + max(maxLeft, maxRight)\n\n        helper(root)\n        return self.maxSum\n\n'
          }
        ]
      },
      {
        title: '代码5.2.1',
        codes: [
          {
            language: 'Cpp',
            content:
              "class Solution {\nprivate:\n    void dfs(vector<vector<char>>& grid, int r, int c) {\n        int nr = grid.size();\n        int nc = grid[0].size();\n\n        grid[r][c] = '0';\n        if (r - 1 >= 0 && grid[r-1][c] == '1') dfs(grid, r - 1, c);\n        if (r + 1 < nr && grid[r+1][c] == '1') dfs(grid, r + 1, c);\n        if (c - 1 >= 0 && grid[r][c-1] == '1') dfs(grid, r, c - 1);\n        if (c + 1 < nc && grid[r][c+1] == '1') dfs(grid, r, c + 1);\n    }\n\npublic:\n    int numIslands(vector<vector<char>>& grid) {\n        int nr = grid.size();\n        if (!nr) return 0;\n        int nc = grid[0].size();\n\n        int num_islands = 0;\n        for (int r = 0; r < nr; ++r) {\n            for (int c = 0; c < nc; ++c) {\n                if (grid[r][c] == '1') {\n                    ++num_islands;\n                    dfs(grid, r, c);\n                }\n            }\n        }\n\n        return num_islands;\n    }\n};\n"
          },
          {
            language: 'Java',
            content:
              "class Solution {\n    void dfs(char[][] grid, int r, int c) {\n        int nr = grid.length;\n        int nc = grid[0].length;\n\n        if (r < 0 || c < 0 || r >= nr || c >= nc || grid[r][c] == '0') {\n            return;\n        }\n\n        grid[r][c] = '0';\n        dfs(grid, r - 1, c);\n        dfs(grid, r + 1, c);\n        dfs(grid, r, c - 1);\n        dfs(grid, r, c + 1);\n    }\n\n    public int numIslands(char[][] grid) {\n        if (grid == null || grid.length == 0) {\n            return 0;\n        }\n\n        int nr = grid.length;\n        int nc = grid[0].length;\n        int num_islands = 0;\n        for (int r = 0; r < nr; ++r) {\n            for (int c = 0; c < nc; ++c) {\n                if (grid[r][c] == '1') {\n                    ++num_islands;\n                    dfs(grid, r, c);\n                }\n            }\n        }\n\n        return num_islands;\n    }\n}\n"
          },
          {
            language: 'Py',
            content:
              'from typing import List\n\n\nclass Solution:\n    def numIslands(self, grid: List[List[str]]) -> int:\n        if not grid or not grid[0]:\n            return 0\n\n        m = len(grid)\n        n = len(grid[0])\n        ans = 0\n\n        def dfs(r, c):\n            grid[r][c] = "0"\n\n            if r - 1 >= 0 and grid[r - 1][c] == "1":\n                dfs(r - 1, c)\n            if r + 1 < m and grid[r + 1][c] == "1":\n                dfs(r + 1, c)\n            if c - 1 >= 0 and grid[r][c - 1] == "1":\n                dfs(r, c - 1)\n            if c + 1 < n and grid[r][c + 1] == "1":\n                dfs(r, c + 1)\n\n        for i in range(m):\n            for j in range(n):\n                if grid[i][j] == "1":\n                    ans += 1\n                    dfs(i, j)\n\n        return ans\n\n'
          }
        ]
      },
      {
        title: '代码5.2.2',
        codes: [
          {
            language: 'Py',
            content:
              'from typing import List\n\n\nclass Solution:\n    def numIslands(self, grid: List[List[str]]) -> int:\n        if not grid or not grid[0]:\n            return 0\n\n        m = len(grid)\n        n = len(grid[0])\n        ans = 0\n\n        def dfs(row, col):\n            grid[row][col] = "0"\n            stack = [[row, col]]\n            while stack:\n                r, c = stack[-1]\n                if r - 1 >= 0 and grid[r - 1][c] == "1":\n                    stack.append([r - 1, c])\n                    grid[r - 1][c] = "0"\n                    continue\n                if r + 1 < m and grid[r + 1][c] == "1":\n                    stack.append([r + 1, c])\n                    grid[r + 1][c] = "0"\n                    continue\n                if c - 1 >= 0 and grid[r][c - 1] == "1":\n                    stack.append([r, c - 1])\n                    grid[r][c - 1] = "0"\n                    continue\n                if c + 1 < n and grid[r][c + 1] == "1":\n                    stack.append([r, c + 1])\n                    grid[r][c + 1] = "0"\n                    continue\n                stack.pop()\n\n        for i in range(m):\n            for j in range(n):\n                if grid[i][j] == "1":\n                    ans += 1\n                    dfs(i, j)\n\n        return ans\n\n'
          }
        ]
      },
      {
        title: '代码5.2.3',
        codes: [
          {
            language: 'Cpp',
            content:
              "class Solution {\npublic:\n    int numIslands(vector<vector<char>>& grid) {\n        int nr = grid.size();\n        if (!nr) return 0;\n        int nc = grid[0].size();\n\n        int num_islands = 0;\n        for (int r = 0; r < nr; ++r) {\n            for (int c = 0; c < nc; ++c) {\n                if (grid[r][c] == '1') {\n                    ++num_islands;\n                    grid[r][c] = '0';\n                    queue<pair<int, int>> neighbors;\n                    neighbors.push({r, c});\n                    while (!neighbors.empty()) {\n                        auto rc = neighbors.front();\n                        neighbors.pop();\n                        int row = rc.first, col = rc.second;\n                        if (row - 1 >= 0 && grid[row-1][col] == '1') {\n                            neighbors.push({row-1, col});\n                            grid[row-1][col] = '0';\n                        }\n                        if (row + 1 < nr && grid[row+1][col] == '1') {\n                            neighbors.push({row+1, col});\n                            grid[row+1][col] = '0';\n                        }\n                        if (col - 1 >= 0 && grid[row][col-1] == '1') {\n                            neighbors.push({row, col-1});\n                            grid[row][col-1] = '0';\n                        }\n                        if (col + 1 < nc && grid[row][col+1] == '1') {\n                            neighbors.push({row, col+1});\n                            grid[row][col+1] = '0';\n                        }\n                    }\n                }\n            }\n        }\n\n        return num_islands;\n    }\n};\n"
          },
          {
            language: 'Java',
            content:
              "class Solution {\n    public int numIslands(char[][] grid) {\n        if (grid == null || grid.length == 0) {\n            return 0;\n        }\n\n        int nr = grid.length;\n        int nc = grid[0].length;\n        int num_islands = 0;\n\n        for (int r = 0; r < nr; ++r) {\n            for (int c = 0; c < nc; ++c) {\n                if (grid[r][c] == '1') {\n                    ++num_islands;\n                    grid[r][c] = '0';\n                    Queue<Integer> neighbors = new LinkedList<>();\n                    neighbors.add(r * nc + c);\n                    while (!neighbors.isEmpty()) {\n                        int id = neighbors.remove();\n                        int row = id / nc;\n                        int col = id % nc;\n                        if (row - 1 >= 0 && grid[row-1][col] == '1') {\n                            neighbors.add((row-1) * nc + col);\n                            grid[row-1][col] = '0';\n                        }\n                        if (row + 1 < nr && grid[row+1][col] == '1') {\n                            neighbors.add((row+1) * nc + col);\n                            grid[row+1][col] = '0';\n                        }\n                        if (col - 1 >= 0 && grid[row][col-1] == '1') {\n                            neighbors.add(row * nc + col-1);\n                            grid[row][col-1] = '0';\n                        }\n                        if (col + 1 < nc && grid[row][col+1] == '1') {\n                            neighbors.add(row * nc + col+1);\n                            grid[row][col+1] = '0';\n                        }\n                    }\n                }\n            }\n        }\n\n        return num_islands;\n    }\n}\n"
          },
          {
            language: 'Py',
            content:
              'from typing import List\n\n\nclass Solution:\n    def numIslands(self, grid: List[List[str]]) -> int:\n        from collections import deque\n\n        if not grid or not grid[0]:\n            return 0\n\n        m = len(grid)\n        n = len(grid[0])\n        ans = 0\n        queue = deque()\n\n        for i in range(m):\n            for j in range(n):\n                if grid[i][j] == "1":\n                    ans += 1\n                    grid[i][j] = "0"\n                    queue.append((i, j))\n                    while len(queue) > 0:\n                        top = queue.popleft()\n                        r = top[0]\n                        c = top[1]\n                        if r - 1 >= 0 and grid[r - 1][c] == "1":\n                            grid[r - 1][c] = "0"\n                            queue.append((r - 1, c))\n                        if r + 1 < m and grid[r + 1][c] == "1":\n                            grid[r + 1][c] = "0"\n                            queue.append((r + 1, c))\n                        if c - 1 >= 0 and grid[r][c - 1] == "1":\n                            grid[r][c - 1] = "0"\n                            queue.append((r, c - 1))\n                        if c + 1 < n and grid[r][c + 1] == "1":\n                            grid[r][c + 1] = "0"\n                            queue.append((r, c + 1))\n\n        return ans\n\n'
          }
        ]
      },
      {
        title: '代码5.2.4',
        codes: [
          {
            language: 'Cpp',
            content:
              "class UnionFind {\npublic:\n    UnionFind(vector<vector<char>>& grid) {\n        count = 0;\n        int m = grid.size();\n        int n = grid[0].size();\n        for (int i = 0; i < m; ++i) {\n            for (int j = 0; j < n; ++j) {\n                if (grid[i][j] == '1') {\n                    parent.push_back(i * n + j);\n                    ++count;\n                }\n                else {\n                    parent.push_back(-1);\n                }\n                rank.push_back(0);\n            }\n        }\n    }\n\n    int find(int i) {\n        if (parent[i] != i) {\n            parent[i] = find(parent[i]);\n        }\n        return parent[i];\n    }\n\n    void union(int x, int y) {\n        int rootx = find(x);\n        int rooty = find(y);\n        if (rootx != rooty) {\n            if (rank[rootx] < rank[rooty]) {\n                swap(rootx, rooty);\n            }\n            parent[rooty] = rootx;\n            if (rank[rootx] == rank[rooty]) rank[rootx] += 1;\n            --count;\n        }\n    }\n\n    int getCount() const {\n        return count;\n    }\n\nprivate:\n    vector<int> parent;\n    vector<int> rank;\n    int count;\n};\n\nclass Solution {\npublic:\n    int numIslands(vector<vector<char>>& grid) {\n        int nr = grid.size();\n        if (!nr) return 0;\n        int nc = grid[0].size();\n\n        UnionFind uf(grid);\n        int num_islands = 0;\n        for (int r = 0; r < nr; ++r) {\n            for (int c = 0; c < nc; ++c) {\n                if (grid[r][c] == '1') {\n                    grid[r][c] = '0';\n                    if (r - 1 >= 0 && grid[r-1][c] == '1') uf.union(r * nc + c, (r-1) * nc + c);\n                    if (r + 1 < nr && grid[r+1][c] == '1') uf.union(r * nc + c, (r+1) * nc + c);\n                    if (c - 1 >= 0 && grid[r][c-1] == '1') uf.union(r * nc + c, r * nc + c - 1);\n                    if (c + 1 < nc && grid[r][c+1] == '1') uf.union(r * nc + c, r * nc + c + 1);\n                }\n            }\n        }\n\n        return uf.getCount();\n    }\n};\n"
          },
          {
            language: 'Java',
            content:
              "class Solution {\n    class UnionFind {\n        int count;\n        int[] parent;\n        int[] rank;\n\n        public UnionFind(char[][] grid) {\n            count = 0;\n            int m = grid.length;\n            int n = grid[0].length;\n            parent = new int[m * n];\n            rank = new int[m * n];\n            for (int i = 0; i < m; ++i) {\n                for (int j = 0; j < n; ++j) {\n                    if (grid[i][j] == '1') {\n                        parent[i * n + j] = i * n + j;\n                        ++count;\n                    }\n                    rank[i * n + j] = 0;\n                }\n            }\n        }\n\n        public int find(int i) {\n            if (parent[i] != i) parent[i] = find(parent[i]);\n            return parent[i];\n        }\n\n        public void union(int x, int y) {\n            int rootx = find(x);\n            int rooty = find(y);\n            if (rootx != rooty) {\n                if (rank[rootx] > rank[rooty]) {\n                    parent[rooty] = rootx;\n                } else if (rank[rootx] < rank[rooty]) {\n                    parent[rootx] = rooty;\n                } else {\n                    parent[rooty] = rootx;\n                    rank[rootx] += 1;\n                }\n                --count;\n            }\n        }\n\n        public int getCount() {\n            return count;\n        }\n    }\n\n    public int numIslands(char[][] grid) {\n        if (grid == null || grid.length == 0) {\n            return 0;\n        }\n\n        int nr = grid.length;\n        int nc = grid[0].length;\n        int num_islands = 0;\n        UnionFind uf = new UnionFind(grid);\n        for (int r = 0; r < nr; ++r) {\n            for (int c = 0; c < nc; ++c) {\n                if (grid[r][c] == '1') {\n                    grid[r][c] = '0';\n                    if (r - 1 >= 0 && grid[r-1][c] == '1') {\n                        uf.union(r * nc + c, (r-1) * nc + c);\n                    }\n                    if (r + 1 < nr && grid[r+1][c] == '1') {\n                        uf.union(r * nc + c, (r+1) * nc + c);\n                    }\n                    if (c - 1 >= 0 && grid[r][c-1] == '1') {\n                        uf.union(r * nc + c, r * nc + c - 1);\n                    }\n                    if (c + 1 < nc && grid[r][c+1] == '1') {\n                        uf.union(r * nc + c, r * nc + c + 1);\n                    }\n                }\n            }\n        }\n\n        return uf.getCount();\n    }\n}\n"
          },
          {
            language: 'Py',
            content:
              'from typing import List\n\n\nclass Solution:\n    class UnionFind:\n        def __init__(self, grid):\n            self.count = 0\n            m = len(grid)\n            n = len(grid[0])\n            self.parent = [0 for _ in range(m * n)]\n            self.rank = [0 for _ in range(m * n)]\n            for i in range(m): # 这里我们进行初始化的工作\n                for j in range(n):\n                    if grid[i][j] == "1":\n                        self.parent[i * n + j] = i * n + j\n                        self.count += 1\n\n        def find(self, i):\n            if self.parent[i] != i:\n                self.parent[i] = self.find(self.parent[i])\n            return self.parent[i]\n\n        def union(self, x, y):\n            rootx = self.find(x)\n            rooty = self.find(y)\n            if rootx != rooty:\n                if self.rank[rootx] > self.rank[rooty]:\n                    self.parent[rooty] = rootx\n                elif self.rank[rootx] < self.rank[rooty]:\n                    self.parent[rootx] = rooty\n                else:\n                    self.parent[rooty] = rootx\n                    self.rank[rootx] += 1\n\n                self.count -= 1\n\n        def getCount(self):\n            return self.count\n\n    def numIslands(self, grid: List[List[str]]) -> int:\n        if not grid or not grid[0]:\n            return 0\n\n        # ans = 0\n        nr = len(grid)\n        nc = len(grid[0])\n        uf = self.UnionFind(grid)\n\n        for i in range(nr):\n            for j in range(nc):\n                if grid[i][j] == "1":\n                    grid[i][j] = "0"\n                    if i - 1 >= 0 and grid[i - 1][j] == "1":\n                        uf.union(i * nc + j, (i - 1) * nc + j)\n                    if i + 1 < nr and grid[i + 1][j] == "1":\n                        uf.union(i * nc + j, (i + 1) * nc + j)\n                    if j - 1 >= 0 and grid[i][j - 1] == "1":\n                        uf.union(i * nc + j, i * nc + j - 1)\n                    if j + 1 < nc and grid[i][j + 1] == "1":\n                        uf.union(i * nc + j, i * nc + j + 1)\n        return uf.getCount()\n\n'
          }
        ]
      },
      {
        title: '代码5.2.5',
        codes: [
          {
            language: 'Py',
            content:
              'class Solution:\n    class UnionFind:\n        def __init__(self, grid):\n            self.count = 0\n            m = len(grid)\n            n = len(grid[0])\n            self.parent = [0 for _ in range(m * n)]\n            self.rank = [0 for _ in range(m * n)]\n            for i in range(m):\n                for j in range(n):\n                    if grid[i][j] == "1":\n                        self.parent[i * n + j] = i * n + j\n                        self.count += 1\n\n        def find(self, i):\n            if self.parent[i] != i:\n                self.parent[i] = self.find(self.parent[i])\n            return self.parent[i]\n\n        def union(self, x, y):\n            rootx = self.find(x)\n            rooty = self.find(y)\n            if rootx != rooty:\n                if self.rank[rootx] > self.rank[rooty]:\n                    self.parent[rooty] = rootx\n                elif self.rank[rootx] < self.rank[rooty]:\n                    self.parent[rootx] = rooty\n                else:\n                    self.parent[rooty] = rootx\n                    self.rank[rootx] += 1\n\n                self.count -= 1\n\n        def getCount(self):\n            return self.count\n\n        def setCount(self, count):\n            self.count = count\n\n        def setParent(self, i, val):\n            self.parent[i] = val\n\n    def numIslands(self, m, n, positions):\n        if m <= 0 or n <= 0:\n            return []\n\n        ans = []\n        grid = [[0 for _ in range(n)] for _ in range(m)]\n\n        uf = self.UnionFind(grid)\n\n        for i in range(len(positions)):\n            position = positions[i]\n            uf.setCount(uf.getCount() + 1)\n            uf.setParent(position[0] * n + position[1], position[0] * n + position[1])\n            grid[position[0]][position[1]] = "1"\n            if position[0] - 1 >= 0 and grid[position[0] - 1][position[1]] == "1":\n                uf.union(\n                    position[0] * n + position[1], (position[0] - 1) * n + position[1]\n                )\n            if position[0] + 1 < m and grid[position[0] + 1][position[1]] == "1":\n                uf.union(\n                    position[0] * n + position[1], (position[0] + 1) * n + position[1]\n                )\n            if position[1] - 1 >= 0 and grid[position[0]][position[1] - 1] == "1":\n                uf.union(\n                    position[0] * n + position[1], position[0] * n + position[1] - 1\n                )\n            if position[1] + 1 < n and grid[position[0]][position[1] + 1] == "1":\n                uf.union(\n                    position[0] * n + position[1], position[0] * n + position[1] + 1\n                )\n            ans.append(uf.getCount())\n\n        return ans\n\n'
          }
        ]
      }
    ]
  },
  {
    id: '06',
    name: '第六章',
    list: [
      {
        title: '代码6.1.1',
        codes: [
          {
            language: 'Cpp',
            content:
              'class Solution {\r\npublic:\r\n    int search(vector<int>& nums, int target) {\r\n        int n = nums.size();\r\n        int l = 0, h = n - 1;\r\n        while (l <= h) {\r\n            int mid = l + (h - l) / 2;\r\n            if (nums[mid] == target) {\r\n                return mid;\r\n            } else if (nums[mid] < target) {\r\n                l = mid + 1;\r\n            } else {\r\n                h = mid - 1;\r\n            }\r\n        }\r\n        return -1;\r\n    }\r\n};\n'
          },
          {
            language: 'Java',
            content:
              'class Solution {\r\n    public int search(int[] nums, int target) {\r\n        int n = nums.length;\r\n        int l = 0, h = n - 1;\r\n        while (l <= h) {\r\n            int mid = l + (h - l) / 2;\r\n            if (nums[mid] == target) {\r\n                return mid;\r\n            } else if (nums[mid] < target) {\r\n                l = mid + 1;\r\n            } else {\r\n                h = mid - 1;\r\n            }\r\n        }\r\n        return -1;\r\n    }\r\n}\r\n\n'
          },
          {
            language: 'Py',
            content:
              '# 查找 nums 数组中元素值为 target 的下标，如果不存在则返回 -1\ndef binary_search(nums: [], target: int) -> int:\n    n = len(nums)\n    l, h = 0, n - 1\n    while l <= h:\n        mid = l + (h - l) // 2\n        if nums[mid] == target:\n            return mid\n        elif nums[mid] < target:\n            l = mid + 1\n        else:\n            h = mid - 1\n    return -1\n\n'
          }
        ]
      },
      {
        title: '代码6.2.1',
        codes: [
          {
            language: 'Cpp',
            content:
              'class Solution {\r\npublic:\r\n    int findMin(vector<int>& nums) {\r\n        int l = 0, h = nums.size() - 1;\r\n        while (l <= h) {\r\n            int mid = l + (h - l) / 2;\r\n            if (l == h) {\r\n                return nums[l];\r\n            } else if (nums[mid] > nums[h]) {\r\n                l = mid + 1;\r\n            } else {\r\n                h = mid;\r\n            }\r\n        }\r\n        return -1;\r\n    }\r\n};\n'
          },
          {
            language: 'Java',
            content:
              'class Solution {\r\n    public int findMin(int[] nums) {\r\n        int l = 0, h = nums.length - 1;\r\n        while (l <= h) {\r\n            int mid = l + (h - l) / 2;\r\n            if (l == h) {\r\n                return nums[l];\r\n            } else if (nums[mid] > nums[h]) {\r\n                l = mid + 1;\r\n            } else {\r\n                h = mid;\r\n            }\r\n        }\r\n        return -1;\r\n    }\r\n}\r\n\n'
          },
          {
            language: 'Py',
            content:
              'class Solution:\n    def findMin(self, nums: List[int]) -> int:\n        l, h = 0, len(nums) - 1\n        while l <= h:\n            mid = l + (h - l) // 2\n            if l == h:\n                return nums[l]\n            elif nums[mid] > nums[h]:\n                l = mid + 1\n            elif nums[mid] < nums[h]:\n                h = mid\n        return -1\n\n'
          }
        ]
      },
      {
        title: '代码6.3.1',
        codes: [
          {
            language: 'Cpp',
            content:
              'class Solution {\r\npublic:\r\n    int minEatingSpeed(vector<int>& piles, int H) {\r\n        int maxPile = piles[0];\r\n        for (int pile : piles) {\r\n            if (pile > maxPile) {\r\n                maxPile = pile;\r\n            }\r\n        }\r\n        int l = 1, h = maxPile;\r\n        while (l <= h) {\r\n            int mid = l + (h - l) / 2;\r\n            if (l == h) {\r\n                return l;\r\n            } else if (help(piles, mid, H)) {\r\n                h = mid;\r\n            } else {\r\n                l = mid + 1;\r\n            }\r\n        }\r\n        return -1;\r\n    }\r\n    // 判断速度 k 是否满足条件\r\n    bool help(vector<int>& piles, int k, int H) {\r\n        int cnt = 0;\r\n        for (int pile : piles) {\r\n            cnt += (pile - 1) / k + 1;\r\n        }\r\n        return cnt <= H;\r\n    }\r\n};\n'
          },
          {
            language: 'Java',
            content:
              'class Solution {\r\n    public int minEatingSpeed(int[] piles, int H) {\r\n        int maxPile = piles[0];\r\n        for (int pile : piles) {\r\n            maxPile = Math.max(pile, maxPile);\r\n        }\r\n        int l = 1, h = maxPile;\r\n        while (l <= h) {\r\n            int mid = l + (h - l) / 2;\r\n            if (l == h) {\r\n                return l;\r\n            } else if (help(piles, mid, H)) {\r\n                h = mid;\r\n            } else {\r\n                l = mid + 1;\r\n            }\r\n        }\r\n        return -1;\r\n    }\r\n    // 判断速度 k 是否满足条件\r\n    public boolean help(int[] piles, int k, int H) {\r\n        int cnt = 0;\r\n        for (int pile : piles) {\r\n            cnt += (pile - 1) / k + 1;\r\n        }\r\n        return cnt <= H;\r\n    }\r\n}\r\n\n'
          },
          {
            language: 'Py',
            content:
              'class Solution:\n    def minEatingSpeed(self, piles: List[int], H: int) -> int:\n        # 判断速度 k 是否满足条件\n        def help(k: int) -> boolean:\n            cnt = 0\n            for pile in piles:\n                cnt += (pile - 1) // k + 1\n            return cnt <= H\n\n        l, h = 1, max(piles)\n        while l <= h:\n            mid = l + (h - l) // 2\n            if l == h:\n                return l\n            if help(mid):\n                h = mid\n            else:\n                l = mid + 1\n        return -1\n\n'
          }
        ]
      },
      {
        title: '代码6.4.1',
        codes: [
          {
            language: 'Cpp',
            content:
              'class Solution {\r\npublic:\r\n    int mySqrt(int x) {\r\n        long l = 0, h = x;\r\n        while (l <= h) {\r\n            long mid = l + (h - l) / 2;\r\n            if (l == h || l + 1 == h) {\r\n                break;\r\n            } else if (mid * mid > x) {\r\n                h = mid - 1;\r\n            } else {\r\n                l = mid;\r\n            }\r\n        }\r\n        if (h * h <= x) {\r\n            return (int)h;\r\n        } else {\r\n            return (int)l;\r\n        }\r\n    }\r\n};\n'
          },
          {
            language: 'Java',
            content:
              'class Solution {\r\n    public int mySqrt(int x) {\r\n        long l = 0, h = x;\r\n        while (l <= h) {\r\n            long mid = l + (h - l) / 2;\r\n            if (l == h || l + 1 == h) {\r\n                break;\r\n            } else if (mid * mid > x) {\r\n                h = mid - 1;\r\n            } else {\r\n                l = mid;\r\n            }\r\n        }\r\n        if (h * h <= x) {\r\n            return (int) h;\r\n        } else {\r\n            return (int) l;\r\n        }\r\n    }\r\n}\r\n\n'
          },
          {
            language: 'Py',
            content:
              'class Solution:\n    def mySqrt(self, x: int) -> int:\n        l, h = 0, x\n        while l <= h:\n            mid = l + (h - l) // 2\n            if l == h or l + 1 == h:\n                break\n            elif mid * mid > x:\n                h = mid - 1\n            else:\n                l = mid\n        if h * h <= x:\n            return h\n        else:\n            return l\n\n'
          }
        ]
      },
      {
        title: '代码6.4.2',
        codes: [
          {
            language: 'Cpp',
            content:
              'int bs(vector<int>& nums, int x) {\r\n    int l = 0, h = nums.size() - 1;\r\n    while (l <= h) {\r\n        int mid = l + (h - l) / 2;\r\n        if (l == h) {\r\n            break;\r\n        } else if (nums[mid] >= x) {\r\n            h = mid;\r\n        } else {\r\n            l = mid + 1;\r\n        }\r\n    }\r\n    return nums[l];\r\n}\n'
          },
          {
            language: 'Java',
            content:
              'public int bs(int[] nums, int x) {\r\n\tint l = 0, h = nums.length - 1;\r\n\twhile (l <= h) {\r\n\t\tint mid = l + (h - l) / 2;\r\n\t\tif (l == h) {\r\n\t\t\tbreak;\r\n\t\t} else if (nums[mid] >= x) {\r\n\t\t\th = mid;\r\n\t\t} else {\r\n\t\t\tl = mid + 1;\r\n\t\t}\r\n\t}\r\n\treturn nums[l];\r\n}\r\n\r\n\n'
          },
          {
            language: 'Py',
            content:
              '# 查找第一个大于等于 x 的元素\ndef bs(nums: List[int], x: int) -> int:\n    l, h = 0, len(nums) - 1\n    while l <= h:\n        mid = l + (h - l) // 2\n        if l == h:\n            break\n        elif nums[mid] >= x:\n            h = mid\n        else:\n            l = mid + 1\n    return nums[l]\n\n'
          }
        ]
      },
      {
        title: '代码6.4.3',
        codes: [
          {
            language: 'Cpp',
            content:
              'int bs(vector<int>& nums, int x) {\r\n    int l = 0, h = nums.size() - 1;\r\n    while (l <= h) {\r\n        int mid = l + (h - l) / 2;\r\n        if (l == h || l + 1 == h) {\r\n            break;\r\n        } else if (nums[mid] <= x) {\r\n            l = mid;\r\n        } else {\r\n            h = mid - 1;\r\n        }\r\n    }\r\n    if (nums[h] <= x) {\r\n        return nums[h];\r\n    } else {\r\n        return nums[l];\r\n    }\r\n}\n'
          },
          {
            language: 'Java',
            content:
              'public int bs(int[] nums, int x) {\r\n    int l = 0, h = nums.length - 1;\r\n    while (l <= h) {\r\n        int mid = l + (h - l) / 2;\r\n        if (l == h || l + 1 == h) {\r\n            break;\r\n        } else if (nums[mid] <= x) {\r\n            l = mid;\r\n        } else {\r\n            h = mid - 1;\r\n        }\r\n    }\r\n    if (nums[h] <= x) {\r\n        return nums[h];\r\n    } else {\r\n        return nums[l];\r\n    }\r\n}\n'
          },
          {
            language: 'Py',
            content:
              '# 查找最后一个小于等于 x 的元素\ndef bs(nums: List[int], x: int) -> int:\n    l, h = 0, len(nums) - 1\n    while l <= h:\n        mid = l + (h - l) // 2\n        if l == h or l + 1 == h:\n            break\n        elif nums[mid] <= x:\n            l = mid\n        else:\n            h = mid - 1\n    if nums[h] <= x:\n        return nums[h]\n    else:\n        return nums[l]\n\n'
          }
        ]
      },
      {
        title: '代码6.5.1',
        codes: [
          {
            language: 'Cpp',
            content:
              'class Solution {\r\npublic:\r\n    int findPeakElement(vector<int>& nums) {\r\n        int n = nums.size();\r\n        int l = 0, h = n - 1;\r\n        while (l <= h) {\r\n            int mid = l + (h - l) / 2;\r\n            if (mid + 1 < n && nums[mid] < nums[mid + 1]) {\r\n                l = mid + 1;\r\n            } else if (mid - 1 >= 0 && nums[mid] < nums[mid - 1]) {\r\n                h = mid - 1;\r\n            } else {\r\n                return mid;\r\n            }\r\n        }\r\n        return -1;\r\n    }\r\n};\n'
          },
          {
            language: 'Java',
            content:
              'class Solution {\r\n    public int findPeakElement(int[] nums) {\r\n        int n = nums.length;\r\n        int l = 0, h = n - 1;\r\n        while (l <= h) {\r\n            int mid = l + (h - l) / 2;\r\n            if (mid + 1 < n && nums[mid] < nums[mid + 1]) {\r\n                l = mid + 1;\r\n            } else if (mid - 1 >= 0 && nums[mid] < nums[mid - 1]) {\r\n                h = mid - 1;\r\n            } else {\r\n                return mid;\r\n            }\r\n        }\r\n        return -1;\r\n    }\r\n}\r\n\n'
          },
          {
            language: 'Py',
            content:
              'class Solution:\n    def findPeakElement(self, nums: List[int]) -> int:\n        n = len(nums)\n        l, h = 0, n - 1\n        while l <= h:\n            mid = l + (h - l) // 2\n            if mid + 1 < n and nums[mid] < nums[mid + 1]:\n                l = mid + 1\n            elif mid - 1 >= 0 and nums[mid] < nums[mid - 1]:\n                h = mid - 1\n            else:\n                return mid\n        return -1\n\n'
          }
        ]
      },
      {
        title: '代码6.6.1',
        codes: [
          {
            language: 'Cpp',
            content:
              'class Solution {\r\npublic:\r\n    int splitArray(vector<int>& nums, int m) {\r\n        long maxNum = nums[0], sumNum = 0;\r\n        for (long num : nums) {\r\n            if (num > maxNum) {\r\n                maxNum = num;\r\n            }\r\n            sumNum += num;\r\n        }\r\n        long l = maxNum, h = sumNum;\r\n        while (l <= h) {\r\n            long mid = l + (h - l) / 2;\r\n            if (l == h) {\r\n                return (int)l;\r\n            } else if (help(nums, mid, m)) {\r\n                h = mid;\r\n            } else {\r\n                l = mid + 1;\r\n            }\r\n        }\r\n        return -1;\r\n    }\r\n    bool help(vector<int>& nums, long ans, int m) {\r\n        long cnt = 1, cur = 0;\r\n        for (long num : nums) {\r\n            if (cur + num > ans) {\r\n                cur = num;\r\n                cnt += 1;\r\n            } else {\r\n                cur += num;\r\n            }\r\n        }\r\n        return cnt <= m;\r\n    }\r\n};\n'
          },
          {
            language: 'Java',
            content:
              'class Solution {\r\n    public int splitArray(int[] nums, int m) {\r\n        long maxNum = nums[0], sumNum = 0;\r\n        for (long num : nums) {\r\n            maxNum = Math.max(maxNum, num);\r\n            sumNum += num;\r\n        }\r\n        long l = maxNum, h = sumNum;\r\n        while (l <= h) {\r\n            long mid = l + (h - l) / 2;\r\n            if (l == h) {\r\n                return (int) l;\r\n            } else if (help(nums, mid, m)) {\r\n                h = mid;\r\n            } else {\r\n                l = mid + 1;\r\n            }\r\n        }\r\n        return -1;\r\n    }\r\n\r\n    public boolean help(int[] nums, long ans, int m) {\r\n        long cnt = 1, cur = 0;\r\n        for (long num : nums) {\r\n            if (cur + num > ans) {\r\n                cur = num;\r\n                cnt += 1;\r\n            } else {\r\n                cur += num;\r\n            }\r\n        }\r\n        return cnt <= m;\r\n    }\r\n}\r\n\n'
          },
          {
            language: 'Py',
            content:
              'class Solution:\n    def splitArray(self, nums: List[int], m: int) -> int:\n        # 判断 ans 是否可行\n        def help(ans: int) -> boolean:\n            cnt, cur = 1, 0\n            for num in nums:\n                if (cur + num) > ans:\n                    cur = num\n                    cnt += 1\n                else:\n                    cur += num\n            return cnt <= m\n\n        l, h = max(nums), sum(nums)\n        while l <= h:\n            mid = l + (h - l) // 2\n            if l == h:\n                return l\n            elif help(mid):\n                h = mid\n            else:\n                l = mid + 1\n        return -1\n\n'
          }
        ]
      }
    ]
  },
  {
    id: '07',
    name: '第七章',
    list: [
      {
        title: '代码7.1.1',
        codes: [
          {
            language: 'Cpp',
            content:
              'class Solution {\npublic:\n    int hammingWeight(uint32_t n) {\n        int num = 0;\n        for (int i = 0; i < 32; i++){\n            if (n & (1 << i))\n                num++;                        \n        }\n        \n        return num;\n    }\n};\n\n'
          },
          {
            language: 'Java',
            content:
              'public class Solution {\n    // you need to treat n as an unsigned value\n    public int hammingWeight(int n) {\n        int retVal = 0;\n        int mask = 1;\n        for (int i = 0; i < 32; i++) {\n            if ((n & mask) != 0) {\n                retVal++;\n            }\n            mask <<= 1;\n        }\n        return retVal;\n    }\n}\n'
          },
          {
            language: 'Py',
            content:
              'class Solution:\n    def hammingWeight(self, n:int)->int:\n        retval = 0\n        for i in range(32):\n            if n & (1 << i):\n                retval = retval + 1\n                \n        return retval\n\n'
          }
        ]
      },
      {
        title: '代码7.1.2',
        codes: [
          {
            language: 'Cpp',
            content:
              'class Solution {\npublic:\n    int hammingWeight(uint32_t n) {\n        int ret = 0;\n        \n        while (n) {\n            ret = ret + 1;\n            n &= (n - 1);\n        }\n        return ret;\n    }\n};\n\n'
          },
          {
            language: 'Java',
            content:
              'public class Solution {\n    // you need to treat n as an unsigned value\n    public int hammingWeight2(int n) {\n        int retVal = 0;\n        while (n != 0) {\n            n = n & (n - 1);\n            retVal++;\n        }\n        return retVal;\n    }\n}\n'
          },
          {
            language: 'Py',
            content:
              'class Solution:\n    def hammingWeight(self, n:int)->int:\n        retval = 0\n        while n:\n            retval = retval + 1\n            n &= (n - 1)\n            \n        return retval\n\n'
          }
        ]
      },
      {
        title: '代码7.2.1',
        codes: [
          {
            language: 'Cpp',
            content:
              'class Solution {\npublic:\n    int getSum(int a, int b) {\n        int ans = a ^ b;\n        int c = a & b;\n        while(c != 0) {\n            c = (c & 0xffffffff) << 1;\n            int ans_prim = ans ^ c;\n            c = ans & c;\n            ans = ans_prim;\n        }\n        return ans;\n    }\n};\n\n'
          },
          {
            language: 'Java',
            content:
              'class Solution {\n    public int getSum(int a, int b) {\n        while (b != 0) {\n            int carry = (a & b) << 1;\n            int temp = a ^ b;\n\n            a = temp;\n            b = carry;\n        }\n        return a;\n    }\n}\n'
          },
          {
            language: 'Py',
            content:
              'class Solution:\n    def getSum(self, a:int, b:int)->int:\n        carry = 0\n        mask  = 0xFFFFFFFF\n        \n        while b & mask != 0:\n            carry = (a & b) << 1\n            a = a ^ b\n            b = carry\n            \n        if b > mask:\n            return a & mask\n        else:\n            return a\n\n'
          }
        ]
      },
      {
        title: '代码7.3.1',
        codes: [
          {
            language: 'Cpp',
            content:
              'class Solution {\nprivate:\n    unordered_map<int, int> visited;\npublic:\n    int integerReplacement(int n) {\n        if (n == 1) return 0;\n        \n        if (visited.count(n) == 0) {\n            if (n & 1 == 1)\n                visited[n] = 2 + min(integerReplacement(n >> 1), integerReplacement((n >> 1) + 1));\n            else\n                visited[n] = 1 + integerReplacement(n >> 1);\n        }\n        \n        return visited[n];\n    }\n};\n\n'
          },
          {
            language: 'Java',
            content:
              'class Solution {\n    public int integerReplacement(int n) {\n        if (n == 1)\n            return 0;\n        if (n == Integer.MAX_VALUE)\n            return 32;\n        if (n % 2 == 0)\n            return integerReplacement(n / 2) + 1;\n        else\n            return Math.min(integerReplacement(n + 1), integerReplacement(n - 1)) + 1;\n    }\n}\n'
          },
          {
            language: 'Py',
            content:
              'class Solution:\n    def integerReplacement(self, n:int)->int:\n        if n == 1:\n            return 0\n        elif n % 2 == 0:\n            return 1 + self.integerReplacement(n // 2)\n        else:\n            return min(self.integerReplacement(n + 1), self.integerReplacement(n - 1)) + 1\n\n'
          }
        ]
      },
      {
        title: '代码7.3.2',
        codes: [
          {
            language: 'Cpp',
            content:
              'class Solution {\npublic:\n    int integerReplacement(int n) {\n        long int tmp_num = n;\n        int count = 0;\n        \n        while (tmp_num > 1) {\n            if (tmp_num % 2 == 0)\n                tmp_num >>= 1;\n            else if (((tmp_num + 1) % 4 == 0) && (tmp_num != 3))\n                tmp_num += 1;\n            else\n                tmp_num -= 1;\n            \n            count += 1;\n        }\n        \n        return count;\n    }\n};\n\n'
          },
          {
            language: 'Java',
            content:
              'class Solution {\n    public int integerReplacement(int n) {\n        if (n == 1)\n            return 0;\n        if (n == Integer.MAX_VALUE)\n            return 32;\n        int count = 0;\n        while (n > 3) {\n            if (n % 2 == 0)\n                n >>= 1;\n            else if ((n + 1) % 4 == 0) \n                n += 1;\n            else\n                n -= 1;\n            count++;\n        }\n\n        return n == 3 ? count + 2 : count + 1; // 处理 n==3 的特殊情况\n    }\n}\n'
          },
          {
            language: 'Py',
            content:
              'class Solution:\n    def integerReplacement(self, n:int)->int:\n        count = 0\n        while n > 1:\n            if n & 1 == 0:\n                n >>= 1\n            elif (n + 1) % 4 == 0 and n != 3:\n                n += 1\n            else:\n                n -= 1\n            count += 1\n\n        return count\n\n'
          }
        ]
      },
      {
        title: '代码7.3.3',
        codes: [
          {
            language: 'Cpp',
            content:
              'class Solution {\npublic:\n    int integerReplacement(int n) {\n        long int tmp_num = n;\n        int count = 0;\n        \n        while (tmp_num != 1) {\n            if (tmp_num % 2 == 0) {\n                tmp_num >>= 1;\n            } else {\n                if (((tmp_num & 2) == 0) || (tmp_num == 3))\n                    tmp_num -= 1;\n                else\n                    tmp_num += 1;\n            }\n            \n            count += 1;\n        }\n        \n        return count;\n    }\n};\n\n'
          },
          {
            language: 'Java',
            content:
              'class Solution {\n    public int integerReplacement(int n) {\n        if (n == 1)\n            return 0;\n        if (n == Integer.MAX_VALUE)\n            return 32;\n        int count = 0;\n        while (n > 3) {\n            if ((n & 1) == 0) //判断是 0 或 1\n                n >>= 1;\n            else if ((n & 2) == 0) // 已经确定最后一位是1，判断是01 还是11\n                n -= 1;\n            else\n                n += 1;\n            count++;\n        }\n        return n == 3 ? count + 2 : count + 1; // 处理 n==3 的特殊情况\n    }\n}\n'
          },
          {
            language: 'Py',
            content:
              'class Solution:\n    def integerReplacement(self, n:int)->int:\n        count = 0\n        while n != 1:\n            if n & 1 == 0：\n                n >>= 1\n            else:\n                if (n & 2) == 0 or n == 3:\n                    n += -1\n                else:\n                    n += 1\n            count += 1\n\n        return count\n\n'
          }
        ]
      },
      {
        title: '代码7.4.1',
        codes: [
          {
            language: 'Cpp',
            content:
              'class Solution {\npublic:\n    int singleNumber(vector<int>& nums) {\n        unordered_map<int, int> m;\n\n        for (int i = 0; i < nums.size(); i++) {\n            m[nums[i]]++;\n        }\n\n        for (auto it = m.begin(); it != m.end(); it++)\n            if (it->second == 1)\n                return it->first;\n\n        return 0;\n    }\n};\n\n'
          },
          {
            language: 'Java',
            content:
              'class Solution {\n    public int singleNumber(int[] nums) {\n        Map<Integer, Integer> map = new HashMap<>();\n        for (int num : nums)\n            map.put(num, map.getOrDefault(num, 0) + 1);\n        for (int num : map.keySet())\n            if (map.get(num) == 1)\n                return num;\n        return 0;\n    }\n}\n'
          },
          {
            language: 'Py',
            content:
              'class Solution:\n    def singleNumber(self, nums:List[int])->int:\n        ret = 0\n        \n        for i in range(len(nums)):\n            ret ^= nums[i]\n            \n        return ret\n\n'
          }
        ]
      },
      {
        title: '代码7.4.2',
        codes: [
          {
            language: 'Cpp',
            content:
              'class Solution {\npublic:\n    int singleNumber(vector<int>& nums) {\n        int result = 0;\n        \n        for (int i = 0; i < nums.size(); i++) {\n            result ^= nums[i];\n        }\n        \n        return result;\n    }\n};\n\n'
          },
          {
            language: 'Java',
            content:
              'class Solution {\n    public int singleNumber(int[] nums) {\n        int res = nums[0];\n        for (int i = 1; i < nums.length; i++) {\n            res ^= nums[i];\n        }\n        return res;\n    }\n}\n'
          },
          {
            language: 'Py',
            content:
              'class Solution:\n    def singleNumber(self, nums:List[int])->int:\n        hash_tab = defaultdict(int)\n        \n        for i in nums:\n            hash_tab[i] += 1\n            \n        for i in hash_tab:\n            if hash_tab[i] == 1:\n                return i\n\n'
          }
        ]
      },
      {
        title: '代码7.4.3',
        codes: [
          {
            language: 'Java',
            content:
              'class Solution {\n    public int singleNumber(int[] nums) {\n        int distinctSum = Arrays.stream(nums).distinct().sum();\n        int sum = Arrays.stream(nums).sum();\n        return distinctSum * 2 - sum;\n    }\n}\n\n'
          },
          {
            language: 'Py',
            content:
              'class Solution:\n    def singleNumber(self, nums:List[int])->int:\n        return 2 * sum(set(nums)) - sum(nums)\n\n'
          }
        ]
      },
      {
        title: '代码7.4.4',
        codes: [
          {
            language: 'Cpp',
            content:
              'class Solution {\npublic:\n    int singleNumber(vector<int>& nums) {\n        vector<int> t(32);\n        \n        for (int i = 0; i < nums.size(); i++) {\n            int num = nums[i];\n            for (int j = 31; j >= 0; j--) {\n                t[j] += num & 1;\n                num >>= 1;\n                if (!num) break;\n            }\n        }\n        \n        int res = 0;\n        for (int j = 31; j >= 0; j--) {\n            int num = t[j] % 3;\n            if (num) res += 1 << (31 - j);\n        }\n        \n        return res;\n    }\n};\n\n'
          },
          {
            language: 'Java',
            content:
              'class Solution {\n    public int singleNumber(int[] nums) {\n        int[] counts = new int[32];\n        for (int num : nums) {\n            for (int i = 0; i < 32; i++) {\n                counts[i] += num & 1;\n                num >>= 1;\n            }\n        }\n        int res = 0;\n        for (int i = 0; i < 32; i++) {\n            res <<= 1;\n            res |= counts[31 - i] % 3;\n        }\n        return res;\n    }\n}\n'
          },
          {
            language: 'Py',
            content:
              'class Solution:\n    def singleNumber(self, nums: List[int]) -> int:\n        counts = [0] * 32\n        # 统计 nums 中每个元素的二进制中，对应位上的 1 的个数\n        for num in nums:\n            for j in range(32):\n                counts[j] += num & 1\n                num >>= 1\n        res, m = 0, 3\n        # 对每一位上，统计的 1 的个数取余\n        for i in range(32):\n            res <<= 1\n            res |= counts[31 - i] % m\n            \n        return res if counts[31] % m == 0 else ~(res ^ 0xffffffff)\n\n\n'
          }
        ]
      },
      {
        title: '代码7.4.5',
        codes: [
          {
            language: 'Java',
            content:
              'class Solution {\n    public int singleNumber(int[] nums) {\n        int[] counts = new int[32];\n        for (int num : nums) {\n            for (int i = 0; i < 32; i++) {\n                counts[i] += num & 1;\n                num >>= 1;\n            }\n        }\n        int res = 0;\n        for (int i = 0; i < 32; i++) {\n            res <<= 1;\n            res |= counts[31 - i] % 3;\n        }\n        return res;\n    }\n}\n'
          },
          {
            language: 'Py',
            content:
              'class Solution:\n    def singleNumber(self, nums: List[int]) -> List[int]:\n        ret = 0  # 所有数字异或的结果\n        a = 0\n        b = 0\n        for n in nums:\n            ret ^= n\n        # 找到第一位不是 0 的\n        h = 1\n        while ret & h == 0:\n            h <<= 1\n        for n in nums:\n            # 根据该位是否为 0 将其分为两组\n            if h & n == 0:\n                a ^= n\n            else:\n                b ^= n\n\n        return [a, b]\n\n'
          }
        ]
      }
    ]
  },
  {
    id: '08',
    name: '第八章',
    list: [
      {
        title: '代码8.1.1',
        codes: [
          {
            language: 'Cpp',
            content:
              'class MinStack {\n    stack<int> x_stack;\n    stack<int> min_stack;\npublic:\n    MinStack() {\n        min_stack.push(INT_MAX);\n    }\n    \n    void push(int x) {\n        x_stack.push(x);\n        min_stack.push(min(min_stack.top(), x));\n    }\n    \n    void pop() {\n        x_stack.pop();\n        min_stack.pop();\n    }\n    \n    int top() {\n        return x_stack.top();\n    }\n    \n    int getMin() {\n        return min_stack.top();\n    }\n};\n'
          },
          {
            language: 'Java',
            content:
              'import java.util.Stack;\n\npublic class MinStack {\n\n    // 数据栈\n    private Stack<Integer> data;\n    // 辅助栈\n    private Stack<Integer> helper;\n\n    /**\n     * initialize your data structure here.\n     */\n    public MinStack() {\n        data = new Stack<>();\n        helper = new Stack<>();\n    }\n\n    public void push(int x) {\n        // 数据栈和辅助栈一定会增加元素\n        data.add(x);\n        if (helper.isEmpty() || helper.peek() >= x) {\n            helper.add(x);\n        } else {\n            helper.add(helper.peek());\n        }\n    }\n\n    public void pop() {\n        // 两个栈都得 pop\n        if (!data.isEmpty()) {\n            helper.pop();\n            data.pop();\n        }\n    }\n\n    public int top() {\n        if(!data.isEmpty()){\n            return data.peek();\n        }\n        throw new RuntimeException("栈中元素为空，此操作非法");\n    }\n\n    public int getMin() {\n        if(!helper.isEmpty()){\n            return helper.peek();\n        }\n        throw new RuntimeException("栈中元素为空，此操作非法");\n    }\n}\n'
          },
          {
            language: 'Py',
            content:
              'class MinStack:\n    def __init__(self):\n        """\n        initialize your data structure here.\n        """\n        self.stack = []\n        self.helper = []\n\n    def push(self, x: int) -> None:\n        self.stack.append(x)\n        if not self.helper or x <= self.helper[-1]:\n            self.helper.append(x)\n        else:\n            self.helper.append(self.helper[-1])\n\n    def pop(self) -> None:\n        self.helper.pop()\n        return self.stack.pop()\n\n    def top(self) -> int:\n        return self.stack[-1]\n\n    def getMin(self) -> int:\n        return self.helper[-1]\n\n\n# Your MinStack object will be instantiated and called as such:\n# obj = MinStack()\n# obj.push(x)\n# obj.pop()\n# param_3 = obj.top()\n# param_4 = obj.getMin()\n\n'
          }
        ]
      },
      {
        title: '代码8.1.2',
        codes: [
          {
            language: 'Cpp',
            content:
              'class MinStack {\n    stack<int> x_stack;\n    stack<int> min_stack;\npublic:\n    MinStack() {\n        min_stack.push(INT_MAX);\n    }\n    \n    void push(int x) {\n        x_stack.push(x);\n        min_stack.push(min(min_stack.top(), x));\n    }\n    \n    void pop() {\n        x_stack.pop();\n        min_stack.pop();\n    }\n    \n    int top() {\n        return x_stack.top();\n    }\n    \n    int getMin() {\n        return min_stack.top();\n    }\n};\n'
          },
          {
            language: 'Java',
            content:
              'import java.util.Stack;\n\npublic class MinStack {\n\n    // 数据栈\n    private Stack<Integer> data;\n    // 辅助栈\n    private Stack<Integer> helper;\n\n    /**\n     * initialize your data structure here.\n     */\n    public MinStack() {\n        data = new Stack<>();\n        helper = new Stack<>();\n    }\n\n    public void push(int x) {\n        // 数据栈和辅助栈一定会增加元素\n        data.add(x);\n        if (helper.isEmpty() || helper.peek() >= x) {\n            helper.add(x);\n        } else {\n            helper.add(helper.peek());\n        }\n    }\n\n    public void pop() {\n        // 两个栈都得 pop\n        if (!data.isEmpty()) {\n            helper.pop();\n            data.pop();\n        }\n    }\n\n    public int top() {\n        if(!data.isEmpty()){\n            return data.peek();\n        }\n        throw new RuntimeException("栈中元素为空，此操作非法");\n    }\n\n    public int getMin() {\n        if(!helper.isEmpty()){\n            return helper.peek();\n        }\n        throw new RuntimeException("栈中元素为空，此操作非法");\n    }\n}\n'
          },
          {
            language: 'Py',
            content:
              'class MinStack:\n    def __init__(self):\n        """\n        initialize your data structure here.\n        """\n        self.stack = []\n        self.helper = []\n\n    def push(self, x: int) -> None:\n        self.stack.append(x)\n        if not self.helper or x < self.helper[-1][0]:\n            self.helper.append([x, 1])\n        else:\n            self.helper[-1] = [self.helper[-1][0], self.helper[-1][1] + 1]\n\n    def pop(self) -> None:\n        if self.helper[-1][1] > 1:\n            self.helper[-1] = [self.helper[-1][0], self.helper[-1][1] - 1]\n        else:\n            self.helper.pop()\n        return self.stack.pop()\n\n    def top(self) -> int:\n        return self.stack[-1]\n\n    def getMin(self) -> int:\n        return self.helper[-1][0]\n\n\n# Your MinStack object will be instantiated and called as such:\nobj = MinStack()\nobj.push(1)\nobj.pop()\nparam_3 = obj.top()\nparam_4 = obj.getMin()\n\n'
          }
        ]
      },
      {
        title: '代码8.1.3',
        codes: [
          {
            language: 'Cpp',
            content:
              'class MinStack {\n    stack<int> x_stack;\n    stack<int> min_stack;\npublic:\n    MinStack() {\n        min_stack.push(INT_MAX);\n    }\n    \n    void push(int x) {\n        x_stack.push(x);\n        min_stack.push(min(min_stack.top(), x));\n    }\n    \n    void pop() {\n        x_stack.pop();\n        min_stack.pop();\n    }\n    \n    int top() {\n        return x_stack.top();\n    }\n    \n    int getMin() {\n        return min_stack.top();\n    }\n};\n'
          },
          {
            language: 'Java',
            content:
              'import java.util.Stack;\n\npublic class MinStack {\n\n    // 数据栈\n    private Stack<Integer> data;\n    // 辅助栈\n    private Stack<Integer> helper;\n\n    /**\n     * initialize your data structure here.\n     */\n    public MinStack() {\n        data = new Stack<>();\n        helper = new Stack<>();\n    }\n\n    public void push(int x) {\n        data.add(x);\n        if (helper.isEmpty() || helper.peek() >= x) {\n            helper.add(x);\n        }\n    }\n\n    public void pop() {\n        if (!data.isEmpty()) {\n            int top = data.pop();\n            if(top == helper.peek()){\n                helper.pop();\n            }\n        }\n    }\n\n    public int top() {\n        if(!data.isEmpty()){\n            return data.peek();\n        }\n        throw new RuntimeException("栈中元素为空，此操作非法");\n    }\n\n    public int getMin() {\n        if(!helper.isEmpty()){\n            return helper.peek();\n        }\n        throw new RuntimeException("栈中元素为空，此操作非法");\n    }\n\n}\n'
          },
          {
            language: 'Py',
            content:
              'class MinStack:\n    def __init__(self):\n        """\n        initialize your data structure here.\n        """\n        self.stack = []\n        self.helper = []\n\n    def push(self, x: int) -> None:\n        self.stack.append(x)\n        if not self.helper or x <= self.helper[-1]:\n            self.helper.append(x)\n\n    def pop(self) -> None:\n        top = self.stack.pop()\n        if self.helper and top == self.helper[-1]:\n            self.helper.pop()\n        return top\n\n    def top(self) -> int:\n        return self.stack[-1]\n\n    def getMin(self) -> int:\n        return self.helper[-1]\n\n'
          }
        ]
      },
      {
        title: '代码8.1.4',
        codes: [
          {
            language: 'Cpp',
            content:
              'class MinStack {\n    typedef long long ll;\npublic:\n    ll topElem; \n    /** initialize your data structure here. */\n    MinStack() {\n    }\n\n    void push(int x) {\n        if(s.empty()) {\n            minn = x;\n            s.push(x-minn);  //(当前值x-最小值minn)进栈\n        }\n        else {\n            s.push(x-minn);\n            minn = x < minn ? x : minn;  //值得注意的是当栈顶元素<0,则说明栈顶元素就是minn\n        }\n    }\n    \n    void pop() {\n        if(!s.empty()) {\n            topElem = s.top();\n            s.pop();\n            //原来的值x-最小值minn = topElem\n            //topElem<0,说明原来值x更小(原来的值就是现在的minn)，则现在的minn应该被更新minn-topElem\n            if(topElem < 0) minn -= topElem;\n        }\n        return;\n    }\n    \n    int top() {\n        if(!s.empty()) {\n            topElem = s.top();\n        }\n        if(topElem < 0) return minn; //说明topElem <0, 说明 x<minn, minn已经被更新为当栈顶x，栈顶元素就是minn\n        return topElem+minn;\n    }\n    \n    int getMin() {\n        return minn;\n    }\n    private:\n        ll minn;\n        stack<ll>s;\n};\n'
          },
          {
            language: 'Java',
            content:
              'public class MinStack {\n  long min;\n  Stack<Long> stack;\n\n  public MinStack(){\n        stack=new Stack<>();\n    }\n\n  public void push(int x) {\n    if (stack.isEmpty()) {\n      min = x;\n      stack.push(x - min);\n    } else {\n      stack.push(x - min);\n      if (x < min){\n        min = x; // 更新最小值\n      }\n        \n    }\n  }\n\n  public void pop() {\n    if (stack.isEmpty())\n      return;\n\n    long pop = stack.pop();\n    \n    //弹出的是负值，要更新 min\n    if (pop < 0) {\n      min = min - pop;\n    }\n\n  }\n\n  public int top() {\n    long top = stack.peek();\n    //负数的话，出栈的值保存在 min 中\n    if (top < 0) {\n      return (int) (min);\n        //出栈元素加上最小值即可\n    } else {\n      return (int) (top + min);\n    }\n  }\n\n  public int getMin() {\n    return (int) min;\n  }\n}\n'
          },
          {
            language: 'Py',
            content:
              'class MinStack:\n    def __init__(self):\n        """\n        initialize your data structure here.\n        """\n        self.stack = []\n        self.min = float(\'inf\')\n\n    def push(self, x: int) -> None:\n        if not self.stack:\n            self.min = x\n            self.stack.append(0)\n        else:\n            self.stack.append(x - self.min)\n            if x < self.min: self.min = x\n\n    def pop(self) -> None:\n        if not self.stack: return\n\n        top = self.stack.pop()\n        if top < 0:\n            self.min = self.min - top\n\n    def top(self) -> int:\n        top = self.stack[-1]\n        if top < 0: return self.min\n        \n        return top + self.min\n\n    def getMin(self) -> int:\n        return self.min\n\n'
          }
        ]
      },
      {
        title: '代码8.2.1',
        codes: [
          {
            language: 'Cpp',
            content:
              "class Trie {\nprivate:\n    bool isEnd;\n    Trie* next[26];\npublic:\n    Trie() {\n        isEnd = false;\n        memset(next, 0, sizeof(next));\n    }\n    \n    void insert(string word) {\n        Trie* node = this;\n        for (char c : word) {\n            if (node->next[c-'a'] == NULL) {\n                node->next[c-'a'] = new Trie();\n            }\n            node = node->next[c-'a'];\n        }\n        node->isEnd = true;\n    }\n    \n    bool search(string word) {\n        Trie* node = this;\n        for (char c : word) {\n            node = node->next[c - 'a'];\n            if (node == NULL) {\n                return false;\n            }\n        }\n        return node->isEnd;\n    }\n    \n    bool startsWith(string prefix) {\n        Trie* node = this;\n        for (char c : prefix) {\n            node = node->next[c-'a'];\n            if (node == NULL) {\n                return false;\n            }\n        }\n        return true;\n    }\n};\n"
          },
          {
            language: 'Java',
            content:
              "class TrieNode {\n\n  // R links to node children\n  private TrieNode[] links;\n\n  private final int R = 26;\n\n  private boolean isEnd;\n\n  public TrieNode() {\n      links = new TrieNode[R];\n  }\n\n  public boolean containsKey(char ch) {\n      return links[ch -'a'] != null;\n  }\n  public TrieNode get(char ch) {\n      return links[ch -'a'];\n  }\n  public void put(char ch, TrieNode node) {\n      links[ch -'a'] = node;\n  }\n  public void setEnd() {\n      isEnd = true;\n  }\n  public boolean isEnd() {\n      return isEnd;\n  }\n}\n\nclass Trie {\n  private TrieNode root;\n\n  public Trie() {\n      root = new TrieNode();\n  }\n\n  public void insert(String word) {\n      TrieNode node = root;\n      for (int i = 0; i < word.length(); i++) {\n          char currentChar = word.charAt(i);\n          if (!node.containsKey(currentChar)) {\n              node.put(currentChar, new TrieNode());\n          }\n          node = node.get(currentChar);\n      }\n      node.setEnd();\n  }\n\n  private TrieNode searchPrefix(String word) {\n    TrieNode node = root;\n    for (int i = 0; i < word.length(); i++) {\n       char curLetter = word.charAt(i);\n       if (node.containsKey(curLetter)) {\n           node = node.get(curLetter);\n       } else {\n           return null;\n       }\n    }\n    return node;\n  }\n\n  public boolean search(String word) {\n    TrieNode node = searchPrefix(word);\n    return node != null && node.isEnd();\n  }\n\n  public boolean startsWith(String prefix) {\n    TrieNode node = searchPrefix(prefix);\n    return node != null;\n  }\n}\n"
          },
          {
            language: 'Py',
            content:
              'class TrieNode:\n    def __init__(self):\n        self.isEnd = False\n        self.children = {}\n\n\nclass Trie:\n    def __init__(self):\n        self.root = TrieNode()\n\n    def insert(self, word: str) -> None:\n        cur = self.root\n        for ch in word:\n            if ch not in cur.children:\n                node = TrieNode()\n                cur.children[ch] = node\n            cur = cur.children[ch]\n\n        cur.isEnd = True\n\n    def search(self, word: str) -> bool:\n        cur = self.root\n        for ch in word:\n            if ch not in cur.children:\n                return False\n            cur = cur.children[ch]\n\n        if cur.isEnd:\n            return True\n\n        return False\n\n    def startsWith(self, prefix: str) -> bool:\n        cur = self.root\n        for ch in prefix:\n            if ch not in cur.children:\n                return False\n            cur = cur.children[ch]\n\n        return True\n\n'
          }
        ]
      },
      {
        title: '代码8.3.1',
        codes: [
          {
            language: 'Cpp',
            content:
              'struct DLinkedNode {\n    int key, value;\n    DLinkedNode* prev;\n    DLinkedNode* next;\n    DLinkedNode(): key(0), value(0), prev(nullptr), next(nullptr) {}\n    DLinkedNode(int _key, int _value): key(_key), value(_value), prev(nullptr), next(nullptr) {}\n};\n\nclass LRUCache {\nprivate:\n    unordered_map<int, DLinkedNode*> cache;\n    DLinkedNode* head;\n    DLinkedNode* tail;\n    int size;\n    int capacity;\n\npublic:\n    LRUCache(int _capacity): capacity(_capacity), size(0) {\n        // 使用伪头部和伪尾部节点\n        head = new DLinkedNode();\n        tail = new DLinkedNode();\n        head->next = tail;\n        tail->prev = head;\n    }\n    \n    int get(int key) {\n        if (!cache.count(key)) {\n            return -1;\n        }\n        // 如果 key 存在，先通过哈希表定位，再移到头部\n        DLinkedNode* node = cache[key];\n        moveToHead(node);\n        return node->value;\n    }\n    \n    void put(int key, int value) {\n        if (!cache.count(key)) {\n            // 如果 key 不存在，创建一个新的节点\n            DLinkedNode* node = new DLinkedNode(key, value);\n            // 添加进哈希表\n            cache[key] = node;\n            // 添加至双向链表的头部\n            addToHead(node);\n            ++size;\n            if (size > capacity) {\n                // 如果超出容量，删除双向链表的尾部节点\n                DLinkedNode* removed = removeTail();\n                // 删除哈希表中对应的项\n                cache.erase(removed->key);\n                // 防止内存泄漏\n                delete removed;\n                --size;\n            }\n        }\n        else {\n            // 如果 key 存在，先通过哈希表定位，再修改 value，并移到头部\n            DLinkedNode* node = cache[key];\n            node->value = value;\n            moveToHead(node);\n        }\n    }\n\n    void addToHead(DLinkedNode* node) {\n        node->prev = head;\n        node->next = head->next;\n        head->next->prev = node;\n        head->next = node;\n    }\n    \n    void removeNode(DLinkedNode* node) {\n        node->prev->next = node->next;\n        node->next->prev = node->prev;\n    }\n\n    void moveToHead(DLinkedNode* node) {\n        removeNode(node);\n        addToHead(node);\n    }\n\n    DLinkedNode* removeTail() {\n        DLinkedNode* node = tail->prev;\n        removeNode(node);\n        return node;\n    }\n};\n'
          },
          {
            language: 'Java',
            content:
              'public class LRUCache {\n  class DLinkedNode {\n      int key;\n      int value;\n      DLinkedNode prev;\n      DLinkedNode next;\n      public DLinkedNode() {}\n      public DLinkedNode(int _key, int _value) {key = _key; value = _value;}\n  }\n\n  private Map<Integer, DLinkedNode> cache = new HashMap<Integer, DLinkedNode>();\n  private int size;\n  private int capacity;\n  private DLinkedNode head, tail;\n\n  public LRUCache(int capacity) {\n      this.size = 0;\n      this.capacity = capacity;\n      // 使用伪头部和伪尾部节点\n      head = new DLinkedNode();\n      tail = new DLinkedNode();\n      head.next = tail;\n      tail.prev = head;\n  }\n\n  public int get(int key) {\n      DLinkedNode node = cache.get(key);\n      if (node == null) {\n          return -1;\n      }\n      // 如果 key 存在，先通过哈希表定位，再移到头部\n      moveToHead(node);\n      return node.value;\n  }\n\n  public void put(int key, int value) {\n      DLinkedNode node = cache.get(key);\n      if (node == null) {\n          // 如果 key 不存在，创建一个新的节点\n          DLinkedNode newNode = new DLinkedNode(key, value);\n          // 添加进哈希表\n          cache.put(key, newNode);\n          // 添加至双向链表的头部\n          addToHead(newNode);\n          ++size;\n          if (size > capacity) {\n              // 如果超出容量，删除双向链表的尾部节点\n              DLinkedNode tail = removeTail();\n              // 删除哈希表中对应的项\n              cache.remove(tail.key);\n              --size;\n          }\n      }\n      else {\n          // 如果 key 存在，先通过哈希表定位，再修改 value，并移到头部\n          node.value = value;\n          moveToHead(node);\n      }\n  }\n\n  private void addToHead(DLinkedNode node) {\n      node.prev = head;\n      node.next = head.next;\n      head.next.prev = node;\n      head.next = node;\n  }\n\n  private void removeNode(DLinkedNode node) {\n      node.prev.next = node.next;\n      node.next.prev = node.prev;\n  }\n\n  private void moveToHead(DLinkedNode node) {\n      removeNode(node);\n      addToHead(node);\n  }\n\n  private DLinkedNode removeTail() {\n      DLinkedNode res = tail.prev;\n      removeNode(res);\n      return res;\n  }\n}\n'
          },
          {
            language: 'Py',
            content:
              'class ListNode:\n    def __init__(self, key=None, value=None):\n        self.key = key\n        self.value = value\n        self.prev = None\n        self.next = None\n\n\nclass LRUCache:\n    def __init__(self, capacity: int):\n        self.capacity = capacity\n        self.hashmap = {}\n        # 新建两个节点 head 和 tail\n        self.head = ListNode()\n        self.tail = ListNode()\n        # 初始化链表为 head <-> tail\n        self.head.next = self.tail\n        self.tail.prev = self.head\n\n    # get 和 put 操作可能都会调用move_to_tail方法\n    def move_to_tail(self, key: int) -> int:\n        node = self.hashmap[key]\n        # 将 node 结点的前置结点和后置结点相连\n        node.prev.next = node.next\n        node.next.prev = node.prev\n        # 将node插入到尾节点前\n        node.prev = self.tail.prev\n        node.next = self.tail\n        self.tail.prev.next = node\n        self.tail.prev = node\n\n    def get(self, key: int) -> int:\n        if key in self.hashmap:\n            # 如果已经在链表中了久把它移到末尾（变成最新访问的）\n            self.move_to_tail(key)\n            return self.hashmap.get(key).value\n\n        return -1\n\n    def put(self, key: int, value: int) -> None:\n        if key in self.hashmap:\n            # 如果key本身已经在哈希表中了就不需要在链表中加入新的节点\n            # 但是需要更新字典该值对应节点的value\n            self.hashmap[key].value = value\n            # 之后将该节点移到末尾\n            self.move_to_tail(key)\n        else:\n            if len(self.hashmap) == self.capacity:\n                # 去掉哈希表对应项\n                self.hashmap.pop(self.head.next.key)\n                # 去掉最久没有被访问过的节点，即头节点之后的节点\n                self.head.next = self.head.next.next\n                self.head.next.prev = self.head\n            # 将新结点插入到尾节点前\n            newNode = ListNode(key, value)\n            self.hashmap[key] = newNode\n            newNode.prev = self.tail.prev\n            newNode.next = self.tail\n            self.tail.prev.next = newNode\n            self.tail.prev = newNode\n\n'
          }
        ]
      },
      {
        title: '代码8.4.1',
        codes: [
          {
            language: 'Cpp',
            content:
              '// 缓存的节点信息\nstruct Node {\n    int key, val, freq;\n    Node(int _key,int _val,int _freq): key(_key), val(_val), freq(_freq){}\n};\nclass LFUCache {\n    int minfreq, capacity;\n    unordered_map<int, list<Node>::iterator> key_table;\n    unordered_map<int, list<Node>> freq_table;\npublic:\n    LFUCache(int _capacity) {\n        minfreq = 0;\n        capacity = _capacity;\n        key_table.clear();\n        freq_table.clear();\n    }\n    \n    int get(int key) {\n        if (capacity == 0) return -1;\n        auto it = key_table.find(key);\n        if (it == key_table.end()) return -1;\n        list<Node>::iterator node = it -> second;\n        int val = node -> val, freq = node -> freq;\n        freq_table[freq].erase(node);\n        // 如果当前链表为空，我们需要在哈希表中删除，且更新minFreq\n        if (freq_table[freq].size() == 0) {\n            freq_table.erase(freq);\n            if (minfreq == freq) minfreq += 1;\n        }\n        // 插入到 freq + 1 中\n        freq_table[freq + 1].push_front(Node(key, val, freq + 1));\n        key_table[key] = freq_table[freq + 1].begin();\n        return val;\n    }\n    \n    void put(int key, int value) {\n        if (capacity == 0) return;\n        auto it = key_table.find(key);\n        if (it == key_table.end()) {\n            // 缓存已满，需要进行删除操作\n            if (key_table.size() == capacity) {\n                // 通过 minFreq 拿到 freq_table[minFreq] 链表的末尾节点\n                auto it2 = freq_table[minfreq].back();\n                key_table.erase(it2.key);\n                freq_table[minfreq].pop_back();\n                if (freq_table[minfreq].size() == 0) {\n                    freq_table.erase(minfreq);\n                }\n            } \n            freq_table[1].push_front(Node(key, value, 1));\n            key_table[key] = freq_table[1].begin();\n            minfreq = 1;\n        } else {\n            // 与 get 操作基本一致，除了需要更新缓存的值\n            list<Node>::iterator node = it -> second;\n            int freq = node -> freq;\n            freq_table[freq].erase(node);\n            if (freq_table[freq].size() == 0) {\n                freq_table.erase(freq);\n                if (minfreq == freq) minfreq += 1;\n            }\n            freq_table[freq + 1].push_front(Node(key, value, freq + 1));\n            key_table[key] = freq_table[freq + 1].begin();\n        }\n    }\n};\n'
          },
          {
            language: 'Java',
            content:
              'class LFUCache {\n  Map<Integer, Node> cache; // 存储缓存的内容\n  Map<Integer, DoublyLinkedList> freqMap; // 存储每个频次对应的双向链表\n  int size;\n  int capacity;\n  int min; // 存储当前最小频次\n\n  public LFUCache(int capacity) {\n      cache = new HashMap<> (capacity);\n      freqMap = new HashMap<>();\n      this.capacity = capacity;\n  }\n  \n  public int get(int key) {\n      Node node = cache.get(key);\n      if (node == null) {\n          return -1;\n      }\n      freqInc(node);\n      return node.value;\n  }\n  \n  public void put(int key, int value) {\n      if (capacity == 0) {\n          return;\n      }\n      Node node = cache.get(key);\n      if (node != null) {\n          node.value = value;\n          freqInc(node);\n      } else {\n          if (size == capacity) {\n              DoublyLinkedList minFreqLinkedList = freqMap.get(min);\n              cache.remove(minFreqLinkedList.tail.pre.key);\n              minFreqLinkedList.removeNode(minFreqLinkedList.tail.pre); // 这里不需要维护min, 因为下面add了newNode后min肯定是1.\n              size--;\n          }\n          Node newNode = new Node(key, value);\n          cache.put(key, newNode);\n          DoublyLinkedList linkedList = freqMap.get(1);\n          if (linkedList == null) {\n              linkedList = new DoublyLinkedList();\n              freqMap.put(1, linkedList);\n          }\n          linkedList.addNode(newNode);\n          size++;  \n          min = 1;   \n      }\n  }\n\n  void freqInc(Node node) {\n      // 从原freq对应的链表里移除, 并更新min\n      int freq = node.freq;\n      DoublyLinkedList linkedList = freqMap.get(freq);\n      linkedList.removeNode(node);\n      if (freq == min && linkedList.head.post == linkedList.tail) { \n          min = freq + 1;\n      }\n      // 加入新freq对应的链表\n      node.freq++;\n      linkedList = freqMap.get(freq + 1);\n      if (linkedList == null) {\n          linkedList = new DoublyLinkedList();\n          freqMap.put(freq + 1, linkedList);\n      }\n      linkedList.addNode(node);\n  }\n}\n\nclass Node {\n  int key;\n  int value;\n  int freq = 1;\n  Node pre;\n  Node post;\n\n  public Node() {}\n  \n  public Node(int key, int value) {\n      this.key = key;\n      this.value = value;\n  }\n}\n\nclass DoublyLinkedList {\n  Node head;\n  Node tail;\n\n  public DoublyLinkedList() {\n      head = new Node();\n      tail = new Node();\n      head.post = tail;\n      tail.pre = head;\n  }\n\n  void removeNode(Node node) {\n      node.pre.post = node.post;\n      node.post.pre = node.pre;\n  }\n\n  void addNode(Node node) {\n      node.post = head.post;\n      head.post.pre = node;\n      head.post = node;\n      node.pre = head;\n  }\n}\n'
          },
          {
            language: 'Py',
            content:
              'import collections\n\n\nclass Node:\n    def __init__(self, key: int, val: int):\n        self.key = key\n        self.val = val\n        self.freq = 1\n        self.prev = self.next = None\n\n\nclass DLinkedList:\n    def __init__(self):\n        self._sentinel = Node(None, None)\n        self._sentinel.next = self._sentinel.prev = self._sentinel\n        self._size = 0\n\n    def __len__(self):\n        return self._size\n\n    def append(self, node: Node):\n        node.next = self._sentinel.next\n        node.prev = self._sentinel\n        node.next.prev = node\n        self._sentinel.next = node\n        self._size += 1\n\n    def pop(self, node=None):\n        if self._size == 0:\n            return\n\n        if not node:\n            node = self._sentinel.prev\n        node.prev.next = node.next\n        node.next.prev = node.prev\n        self._size -= 1\n\n        return node\n\n\nclass LFUCache:\n    def __init__(self, capacity: int):\n        self._size = 0\n        self._capacity = capacity\n        self._node = dict()\n        self._freq = collections.defaultdict(DLinkedList)\n        self._minfreq = 0\n\n    def _update(self, node: Node):\n        freq = node.freq\n\n        self._freq[freq].pop(node)\n\n        if self._minfreq == freq and not self._freq[freq]:\n            self._minfreq += 1\n\n        node.freq += 1\n        freq = node.freq\n        self._freq[freq].append(node)\n\n    def get(self, key: int) -> int:\n        if key not in self._node:\n            return -1\n\n        node = self._node[key]\n        self._update(node)\n        return node.val\n\n    def put(self, key: int, value: int) -> None:\n        if self._capacity == 0:\n            return\n\n        if key in self._node:\n            node = self._node[key]\n            self._update(node)\n            node.val = value\n        else:\n            if self._size == self._capacity:\n                node = self._freq[self._minfreq].pop()\n                del self._node[node.key]\n                self._size -= 1\n\n            node = Node(key, value)\n            self._node[key] = node\n            self._freq[1].append(node)\n            self._minfreq = 1\n            self._size += 1\n\n'
          }
        ]
      },
      {
        title: '代码8.5.1',
        codes: [
          {
            language: 'Cpp',
            content:
              'const int MAX_LEVEL=10;\nclass SkipNode{\npublic:\n    int val;\n    int level;\n    SkipNode** next;\n    SkipNode(int v,int l){\n        val=v;\n        level=l;\n        next=new SkipNode*[l+1]();\n    }\n};\n\nclass Skiplist {\nprivate:\n\npublic:\n    SkipNode* head;\n    int Listlevel;\n    Skiplist() {\n        head=new SkipNode(INT_MIN,MAX_LEVEL);\n        Listlevel=0;\n    }\n    int getlevel(){\n        int lev=0;\n        while(lev<MAX_LEVEL && lev<=Listlevel && rand()<RAND_MAX/2){\n            ++lev;                      //等级为lev的节点出现的概率为1/2^lev\n        }\n        if(Listlevel<lev)++Listlevel;   //如果新节点等级高于跳表等级，则跳表等级加一\n        return lev;\n    }\n    bool search(int target) {\n        SkipNode* sn=head;\n        int ll=Listlevel;\n        while(ll>=0){\n            while(sn->next[ll]!=nullptr && sn->next[ll]->val<=target)sn=sn->next[ll];\n            --ll;\n        }\n        if(sn->val==target)return true;\n        return false;\n    }\n    \n    void add(int num) {\n        //if(search(num))return; //一开始我没注意可以增删重复数字，所以加了这一行\n        SkipNode* sn=head;\n        int lev=getlevel();\n        int ll=Listlevel;\n        SkipNode* nsn=new SkipNode(num,lev);\n        while(ll>=0){\n            while(sn->next[ll]!=nullptr && sn->next[ll]->val<num)sn=sn->next[ll];\n            if(ll<=lev){\n                nsn->next[ll]=sn->next[ll];\n                sn->next[ll]=nsn;\n            }\n            --ll;\n        }\n    }\n    \n    bool erase(int num) {\n        if(!search(num))return false;\n        SkipNode* sn=head;\n        SkipNode* dsn;\n        int ll=Listlevel;\n        while(ll>=0){\n            while(sn->next[ll]!=nullptr && sn->next[ll]->val<num)sn=sn->next[ll];\n            if(ll==0)dsn=sn->next[ll];\n            if(sn->next[ll]!=nullptr && sn->next[ll]->val==num){\n                sn->next[ll]=sn->next[ll]->next[ll];\n            }\n            --ll;\n        }\n        if(dsn->level==Listlevel){              //如果删除的节点等级为最高等级节点，\n                                                //则检查是否为唯一最高等级节点,\n                                                //如果是，那么跳表等级减一。\n            if(head->next[Listlevel]==nullptr)--Listlevel;\n        }\n        return true;\n    }\n};\n'
          },
          {
            language: 'Java',
            content:
              'class Skiplist {\n  class SkipListNode {\n      int val;\n      int cnt;  // 当前val出现的次数\n      SkipListNode[] levels;  // start from 0\n      SkipListNode() {\n          levels = new SkipListNode[MAX_LEVEL];\n      }\n  }\n\n  private double p = 0.5;\n  private int MAX_LEVEL = 16;\n  private SkipListNode head;  // 头结点\n  private int level;  // \n  private Random random;\n\n  public Skiplist() {\n\n      level = 0;  \n      head = new SkipListNode();\n      random = new Random();\n  }\n\n  public boolean search(int target) {\n      SkipListNode curNode = head;\n      for (int i = level-1; i >= 0; i--) {\n          while (curNode.levels[i] != null && curNode.levels[i].val < target) {\n              curNode = curNode.levels[i];\n          }\n      }\n      curNode = curNode.levels[0];\n      return (curNode != null && curNode.val == target);\n  }\n\n  public void add(int num) {\n      SkipListNode curNode = head;\n      // 记录每层能访问的最右节点\n      SkipListNode[] levelTails = new SkipListNode[MAX_LEVEL];\n      for (int i = level-1; i >= 0; i--) {\n          while (curNode.levels[i] != null && curNode.levels[i].val < num) {\n              curNode = curNode.levels[i];\n          }\n          levelTails[i] = curNode;\n      }\n      curNode = curNode.levels[0];\n      if (curNode != null && curNode.val == num) {\n          // 已存在，cnt 加1\n          curNode.cnt++;\n      } else {\n          // 插入\n          int newLevel = randomLevel();\n          if (newLevel > level) {\n              for (int i = level; i < newLevel; i++) {\n                  levelTails[i] = head;\n              }\n              level = newLevel;\n          }\n          SkipListNode newNode = new SkipListNode();\n          newNode.val = num;\n          newNode.cnt = 1;\n          for (int i = 0; i < level; i++) {\n              newNode.levels[i] = levelTails[i].levels[i];\n              levelTails[i].levels[i] = newNode;\n              \n          }\n      }\n  }\n\n  private int randomLevel() {\n      int level = 1;  \n      while (random.nextDouble() < p && level < MAX_LEVEL) {\n          level++;\n      }\n      return level > MAX_LEVEL ? MAX_LEVEL : level;\n  }\n  public boolean erase(int num) {\n      SkipListNode curNode = head;\n      // 记录每层能访问的最右节点\n      SkipListNode[] levelTails = new SkipListNode[MAX_LEVEL];\n\n      for (int i = level-1; i >= 0; i--) {\n          while (curNode.levels[i] != null && curNode.levels[i].val < num) {\n              curNode = curNode.levels[i];\n          }\n          levelTails[i] = curNode;\n      }\n      curNode = curNode.levels[0];\n      if (curNode != null && curNode.val == num) {\n          if (curNode.cnt > 1) {\n              curNode.cnt--;\n              return true;\n          }\n          for (int i = 0; i < level; i++) {\n              if (levelTails[i].levels[i] != curNode) {\n                  break;\n              }\n              levelTails[i].levels[i] = curNode.levels[i];\n          }\n          while (level > 0 && head.levels[level-1] == null) {\n              level--;\n          }\n          return true;\n      } \n      return false;\n  }\n}\n'
          },
          {
            language: 'Py',
            content:
              'from typing import Optional\nimport random\n\n\nclass ListNode:\n    def __init__(self, data: Optional[int] = None):\n        self._data = data\n        self._forwards = []\n\n\nclass Skiplist:\n\n    _MAX_LEVEL = 16\n\n    def __init__(self):\n        self._level_count = 1\n        self._head = ListNode()\n        self._head._forwards = [None] * self._MAX_LEVEL\n\n    def search(self, target: int) -> bool:\n        p = self._head\n        for i in range(self._level_count - 1, -1, -1):\n            while p._forwards[i] and p._forwards[i]._data < target:\n                p = p._forwards[i]\n\n        if p._forwards[0] and p._forwards[0]._data == target:\n            return True\n\n        return False\n\n    def add(self, num: int) -> None:\n        level = self._random_level()\n        if self._level_count < level:\n            self._level_count = level\n        new_node = ListNode(num)\n        new_node._forwards = [None] * level\n        update = [self._head] * self._level_count\n\n        p = self._head\n        for i in range(self._level_count - 1, -1, -1):\n            while p._forwards[i] and p._forwards[i]._data < num:\n                p = p._forwards[i]\n\n            update[i] = p\n\n        for i in range(level):\n            new_node._forwards[i] = update[i]._forwards[i]\n            update[i]._forwards[i] = new_node\n\n    def erase(self, num: int) -> bool:\n        update = [None] * self._level_count\n        p = self._head\n        for i in range(self._level_count - 1, -1, -1):\n            while p._forwards[i] and p._forwards[i]._data < num:\n                p = p._forwards[i]\n            update[i] = p\n\n        if p._forwards[0] and p._forwards[0]._data == num:\n            for i in range(self._level_count - 1, -1, -1):\n                if update[i]._forwards[i] and update[i]._forwards[i]._data == num:\n                    update[i]._forwards[i] = update[i]._forwards[i]._forwards[i]\n            return True\n\n        while self._level_count > 1 and not self._head._forwards[self._level_count]:\n            self._level_count -= 1\n\n        return False\n\n    def _random_level(self, p: float = 0.5) -> int:\n        level = 1\n        while random.random() < p and level < self._MAX_LEVEL:\n            level += 1\n        return level\n\n\n# Your Skiplist object will be instantiated and called as such:\n# obj = Skiplist()\n# param_1 = obj.search(target)\n# obj.add(num)\n# param_3 = obj.erase(num)\n\n'
          }
        ]
      }
    ]
  },
  {
    id: '09',
    name: '第九章',
    list: [
      {
        title: '代码9.1.1.1.two',
        codes: [
          {
            language: 'Cpp',
            content:
              'class Solution {\npublic:\n    vector<int> twoSum(vector<int>& numbers, int target) {\n        vector<int> ret;\n        for (int i = 0; i <= numbers.size() - 1 - 1; i++) {\n            for (int j = i + 1; j <= numbers.size() - 1; j++) {\n                if (numbers[i] + numbers[j] == target) {\n                    ret.push_back(i + 1);\n                    ret.push_back(j + 1);\n                }\n            }\n        }\n        return ret;\n    }\n};\n\n'
          },
          {
            language: 'Java',
            content:
              'class Solution {\n    public int[] twoSum(int[] nums, int target) {\n        for (int i = 0; i < nums.length; i++) {\n            for (int j = i + 1; j < nums.length; j++) {\n                if (nums[j] == target - nums[i])\n                    return new int[]{i+1, j+1};\n            }\n        }\n        return null;\n    }\n}\n'
          },
          {
            language: 'Py',
            content:
              'class Solution:\n    def twoSum(self, numbers:List[int], target:int)->List[int]:\n        for i in range(0, len(numbers), 1):\n            for j in range(i + 1, len(numbers), 1):\n                if numbers[i] + numbers[j] == target:\n                    return [i + 1, j + 1]\n\n        return []\n'
          }
        ]
      },
      {
        title: '代码9.1.1.2.two',
        codes: [
          {
            language: 'Cpp',
            content:
              'class Solution {\npublic:\n    vector<int> twoSum(vector<int>& numbers, int target) {\n        for (int left = 0, right = numbers.size() - 1; left < right; ){\n            if (numbers[left] + numbers[right] == target)\n                return vector<int>{left + 1, right + 1};\n            else if (numbers[left] + numbers[right] < target)\n                left++;\n            else\n                right--;\n        }\n        return vector<int>{};\n    }\n};\n\n'
          },
          {
            language: 'Java',
            content:
              'class Solution {\n    public int[] twoSum(int[] nums, int target) {\n        int left = 0, right = nums.length - 1;\n        while (left < right) {\n            if (nums[left] + nums[right] == target)\n                return new int[]{left + 1, right + 1};\n            else if (nums[left] + nums[right] < target)\n                left++;\n            else\n                right--;\n        }\n        return null;\n    }\n}\n'
          },
          {
            language: 'Py',
            content:
              'class Solution:\n    def twoSum(self, number:List[int], target:int)->List[int]:\n        left, right = 0, len(numbers) - 1\n        while left < right:\n            if (numbers[left] + numbers[right] == target):\n                return [left + 1, right + 1]\n            elif (numbers[left] + numbers[right] < target):\n                left += 1\n            elif:\n                right -= 1\n\n        return []\n\n'
          }
        ]
      },
      {
        title: '代码9.1.2.1.container',
        codes: [
          {
            language: 'Cpp',
            content:
              'class Solution {\npublic:\n    int maxArea(vector<int>& height) {\n        int res = 0;\n        int area = 0;\n        for (int i = 0; i < height.size() - 1; i++)\n            for (int j = i + 1; j < height.size(); j++) {\n                area = (j - i) * min(height[i], height[j]);\n                if (area > res)\n                    res = area;\n            }\n        \n        return res;\n    }\n};\n\n'
          },
          {
            language: 'Java',
            content:
              'class Solution {\n    public int maxArea(int[] height) {  \n        int res = 0, area = 0;\n        for (int i = 0; i < height.length; i++) {\n            for (int j = i + 1; j < height.length; j++) {\n                area = Math.min(height[i], height[j]) * (j - i);\n                res = Math.max(res, area);\n            }\n        }\n        return res;\n    }\n}\n'
          },
          {
            language: 'Py',
            content:
              'class Solution :\n    def maxArea(self, height:List[int])->int:\n        res, area = 0, 0\n        for i in range(0, len(height), 1):\n            fo j in range(i + 1, len(height), 1):\n                area = (j - i) * min(height[i], height[j])\n                if area > res:\n                    res = area\n\n        return res\n    \n\n'
          }
        ]
      },
      {
        title: '代码9.1.2.2.container',
        codes: [
          {
            language: 'Cpp',
            content:
              'class Solution {\npublic:\n    int maxArea(vector<int>& height) {\n        int res = 0;\n        int area = 0;\n        int left = 0, right = height.size() - 1;\n        \n        while(left < right) {\n            area = (right - left) * min(height[right], height[left]);\n            res  = max(res, area);\n            if (height[left] < height[right])\n                left++;\n            else\n                right--;\n        }\n        \n        return res;\n    }\n};\n\n'
          },
          {
            language: 'Java',
            content:
              'class Solution {\n    public int maxArea(int[] height) {\n        int left = 0, right = height.length - 1, res = 0, area = 0;\n\n        while (left < right) {\n            area = Math.min(height[left], height[right]) * (right - left);\n            res = Math.max(res, area);\n            if (height[left] < height[right])\n                left++;\n            else\n                right++;\n        }\n        return res;\n    }\n}\n'
          },
          {
            language: 'Py',
            content:
              'class Solution:\n    def maxArea(self, height:List[int])->int:\n        #init the param\n        left, right, width, res = 0, len(height) - 1, len(height - 1, 0)\n\n        for w in range(width, 0, -1):\n            if height[left] < height[right]:\n                res, left = max(res, height[left] * w), left + 1\n            else:\n                res, right = max(res, height[right] * w), right - 1\n\n        return res\n\n'
          }
        ]
      },
      {
        title: '代码9.2.1.1.linked',
        codes: [
          {
            language: 'Cpp',
            content:
              '/**\n * Definition for singly-linked list.\n * struct ListNode {\n *     int val;\n *     ListNode *next;\n *     ListNode(int x) : val(x), next(NULL) {}\n * };\n */\nclass Solution {\npublic:\n    bool hasCycle(ListNode *head) {\n        unordered_set<ListNode *> seenNode;\n        while (head) {\n            if (seenNode.find(head) != seenNode.end())\n                return true;\n            seenNode.insert(head);\n            head = head->next;\n        }\n        return false;  \n    }\n};\n\n'
          },
          {
            language: 'Java',
            content:
              '/**\n * Definition for singly-linked list.\n * class ListNode {\n *     int val;\n *     ListNode next;\n *     ListNode(int x) {\n *         val = x;\n *         next = null;\n *     }\n * }\n */\npublic class Solution {\n    public boolean hasCycle(ListNode head) {\n        if (head == null || head.next == null)\n            return false;\n        Set<ListNode> set = new HashSet<>();\n        ListNode node = head;\n        while (node.next != null) {\n            node = node.next;\n            if (set.contains(node))\n                return true;\n            else\n                set.add(node);\n        }\n        return false;\n    }\n}\n'
          },
          {
            language: 'Py',
            content:
              'class Solution:\n    def hasCycle(self, head:ListNode)->bool:\n        if head is None:\n            return False\n\n        node_set = {}\n        while head.next:\n            node_set[head] = True\n\n            if head.next in node_set:\n                return True\n\n            head = head.next\n\n        return False\n\n'
          }
        ]
      },
      {
        title: '代码9.2.1.2.linked',
        codes: [
          {
            language: 'Cpp',
            content:
              '/**\n * Definition for singly-linked list.\n * struct ListNode {\n *     int val;\n *     ListNode *next;\n *     ListNode(int x) : val(x), next(NULL) {}\n * };\n */\nclass Solution {\npublic:\n    bool hasCycle(ListNode *head) {\n        if(head == NULL || head->next == NULL)\n            return false;\n        \n        ListNode *p1List = head;\n        ListNode *p2List = head;\n        \n        while(p2List != NULL && p2List->next != NULL){\n            p1List = p1List->next;\n            p2List = p2List->next->next;\n            \n            if (p1List == p2List)\n                return true;\n        }\n        \n        return false;\n    }\n};\n\n'
          },
          {
            language: 'Java',
            content:
              '/**\n * Definition for singly-linked list.\n * class ListNode {\n *     int val;\n *     ListNode next;\n *     ListNode(int x) {\n *         val = x;\n *         next = null;\n *     }\n * }\n */\npublic class Solution {\n    public boolean hasCycle(ListNode head) {\n        if (head == null || head.next == null)\n            return false;\n\n        ListNode fast = head, slow = head;\n        while (fast.next != null) {\n            fast = fast.next;\n            if (fast == slow)\n                return true;\n            else {\n                if (fast.next == null)\n                    return false;\n                fast = fast.next;\n                slow = slow.next;\n            }\n        }\n        return false;\n    }\n}\n'
          },
          {
            language: 'Py',
            content:
              'class Solution:\n    def hasCycle(self, head:ListNode)->bool:\n        if head == None or head.next == None:\n            return False\n\n        pslow = pfast = head\n        while pfast != None and pfast.next != None:\n            pslow = pslow.next\n            pfast = pfast.next.next\n            if pfast == pslow:\n                break\n\n        if pfast == None or pfast.next == None:\n            return False\n        elif pfast == pslow:\n            return True\n\n        return False\n\n'
          }
        ]
      },
      {
        title: '代码9.2.2.1.long',
        codes: [
          {
            language: 'Java',
            content:
              'class Solution {\n    public int lengthOfLongestSubstring(String s) {\n        int res = 0;\n        for (int i = 0; i < s.length(); i++) {\n            for (int j = i; j < s.length(); j++) {\n                String tmp = s.substring(i, j + 1);\n                if (allUnique(tmp))\n                    res = Math.max(res, 1 + j - i);\n            }\n        }\n        return res;\n    }\n\n    public boolean allUnique(String s) {\n        Set<Character> set = new HashSet<>();\n        for (int i = 0; i < s.length(); i++) {\n            if (set.contains(s.charAt(i)))\n                return false;\n            else\n                set.add(s.charAt(i));\n        }\n        return true;\n    }\n}\n'
          },
          {
            language: 'Py',
            content:
              'class Solution:\n    def allUnique(self, s:str)->bool:\n        dic = {}\n        for i in range(0, len(s), 1):\n            if s[i] in dic:\n                return False\n            else:\n                dic[s[i]] = 1\n\n        return True\n\n    def lengthOfLongestSubstring(self, s:str)->int:\n        res = 0\n\n        for i in range(0, len(s), 1):\n            for j in range(0, len(s), 1):\n                if self.allUnique(s[i : j + 1]):\n                    res = max(res, j - i + 1)\n                else:\n                    break\n\n        return res\n\n'
          }
        ]
      },
      {
        title: '代码9.2.2.2.long',
        codes: [
          {
            language: 'Cpp',
            content:
              'class Solution {\npublic:\n    int lengthOfLongestSubstring(string s) {\n            int res = 0, left = 0, right = 0;\n            unordered_set<char> setting;\n\n            for (left = 0; left < s.size(); left++) {\n                right = left;\n                while (right < s.size()) {\n                    if (setting.find(s[right]) != setting.end()) { //has the char\n                        break;\n                    } else { // donnot has the char\n                        setting.insert(s[right]);\n                        res = max(res, right - left + 1);\n                        right++;\n                    }\n                }\n                setting.clear();\n            }\n\n            return res;\n    }\n};\n\n'
          },
          {
            language: 'Java',
            content:
              'class Solution {\n    public int lengthOfLongestSubstring(String s) {\n        int res = 0;\n        for (int left = 0; left < s.length(); left++) {\n            Set<Character> set = new HashSet<>();\n            int right = left;\n            while (right < s.length()) {\n                if (set.contains(s.charAt(right)))\n                    break;\n                else {\n                    set.add(s.charAt(right));\n                    res = Math.max(res, right - left + 1);\n                    right++;\n                }\n            }\n        }\n        return res;\n    }\n}\n'
          },
          {
            language: 'Py',
            content:
              'class Solution:\n    def lengthofLongestSubstring(self, s:str)->int:\n        res, left, right = 0, 0, 0\n        settings = set()\n\n        for left in range(0, len(s), 1):\n            right = left\n            while (right < len(s)):\n                if (s[right] in settings):\n                    break\n                else:\n                    settings.add(s[right])\n                    res = max(res, right - left + 1)\n                    right = right + 1\n\n            settings.clear()\n\n        return res\n\n'
          }
        ]
      },
      {
        title: '代码9.2.2.3.long',
        codes: [
          {
            language: 'Cpp',
            content:
              'class Solution {\npublic:\n    int lengthOfLongestSubstring(string s) {\n            int res = 0, left = 0, right = 0;\n            unordered_set<char> setting;\n\n            while (right < s.size()) {\n                if (setting.find(s[right]) != setting.end()) {\n                    while(left < right) {\n                        if (s[left] == s[right]) {\n                            setting.erase(s[left]);\n                            left++;\n                            break;\n                        } else {\n                            setting.erase(s[left]);\n                            left++;\n                        }\n                    }\n                }\n                setting.insert(s[right]);\n                res = max(res, right - left + 1);\n                right++;\n            }\n            return res;\n    }\n};\n\n'
          },
          {
            language: 'Java',
            content:
              'class Solution {\n    public int lengthOfLongestSubstring(String s) {\n        int res = 0, left = 0, right = 0;\n        Set<Character> set = new HashSet<>();\n        while (right < s.length()) {\n            if (set.contains(s.charAt(right)))\n                while (left < right) {\n                    if (s.charAt(left) == s.charAt(right)) {\n                        set.remove(s.charAt(left));\n                        left++;\n                        break;\n                    }\n                    set.remove(s.charAt(left));\n                    left++;\n                }\n\n            set.add(s.charAt(right));\n            res = Math.max(res, right - left + 1);\n            right++;\n        }\n\n        return res;\n    }\n}\n'
          },
          {
            language: 'Py',
            content:
              'class Solution:\n    def lengthOflongestSubstring(self, s:str)->int:\n        res, left, right = 0, 0, 0\n        settings = set()\n\n        while right < len(s):\n            if s[right] in settings:\n                while left < right:\n                    if s[left] == s[right]:\n                        settings.discar(s[left])\n                        left = left + 1\n                        break\n                    else:\n                        settings.discard(s[left])\n                        left = left + 1\n\n            settings.add(s[right])\n            res = max(res, right - left + 1)\n            right = right + 1\n\n        return res\n\n'
          }
        ]
      },
      {
        title: '代码9.2.2.4.long',
        codes: [
          {
            language: 'Cpp',
            content:
              'class Solution {\npublic:\n    int lengthOfLongestSubstring(string s) {\n            int res = 0, left = 0, right = 0;\n            int charset[256] = {-1};\n\n            while (right < s.size() && left + res < s.size()) {\n                left = max(left, charset[s[right]]);\n                res  = max(res, right - left + 1);\n                charset[s[right]] = right + 1;\n                right++;\n            }\n\n            return res;\n        }\n};\n\n'
          },
          {
            language: 'Java',
            content:
              'class Solution {\n    public int lengthOfLongestSubstring(String s) {\n        int res = 0, left = 0, right = 0;\n        Map<Character, Integer> map = new HashMap<>();\n        while (right < s.length() && left < s.length() - res) {\n            if (map.containsKey(s.charAt(right)))\n                left = Math.max(left, map.get(s.charAt(right)) + 1);\n\n            map.put(s.charAt(right), right);\n            res = Math.max(res, right - left + 1);\n            right++;\n        }\n\n        return res;\n    }\n}\n'
          },
          {
            language: 'Py',
            content:
              'class Solution:\n    def lengthOfLongestSubstring(self, s:str)->int:\n        res, left, right = 0, 0, 0\n        dic = {}\n\n        while right < len(s) and left + res < len(s):\n            if s[right] in dic:\n                left = max(left, dic[s[right]] + 1)\n\n            dic[s[right]] = right\n            res = max(res, right - left + 1)\n            right = right + 1\n\n        return res\n\n'
          }
        ]
      }
    ]
  },
  {
    id: '10',
    name: '第十章',
    list: [
      {
        title: '代码10.1.1',
        codes: [
          {
            language: 'Cpp',
            content:
              'class Solution {\n    public:\n        int climbStairs(int n) {\n            if (n == 1) return 1;\n\n            int dp[n + 1];\n            dp[1] = 1;\n            dp[2] = 2;\n\n            for (int i = 3; i <= n; i++)\n                dp[i] = dp[i - 1] + dp[i - 2];\n\n            return dp[n];\n        }\n};\n\n'
          },
          {
            language: 'Java',
            content:
              'package ch10.code;\n\npublic class ClimbingStairs {\n    public int climbStairs(int n) {\n        if (n < 3)\n            return n;\n\n        int first = 1,second = 2;\n\n        for (int i = 3; i < n + 1; i++) {\n            second = first + second;\n            first = second - first;\n        }\n        return second;\n    }\n}\n'
          },
          {
            language: 'Py',
            content:
              'class Solution:\n    def climbStairs(self, n: int) -> int:\n        if n < 2:\n            return n\n        dp = [0] * (n + 1)\n        dp[1], dp[2] = 1, 2\n        for i in range(3, n + 1):\n            dp[i] = dp[i - 1] + dp[i - 2]\n        return dp[n]\n\n'
          }
        ]
      },
      {
        title: '代码10.1.2',
        codes: [
          {
            language: 'Cpp',
            content:
              'class Solution {\n    public:\n        int climbStairs(int n) {\n            if (n < 2) return n;\n            \n            int first  = 1;\n            int second = 2;\n\n            for (int i = 3; i < n + 1; i++) {\n                second = first + second;\n                first  = second - first;\n            }\n\n            return second;\n        }\n};\n\n'
          },
          {
            language: 'Java',
            content:
              'package ch10.code;\n\npublic class ClimbingStairs {\n    public int climbStairs(int n) {\n        if (n < 3)\n            return n;\n\n        int[] dp = new int[n + 1];\n        dp[1] = 1;\n        dp[2] = 2;\n        for (int i = 3; i < n+1; i++) {\n            dp[i] = dp[i - 1] + dp[i - 2];\n        }\n        return dp[n];\n    }\n}\n'
          },
          {
            language: 'Py',
            content:
              'class Solution:\n    def climbStairs(self, n: int) -> int:\n        if n < 2:\n            return n\n        first, second = 1, 2\n        for i in range(3, n + 1):\n            # third = first + second\n            # first = second\n            # second = third\n            second = first + second\n            first = second - first\n        return second\n\n'
          }
        ]
      },
      {
        title: '代码10.2.1',
        codes: [
          {
            language: 'Py',
            content:
              'from typing import List\n\n\nclass Solution:\n    def rob(self, nums: List[int]) -> int:\n        if len(nums) <= 0:\n            return 0\n        return max(self.rob(nums[1:]), nums[0] + self.rob(nums[2:]))\n\n'
          },
          {
            language: 'Py',
            content:
              'from typing import List\n\n\nclass Solution:\n    def rob(self, nums: List[int]) -> int:\n        memo = [-1 for x in range(len(nums) + 1)]\n        memo[-1] = 0\n\n        return self.helper(0, nums, memo)\n\n    def helper(self, n: int, nums: List[int], memo: List[int]) -> int:\n        if n >= len(nums):\n            return 0\n        if memo[n] != -1:\n            return memo[n]\n\n        memo[n] = max(\n            self.helper(n + 1, nums, memo), self.helper(n + 2, nums, memo) + nums[n],\n        )\n        return memo[n]\n\n'
          },
          {
            language: 'Py',
            content:
              'from typing import List\n\n\nclass Solution:\n    def rob(self, nums: List[int]) -> int:\n        if not nums:\n            return 0\n        memo = [0 for x in range(len(nums) + 1)]\n        memo[-2] = nums[-1]\n\n        for i in range(len(nums) - 2, -1, -1):\n            memo[i] = max(memo[i + 1], memo[i + 2] + nums[i])\n\n        return memo[0]\n\n'
          },
          {
            language: 'Py',
            content:
              'from typing import List\n\n\nclass Solution:\n    def rob(self, nums: List[int]) -> int:\n\n        prev = 0\n        curr = 0\n\n        for i in range(len(nums) - 1, -1, -1):\n            temp = curr\n            curr = max(curr, nums[i] + prev)\n            prev = temp\n\n        return curr\n\n'
          }
        ]
      },
      {
        title: '代码10.2.2',
        codes: [
          {
            language: 'Py',
            content:
              'from typing import List\n\n\nclass Solution:\n    def rob(self, nums: List[int]) -> int:\n        if len(nums) == 1:\n            return nums[0]\n        prev = 0\n        curr = 0\n\n        for i in range(len(nums) - 1):\n            temp = curr\n            curr = max(curr, nums[i] + prev)\n            prev = temp\n\n        res = curr\n\n        prev = 0\n        curr = 0\n\n        for i in range(1, len(nums)):\n            temp = curr\n            curr = max(curr, nums[i] + prev)\n            prev = temp\n\n        return max(res, curr)\n\n'
          }
        ]
      },
      {
        title: '代码10.3.1',
        codes: [
          {
            language: 'Cpp',
            content:
              '#include <cstdlib>\n\nclass Solution {\npublic:\n  int uniquePaths(int m, int n) {\n    int **d = (int **)malloc(m * sizeof(int *));\n    for (int i = 0; i < m; i++) {\n      d[i] = (int *)malloc(n * sizeof(int));\n      for (int j = 0; j < n; j++) d[i][j] = 1;\n    }\n    for (int col = 1; col < m; col++)\n      for (int row = 1; row < n; row++)\n        d[col][row] = d[col - 1][row] + d[col][row - 1];\n    int ans = d[m - 1][n - 1];\n    for (int i = 0; i < m; i++) free(d[i]);\n    free(d);\n    return ans;\n  }\n};\n\n'
          },
          {
            language: 'Java',
            content:
              'public class Solution {\n  public int uniquePaths(int m, int n) {\n    int[][] d = new int[m][n];\n    for (int i = 0; i < m; i++)\n      for (int j = 0; j < n; j++) d[i][j] = 1;\n    for (int col = 1; col < m; col++)\n      for (int row = 1; row < n; row++)\n        d[col][row] = d[col - 1][row] + d[col][row - 1];\n    return d[m - 1][n - 1];\n  }\n}\n\n'
          },
          {
            language: 'Py',
            content:
              'class Solution:\n    def uniquePaths(self, m: int, n: int) -> int:\n        d = [[1] * n for _ in range(m)]\n\n        for col in range(1, m):\n            for row in range(1, n):\n                d[col][row] = d[col - 1][row] + d[col][row - 1]\n\n        return d[m - 1][n - 1]\n\n'
          }
        ]
      },
      {
        title: '代码10.3.2',
        codes: [
          {
            language: 'Cpp',
            content:
              '#include <cstdlib>\n\nclass Solution {\npublic:\n  int uniquePaths(int m, int n) {\n    int *dp = (int *)malloc(n * sizeof(int));\n    for (int i = 0; i < n; i++) dp[i] = 1;\n    for (int i = 1; i < m; i++)\n      for (int j = 1; j < n; j++)\n        dp[j] += dp[j - 1];\n    int ans = dp[n - 1];\n    free(dp);\n    return ans;\n  }\n};\n\n'
          },
          {
            language: 'Java',
            content:
              'public class Solution {\n  public int uniquePaths(int m, int n) {\n    int[] dp = new int[n];\n    for (int i = 0; i < n; i++) dp[i] = 1;\n    for (int i = 1; i < m; i++)\n      for (int j = 1; j < n; j++)\n        dp[j] += dp[j - 1];\n    return dp[n - 1];\n  }\n}\n\n'
          },
          {
            language: 'Py',
            content:
              'class Solution:\n    def uniquePaths(self, m: int, n: int) -> int:\n        dp = [1] * n\n        for _ in range(1, m):\n            for j in range(1, n):\n                dp[j] += dp[j - 1]\n        return dp[n - 1]\n\n'
          }
        ]
      },
      {
        title: '代码10.3.3',
        codes: [
          {
            language: 'Cpp',
            content:
              '#include <utility>\n#include <map>\nusing namespace std;\n\nclass Solution {\npublic:\n  map<pair<int, int>, int> visited;\n  int uniquePaths(int m, int n) {\n    if (visited.count(make_pair(m, n)))\n      return visited[make_pair(m, n)];\n    if (m == 1 || n == 1) return 1;\n    int cnt = uniquePaths(m - 1, n) + \\\n              uniquePaths(m, n - 1);\n    return visited[make_pair(m, n)] = cnt;\n  }\n};\n\n'
          },
          {
            language: 'Java',
            content:
              'import java.util.*;\n\npublic class Solution {\n  public class Pair {\n    public final int first;\n    public final int second;\n    public Pair(int x, int y) {\n      this.first = x;\n      this.second = y;\n    }\n  }\n  public Pair make_pair(int x, int y) {\n    Pair buf = new Pair(x, y);\n    return buf;\n  }\n  public Map<Pair, Integer> visited;\n  public Solution() {\n    this.visited = new HashMap<Pair, Integer>();\n  }\n  int uniquePaths(int m, int n) {\n    if (visited.get(make_pair(m, n)) != null)\n      return visited.get(make_pair(m, n));\n    if (m == 1 || n == 1) return 1;\n    int cnt = uniquePaths(m - 1, n) +\n      uniquePaths(m, n - 1);\n    visited.put(make_pair(m, n), cnt);\n    return cnt;\n  }\n}\n\n'
          },
          {
            language: 'Py',
            content:
              'class Solution:\n    visited = dict()\n\n    def uniquePaths(self, m: int, n: int) -> int:\n        if (m, n) in self.visited:\n            return self.visited[(m, n)]\n        if m == 1 or n == 1:\n            return 1\n        cnt = self.uniquePaths(m - 1, n) + self.uniquePaths(m, n - 1)\n        self.visited[(m, n)] = cnt\n        return cnt\n\n'
          }
        ]
      },
      {
        title: '代码10.4.1',
        codes: [
          {
            language: 'Cpp',
            content:
              'class Solution {\npublic:\n    int coinChange(vector<int>& coins, int amount) {\n        int Max = amount + 1;\n        vector<int> dp(amount + 1, Max);\n        dp[0] = 0;\n        \n        for (int i = 1; i <= amount; i++) {\n            for (int j = 0; j < coins.size(); j++) {\n                if (coins[j] <= i) {\n                    dp[i] = min(dp[i], dp[i - coins[j]] + 1);\n                }\n            }\n        }\n        \n        return dp[amount] > amount ? -1 : dp[amount];\n    }\n};\n\n'
          },
          {
            language: 'Java',
            content:
              'import java.util.Arrays;\npublic class CoinChange {\n    public int coinChange(int[] coins, int amount) {\n        if (amount == 0)\n            return 0;\n\n        int[] dp = new int[amount + 1];\n        Arrays.fill(dp, amount + 1);\n        dp[0] = 0;\n\n        for (int i = 1; i < amount + 1; i++) {\n            for (int coin : coins) {\n                if (coin <= i) {\n                    dp[i] = Math.min(dp[i], dp[i - coin] + 1);\n                }\n            }\n        }\n        return dp[amount] == amount + 1 ? -1 : dp[amount];\n    }\n}\n'
          },
          {
            language: 'Py',
            content:
              'from typing import List\n\n\nclass Solution:\n    def coinChange(self, coins: List[int], amount: int) -> int:\n        if amount == 0:\n            return 0\n        # use amount + 1 to indicate bigger than any\n        dp = [amount + 1] * (amount + 1)\n        dp[0] = 0\n        for i in range(1, amount + 1):\n            for coin in coins:\n                if coin <= i:\n                    dp[i] = min(dp[i], dp[i - coin] + 1)\n        return -1 if dp[amount] == (amount + 1) else dp[amount]\n\n'
          }
        ]
      },
      {
        title: '代码10.4.2',
        codes: [
          {
            language: 'Cpp',
            content:
              'class Solution {\npublic:\n    int change(int amount, vector<int>& coins) {\n        vector<int> dp(amount + 1, 0);\n        dp[0]  = 1;\n        \n        for (int coin: coins) {\n            for (int i = coin; i < amount + 1; i++)\n                dp[i] += dp[i - coin];\n        }\n        \n        return dp[amount];\n    }\n};\n\n'
          },
          {
            language: 'Java',
            content:
              'import java.util.Arrays;\n\npublic class CoinChange2 {\n    public int change(int amount, int[] coins) {\n        int[] dp = new int[amount + 1];\n        dp[0] = 1;\n        for (int coin : coins) {\n            if (coin > amount)\n                continue;\n            for (int i = coin; i < amount + 1; i++) {\n                dp[i] += dp[i - coin];\n            }\n        }\n        return dp[amount];\n    }\n}\n'
          },
          {
            language: 'Py',
            content:
              'from typing import List\n\n\nclass Solution:\n    def change(self, amount: int, coins: List[int]) -> int:\n        dp = [0] * (amount + 1)\n        dp[0] = 1\n        for coin in coins:\n            for x in range(coin, amount + 1):\n                dp[x] += dp[x - coin]\n        return dp[amount]\n\n'
          }
        ]
      }
    ]
  },
  {
    id: '11',
    name: '第十一章',
    list: [
      {
        title: '代码11.1.1',
        codes: [
          {
            language: 'Cpp',
            content:
              'class Solution {\npublic:\n    vector<int> maxSlidingWindow(vector<int>& nums, int k) {\n        vector<int> res = {};\n        \n        int length = nums.size();\n        if (length * k == 0)\n            return res;\n        \n        for (int i = 0; i < length - k + 1; i++) {\n            int max_val = INT_MIN;\n            \n            for (int j = i; j < i + k; j++) {\n                max_val = max(max_val, nums[j]);\n            }\n            \n            res.push_back(max_val);\n        }\n        \n        return res;\n    }\n};\n\n'
          },
          {
            language: 'Java',
            content:
              'class Solution {\n    public int[] maxSlidingWindow(int[] nums, int k) {\n        if (k == 1)\n            return nums;\n        int turn = nums.length - k + 1;\n        int[] res = new int[turn];\n        for (int i = 0; i < turn; i++) {\n            res[i] = getMax(nums, i, k);\n        }\n        return res;\n    }\n\n    private int getMax(int[] nums, int left, int k) {\n        int max = nums[left];\n        for (int i = 0; i < k-1; i++) {\n            left++;\n            max = Math.max(max, nums[left]);\n        }\n        return max;\n    }\n}\n'
          },
          {
            language: 'Py',
            content:
              'class Solution:\n    def maxSlidingWindow(self, nums:List[int], k:int)->List[int]:\n        length = len(nums)\n        if length * k == 0:\n            return []\n            \n        output = []\n        # 遍历所有可能的窗口\n        for i in range(length - k + 1):\n            max_val = -sys.maxsize - 1\n            # 找到一个窗口中的最大值\n            for j in range(i, i + k):\n                max_val = max(max_val, nums[j])\n                \n            # 将最大值放到数组列表里\n            output.append(max_val)\n            \n        return output\n\n'
          }
        ]
      },
      {
        title: '代码11.1.2',
        codes: [
          {
            language: 'Cpp',
            content:
              'class Solution {\npublic:\n    vector<int> maxSlidingWindow(vector<int>& nums, int k) {\n        vector<int> res;\n        multiset<int> mysetting;\n        for (int i = 0; i < nums.size(); i++) {\n            mysetting.insert(nums[i]);\n            if (i >= k - 1) {\n                res.push_back(*mysetting.rbegin());\n                mysetting.erase(mysetting.find(nums[i - k + 1]));\n            }\n        }\n        return res;\n    }\n};\n\n'
          },
          {
            language: 'Java',
            content:
              'class Solution {\n    public int[] maxSlidingWindow(int[] nums, int k) {\n        if (k == 1)\n            return nums;\n        int[] res = new int[nums.length - k + 1];\n\n        Deque<Integer> queue = new LinkedList<>();\n\n        for (int i = 0; i < nums.length; i++) {\n            // 从尾部开始移除比新加入元素小的元素\n            while (!queue.isEmpty() && nums[queue.getLast()] < nums[i])\n                queue.removeLast();\n            // 将新加入元素添加到双端队列的尾部\n            queue.addLast(i);\n            // 如过窗口外的元素仍然在双端队列中，将其移除\n            if (queue.getFirst() == i - k)\n                queue.removeFirst();\n            // 将头部元素即当前最大元素对应的数字放入结果数组\n            if (i - k + 1 >= 0)\n                res[i - k + 1] = nums[queue.getFirst()];\n        }\n\n        return res;\n    }\n}\n'
          },
          {
            language: 'Py',
            content:
              'class Solution:\n    def maxSlidingWindow(self, nums: List[int], k: int) -> List[int]:\n        d = collections.deque()\n        out = []\n        \n        for i, n in enumerate(nums):\n            # 移除所有比当前元素小的元素\n            while d and nums[d[-1]] < n:\n                d.pop()\n            d += i,\n            if d[0] == i - k:\n                d.popleft()\n            if i >= k - 1:\n                out.append(nums[d[0]])\n\n        return out\n\n'
          }
        ]
      },
      {
        title: '代码11.2.1',
        codes: [
          {
            language: 'Java',
            content:
              'class Solution {\n    public String minWindow(String s, String t) {\n        if (s.length() == 0 || t.length() == 0)\n            return "";\n        int left = 0, right = 0;\n        Map<Character, Integer> tMap = new HashMap<>();\n        for (char c : t.toCharArray()) {\n            tMap.put(c, tMap.getOrDefault(c, 0) + 1);\n        }\n\n        int required = tMap.keySet().size(), formed = 0;\n        Map<Character, Integer> windowMap = new HashMap<>();\n\n        // ans[0] 存放字符长度，ans[1]和ans[2]分别存放左右索引\n        int[] ans = new int[3];\n        ans[0] = Integer.MAX_VALUE;\n\n        while (right < s.length()) {\n            char character = s.charAt(right);\n            windowMap.put(character, windowMap.getOrDefault(character, 0) + 1);\n\n            if (tMap.containsKey(character) && windowMap.get(character).intValue() == tMap.get(character).intValue())\n                formed++;\n\n            while (left <= right && (formed == required)) {\n                character = s.charAt(left);\n\n                if (right - left + 1 < ans[0]) {\n                    ans = new int[]{right - left + 1, left, right};\n                }\n                windowMap.put(character, windowMap.getOrDefault(character, 1) - 1);\n\n                if (tMap.containsKey(character) && windowMap.get(character) < tMap.get(character))\n                    formed -= 1;\n\n                left++;\n            }\n            right++;\n        }\n\n        return ans[0] == Integer.MAX_VALUE ? "" : s.substring(ans[1], ans[2] + 1);\n    }\n}\n'
          },
          {
            language: 'Py',
            content:
              'class Solution:\n    def minWindow(self, s:str, t:str)->str:\n        if not t or not s:\n            return ""\n            \n        dict_t = Counter(t)\n        \n        required = len(dict_t)\n        \n        #初始化滑动窗口\n        left, right = 0, 0\n        \n        formed = 0\n        \n        window_counts = {}\n        \n        ans = float("inf"), None, None\n        \n        while right < len(s):\n            character = s[right]\n            window_counts[character] = window_counts.get(character, 0) + 1\n            \n            if character in dict_t and window_counts[character] == dict_t[character]:\n                formed += 1\n                \n            while left <= right and formed == required:\n                character = s[left]\n                \n                if right - left + 1 < ans[0]:\n                    ans = (right - left + 1, left, right)\n                    \n                window_counts[character] -= 1\n                if character in dict_t and window_counts[character] < dict_t[character]:\n                    formed -= 1\n                    \n                left += 1\n            right += 1\n                \n        if ans[0] == float("inf"):\n            return ""\n        else:\n            return s[ans[1]: ans[2] + 1]\n\n'
          }
        ]
      },
      {
        title: '代码11.2.2',
        codes: [
          {
            language: 'Cpp',
            content:
              'class Solution {\n    public:\n        string minWindow(string s, string t) {\n            if (s.size() == 0 || t.size() == 0 || t.size() > s.size())\n                return "";\n\n            vector<int> remaining(128, 0);\n            int required = t.size();\n\n            for (int i = 0; i < required; i++)\n                remaining[t[i]]++;\n\n            int min = INT_MAX, start = 0, left = 0, i = 0;\n            while (i <= s.size() && start < s.size()) {\n                if (required) {\n                    if (i == s.size())\n                        break;\n                    remaining[s[i]]--;\n                    if (remaining[s[i]] >= 0)\n                        required--;\n                    i++;\n                } else {\n                    if (i - start < min) {\n                        min = i - start;\n                        left = start;\n                    }\n                    remaining[s[start]]++;\n                    if (remaining[s[start]] > 0)\n                        required++;\n                    start++;\n                }\n            }\n\n            return min == INT_MAX ? "" : s.substr(left, min);\n        }\n};\n\n'
          },
          {
            language: 'Py',
            content:
              'class Solution:\n    def minWindow(self, s, t):\n        if not t or not s:\n            return ""\n            \n        dict_t = Counter(t)\n        \n        required = len(dict_t)\n        \n        for i, char in enumerate(s):\n            if char in dict_t:\n                filtered_s.append((i, char))\n                \n        left, right = 0, 0\n        formed = 0\n        window_counts = {}\n        \n        ans = float("inf"), None, None\n        \n        while right < len(filtered_s):\n            character = filtered_s[r][1]\n            window_counts[character] = window_counts.get(character, 0) + 1\n\n            if window_counts[character] == dict_t[character]:\n                formed += 1\n                \n            while left <= right and formed == required:\n                character = filtered_s[l][1]\n                \n                end   = filtered_s[right][0]\n                start = filtered_s[left][0]\n                if end - start + 1 < ans[0]:\n                    ans = (end - start + 1, start, end)\n                    \n                window_counts[character] -= 1\n                if window_counts[character] < dict_t[character]:\n                    formed -= 1\n                left += 1\n                \n            right += 1\n            \n        if ans[0] == float("inf"):\n            return ""\n        else:\n            return s[ans[1]:ans[2] + 1]\n\n'
          }
        ]
      },
      {
        title: '代码11.3.1',
        codes: [
          {
            language: 'Cpp',
            content:
              "class Solution {\n    public:\n        int characterReplacement(string s, int k) {\n            int res = 0, left = 0, right = 0, size = s.size(), localMaxFreq = 0;\n\n            vector<int> count(26, 0);\n            for (; right < size; right++) {\n                count[s[right] - 'A'] += 1;\n                localMaxFreq = max(localMaxFreq, count[s[right] - 'A']);\n\n                if ((right - left + 1) - localMaxFreq > k) {\n                    res = max(res, (right - left));\n                    count[s[left] - 'A'] -= 1;\n                    left += 1;\n                    localMaxFreq = *(max_element(count.begin(), count.end()));\n                }\n            }\n\n            return max(res, right - left);\n        }\n};\n\n"
          },
          {
            language: 'Java',
            content:
              "class Solution {\n    public int characterReplacement(String s, int k) {\n        int res = 0, left = 0, right = 0;\n        int[] counts = new int[26];\n\n        while( right < s.length()) {\n            counts[s.charAt(right) - 'A']++;\n            int maxCharCount = getMostCharCount(counts);\n            right++;\n            if (right - left - maxCharCount > k) {\n                counts[s.charAt(left) - 'A']--;\n                left++;\n            }\n        }\n        return right - left;\n    }\n\n    private int getMostCharCount(int[] counts) {\n        int ans = 0;\n        for (int n : counts)\n            ans = Math.max(ans, n);\n        return ans;\n    }\n}\n"
          },
          {
            language: 'Py',
            content:
              'class Solution:\n    def characterReplacement(self, s: str, k: int) -> int:\n        res = low = high = 0\n        counts = collections.Counter()\n        \n        for high in range(1, len(s) + 1):\n            counts[s[high - 1]] += 1\n            max_char_n = counts.most_common(1)[0][1]\n            \n            if high - low - max_char_n > k:\n                counts[s[low]] -= 1\n                low += 1\n        \n        return high -low\n\n'
          }
        ]
      },
      {
        title: '代码11.3.2',
        codes: [
          {
            language: 'Cpp',
            content:
              "class Solution {\n    public:\n        int characterReplacement(string s, int k) {\n            int res = 0;\n            int maxf = 0;\n            vector<int> count(26, 0);\n            \n            for (int i = 0; i < s.size(); i++) {\n                count[s[i] - 'A'] += 1;\n                maxf = max(maxf, count[s[i] - 'A']);\n                \n                if (res - maxf < k)\n                    res += 1;\n                else\n                    count[s[i - res] - 'A'] -= 1;\n            }\n\n            return res;\n        }\n};\n\n"
          },
          {
            language: 'Java',
            content:
              "class Solution {\n    public int characterReplacement(String s, int k) {\n        int res = 0, tmpMax = 0;\n        int[] counts = new int[26];\n\n        for (int i = 0; i < s.length(); i++) {\n            counts[s.charAt(i) - 'A']++;\n            tmpMax = Math.max(tmpMax, counts[s.charAt(i) - 'A']);\n\n            if (res - tmpMax < k)\n                res++;\n            else\n                counts[s.charAt(i - res) - 'A']--;\n        }\n        return res;\n    }\n}\n"
          },
          {
            language: 'Py',
            content:
              'class Solution:\n    def characterReplacement(self, s: str, k: int) -> int:\n        maxf = res = 0\n        count = collections.Counter()\n        for i in range(len(s)):\n            count[s[i]] += 1\n            maxf = max(maxf, count[s[i]])\n            \n            if res - maxf < k:\n                res += 1\n            else:\n                count[s[i - res]] -= 1\n                \n        return res\n\n'
          }
        ]
      },
      {
        title: '代码11.4.1',
        codes: [
          {
            language: 'Py',
            content:
              'class Solution:\n    #生成可能的子字符串\n    def perm(self, s:str)->str:\n        if len(s) <= 1:\n            return [s]\n        \n        s1 = []\n        for i in range(len(s)):\n            for j in self.perm(s[0:i] + s[i + 1:]):\n                s1.append(s[i] + j)\n                \n        return s1\n\n    def checkInclusion(self, s1: str, s2: str) -> bool:\n        if (len(s1) > len(s2)):\n            return False\n        \n        s1_perm = list(set(self.perm(s1)))\n        #检测字符串S1的排列是否是字符串S2的子串\n        for i in s1_perm:\n            idx = s2.find(i)\n            if idx != -1:\n                return True\n            \n        return False\n\n'
          }
        ]
      },
      {
        title: '代码11.4.2',
        codes: [
          {
            language: 'Cpp',
            content:
              'class Solution {\n    public:\n        bool checkInclusion(string s1, string s2) {\n            vector<int> cnts(256, 0);\n            for (char ch: s1)\n                cnts[ch]++;\n\n            int left = s1.size();\n            for (int i = 0, j = 0; j < s2.size(); j++) {\n                if (cnts[s2[j]]-- > 0)\n                    left--;\n\n                while (left == 0) {\n                    if (j + 1 - i == s1.size())\n                        return true;\n                    if (++cnts[s2[i++]] > 0)\n                        left++;\n                }\n            }\n\n            return false;\n        }\n};\n\n'
          },
          {
            language: 'Java',
            content:
              "class Solution {\n    public boolean checkInclusion(String s1, String s2) {\n        if (s1.length() > s2.length())\n            return false;\n        int[] arrayS1 = new int[26], arrayS2 = new int[26];\n        int count = 0;\n\n        for (int i = 0; i < s1.length(); i++) {\n            arrayS1[s1.charAt(i) - 'a']++;\n            arrayS2[s2.charAt(i) - 'a']++;\n        }\n\n        for (int i = 0; i < 26; i++) {\n            if (arrayS1[i] == arrayS2[i])\n                count++;\n        }\n\n        for (int i = 0; i < s2.length() - s1.length(); i++) {\n            if (count == 26)\n                return true;\n            int left = s2.charAt(i) - 'a', right = s2.charAt(i + s1.length()) - 'a';\n\n            arrayS2[right]++;\n            if (arrayS2[right] == arrayS1[right])\n                count++;\n            else if (arrayS2[right] == arrayS1[right] + 1)\n                count--;\n\n            arrayS2[left]--;\n            if (arrayS2[left] == arrayS1[left])\n                count++;\n            else if (arrayS2[left] == arrayS1[left] - 1)\n                count--;\n        }\n\n        return count == 26;\n    }\n}\n"
          },
          {
            language: 'Py',
            content:
              "class Solution:\n    def checkInclusion(self, s1: str, s2: str) -> bool:\n        if (len(s1) > len(s2)):\n            return False\n        \n        list1 = [0 for i in range(26)]\n        list2 = [0 for i in range(26)]\n        \n        for i in range(len(s1)):\n            list1[ord(s1[i]) - ord('a')] += 1\n            list2[ord(s2[i]) - ord('a')] += 1\n            \n        count = 0\n        for i in range(26):\n            if list1[i] == list2[i]:\n                count += 1\n                \n        for i in range(len(s2) - len(s1)):\n            right = ord(s2[i + len(s1)]) - ord('a')\n            left = ord(s2[i]) - ord('a')\n            if count == 26:\n                return True\n            \n            list2[right] += 1\n            if list2[right] == list1[right]:\n                count += 1\n            elif list2[right] == list1[right] + 1:\n                count -= 1\n                \n            list2[left] -= 1\n            if list2[left] == list1[left]:\n                count += 1\n            elif list2[left] == list1[left] - 1:\n                count -= 1\n                \n        return count == 26\n\n"
          }
        ]
      }
    ]
  },
  {
    id: '12',
    name: '第十二章',
    list: [
      {
        title: '代码12.1.1',
        codes: [
          {
            language: 'Cpp',
            content:
              'class Solution {\n    plublic:\n        bool stoneGame(vector<int>& piles) {\n            return true;\n        }\n};\n\n'
          },
          {
            language: 'Java',
            content:
              'package ch12.code;\n\npublic class 12.1.1.StoneGame {\n    public boolean stoneGame(int[] piles) {\n        return true;\n    }\n}\n'
          },
          {
            language: 'Py',
            content:
              'from typing import List\n\n\nclass Solution:\n    def stoneGame(self, piles: List[int]) -> bool:\n        return True\n\n'
          }
        ]
      },
      {
        title: '代码12.1.2',
        codes: [
          {
            language: 'Cpp',
            content:
              'class Solution {\nprivate:\n    int find_max(int left, int right, vector<int>& piles, vector<vector<int>>& mem) {\n        if (left < 0 || right < 0 || left > right) return 0;\n\n        if (mem[left][right] != 0)\n            return mem[left][right];\n        \n        if (left == right) {\n            mem[left][right] = piles[left];\n            return piles[left];\n        }\n\n        int max_stone = max(piles[left]  + min(find_max(left + 2, right, piles, mem), find_max(left + 1, right - 1, piles, mem)),\n                            piles[right] + min(find_max(left + 1, right - 1, piles, mem), find_max(left, right - 2, piles, mem)));\n        mem[left][right] = max_stone;\n        \n        return max_stone;\n    }\npublic:\n    bool stoneGame(vector<int>& piles) {\n        int sum = 0;\n\n        for (int i = 0; i < piles.size(); i++)\n            sum += piles[i];\n        \n        vector<vector<int>> mem;\n        for (int i = 0; i < piles.size(); i++)\n            mem.push_back(vector<int>(piles.size(), 0));\n\n        return 2 * find_max(0, piles.size() - 1, piles, mem) > sum;\n    }\n};\n\n'
          },
          {
            language: 'Java',
            content:
              'package ch12.code;\n\npublic class 12.1.2.StoneGame {\n    public boolean stoneGame(int[] piles) {\n        int sum = 0;\n        for (int i : piles) {\n            sum += i;\n        }\n        int[][] mem = new int[piles.length][piles.length];\n        return 2 * findMax(0, piles.length - 1, piles, mem) >= sum;\n    }\n\n    private int findMax(int left, int right, int[] piles, int[][] mem) {\n        if (left < 0 || left > right)\n            return 0;\n        if (mem[left][right] != 0)\n            return mem[left][right];\n        if (left == right) {\n            mem[left][right] = piles[left];\n            return piles[left];\n        }\n\n        int max = Math.max(\n                piles[left] +\n                        Math.min(findMax(left + 2, right, piles, mem),\n                                findMax(left + 1, right - 1, piles, mem)),\n                piles[right] +\n                        Math.min(findMax(left + 1, right - 1, piles, mem),\n                                findMax(left, right - 2, piles, mem)));\n\n        mem[left][right] = max;\n        return max;\n    }\n}\n'
          },
          {
            language: 'Py',
            content:
              'from typing import List\n\n\nclass Solution:\n    def stoneGame(self, piles: List[int]) -> bool:\n        sum = 0\n        for i in piles:\n            sum += i\n        mem = []\n        for i in range(len(piles)):\n            mem.append([0] * len(piles))\n\n        return 2 * self.find_max(0, len(piles) - 1, piles, mem) > sum\n\n    def find_max(\n        self, left: int, right: int, piles: List[int], mem: List[List[int]]\n    ) -> int:\n        if left < 0 or right < 0 or left > right:\n            return 0\n        if mem[left][right] != 0:\n            return mem[left][right]\n        if left == right:\n            mem[left][right] = piles[left]\n            return piles[left]\n        max_stone = max(\n            piles[left] + min(\n                self.find_max(left + 2, right, piles, mem),\n                self.find_max(left + 1, right - 1, piles, mem),\n            ),\n            piles[right] + min(\n                self.find_max(left + 1, right - 1, piles, mem),\n                self.find_max(left, right - 2, piles, mem),\n            ),  # black formatter added trailing comma\n        )\n        mem[left][right] = max_stone\n        return max_stone\n\n\n'
          }
        ]
      },
      {
        title: '代码12.2.1',
        codes: [
          {
            language: 'Cpp',
            content:
              'class Solution {\nprivate:\n    int find_max(int left, int right, vector<int>& nums, vector<vector<int>>& mem) {\n        if (left < 0 || right < 0 || left > right)\n            return 0;\n        \n        if (mem[left][right] != 0)\n            return mem[left][right];\n        \n        if (left == right) {\n            mem[left][right] = nums[left];\n            return nums[left];\n        }\n        \n        int max_num = max(nums[left]  + min(find_max(left + 2, right, nums, mem), find_max(left + 1, right - 1, nums, mem)),\n                          nums[right] + min(find_max(left + 1, right - 1, nums, mem), find_max(left, right - 2, nums, mem)));\n        mem[left][right] = max_num;\n        \n        return max_num;\n    }\npublic:\n    bool PredictTheWinner(vector<int>& nums) {\n        int sum = 0;\n        for (int i = 0; i < nums.size(); i++)\n            sum += nums[i];\n        \n        vector<vector<int>> mem;\n        for (int i = 0; i < nums.size(); i++)\n            mem.push_back(vector<int>(nums.size(), 0));\n        \n        return 2 * find_max(0, nums.size() - 1, nums, mem) >= sum;\n    }\n};\n\n'
          },
          {
            language: 'Java',
            content:
              'package ch12.code;\n\npublic class 12.2.1.PredictTheWinner {\n    public boolean PredictTheWinner(int[] nums) {\n        int sum = 0;\n        for (int i : nums)\n            sum += i;\n        int[][] mem = new int[nums.length][nums.length];\n        return sum <= findMax(0, nums.length - 1, nums, mem) * 2;\n    }\n\n    private int findMax(int l, int r, int[] nums, int[][] mem) {\n        if (l < 0 || l > r)\n            return 0;\n        if (mem[l][r] != 0)\n            return mem[l][r];\n\n        if (l == r) {\n            mem[l][r] = nums[l];\n            return nums[l];\n        }\n        mem[l][r] = Math.max(nums[l] + Math.min(findMax(l + 1, r - 1, nums, mem), findMax(l + 2, r, nums, mem)),\n                nums[r] + Math.min(findMax(l + 1, r - 1, nums, mem), findMax(l, r - 2, nums, mem)));\n        return mem[l][r];\n    }\n}\n'
          },
          {
            language: 'Py',
            content:
              'from typing import List\n\n\nclass Solution:\n    def PredictTheWinner(self, nums: List[int]) -> bool:\n        sum = 0\n        for i in nums:\n            sum += i\n        mem = []\n        for i in range(len(nums)):\n            mem.append([0] * len(nums))\n\n        return 2 * self.find_max(0, len(nums) - 1, nums, mem) >= sum\n\n    def find_max(\n        self, left: int, right: int, nums: List[int], mem: List[List[int]]\n    ) -> int:\n        if left < 0 or right < 0 or left > right:\n            return 0\n        if mem[left][right] != 0:\n            return mem[left][right]\n        if left == right:\n            mem[left][right] = nums[left]\n            return nums[left]\n        max_num = max(\n            nums[left]\n            + min(\n                self.find_max(left + 2, right, nums, mem),\n                self.find_max(left + 1, right - 1, nums, mem),\n            ),\n            nums[right]\n            + min(\n                self.find_max(left + 1, right - 1, nums, mem),\n                self.find_max(left, right - 2, nums, mem),\n            ),  # black formatter added trailing comma\n        )\n        mem[left][right] = max_num\n        return max_num\n\n'
          }
        ]
      },
      {
        title: '代码12.2.2',
        codes: [
          {
            language: 'Cpp',
            content:
              'class Solution {\npublic:\n    bool PredictTheWinner(vector<int>& nums) {\n        int len = nums.size();\n        \n        vector<vector<int>> dp;\n        for (int i = 0; i < nums.size(); i++)\n            dp.push_back(vector<int>(nums.size(), 0));\n        \n        for (int i = 0;i < nums.size(); i++)\n            dp[i][i] = nums[i];\n        \n        for (int i = len - 1; i > -1; i--)\n            for (int j = i + 1; j < len; j++)\n                dp[i][j] = max(nums[i] - dp[i + 1][j], nums[j] - dp[i][j - 1]);\n        \n        return dp[0][len - 1] >= 0;\n    }\n};\n\n'
          },
          {
            language: 'Java',
            content:
              'package ch12.code;\n\npublic class 12.2.2.PredictTheWinner {\n    public boolean PredictTheWinner(int[] nums) {\n        int[][] dp = new int[nums.length][nums.length];\n        for (int i = 0; i < nums.length; i++) {\n            dp[i][i] = nums[i];\n        }\n\n        for (int i = nums.length - 1; i >= 0; i--) {\n            for (int j = i + 1; j < nums.length; j++)\n                dp[i][j] = Math.max(nums[i] - dp[i + 1][j], nums[j] - dp[i][j - 1]);\n        }\n        return dp[0][nums.length - 1] >= 0;\n    }\n}\n'
          },
          {
            language: 'Py',
            content:
              'from typing import List\n\n\nclass Solution:\n    def PredictTheWinner(self, nums: List[int]) -> bool:\n        n = len(nums)\n\n        dp = [[0] * n for _ in range(n)]\n\n        for i in range(n):\n            dp[i][i] = nums[i]\n\n        for i in range(n - 1, -1, -1):\n            for j in range(i + 1, n):\n                dp[i][j] = max(nums[i] - dp[i + 1][j], nums[j] - dp[i][j - 1])\n        return dp[0][n - 1] >= 0\n\n\n'
          }
        ]
      },
      {
        title: '代码12.2.3',
        codes: [
          {
            language: 'Cpp',
            content:
              'class Solution {\npublic:\n    bool PredictTheWinner(vector<int>& nums) {\n        int len = nums.size();\n        \n        if (len % 2 == 0 || len == 1) return true;\n        \n        vector<int> dp(len, 0);\n        \n        for (int i = len - 1; i > -1; i--) {\n            dp[i] = nums[i];\n            for (int j = i + 1; j < len; j++) {\n                dp[j] = max(nums[i] - dp[j], nums[j] - dp[j - 1]);\n            }\n        }\n        \n        return dp[len - 1] >= 0; \n    }\n};\n\n'
          },
          {
            language: 'Java',
            content:
              'package ch12.code;\n\npublic class 12.2.3.PredictTheWinner {\n    public boolean PredictTheWinner(int[] nums) {\n        if (nums.length == 1 || nums.length % 2 == 0)\n            return true;\n\n        int[] dp = new int[nums.length];\n\n        for (int i = nums.length - 1; i >= 0; i--) {\n            dp[i] = nums[i];\n            for (int j = i + 1; j < nums.length; j++)\n                dp[j] = Math.max(nums[i] - dp[j], nums[j] - dp[j - 1]);\n        }\n        return dp[nums.length - 1] >= 0;\n    }\n}\n'
          },
          {
            language: 'Py',
            content:
              'from typing import List\n\n\nclass Solution:\n    def PredictTheWinner(self, nums: List[int]) -> bool:\n        n = len(nums)\n        if n % 2 == 0 or n == 1:\n            return True\n        dp = [0] * n\n\n        for i in range(n - 1, -1, -1):\n            dp[i] = nums[i]\n            for j in range(i + 1, n):\n                dp[j] = max(nums[i] - dp[j], nums[j] - dp[j - 1])\n        return dp[-1] >= 0\n\n\n'
          }
        ]
      },
      {
        title: '代码12.3.1',
        codes: [
          {
            language: 'Cpp',
            content:
              '//TLE\nclass Solution {\npublic:\n    bool canWinNim(int n) {\n\tbool res = false;\n        bool *mem = (bool *)malloc((n + 1) * sizeof(bool));\n        memset(mem, true, (n + 1) * sizeof(bool));\n        \n        for (int i = 4; i < n + 1; i++) {\n            if (!(mem[i - 1] && mem[i - 2] && mem[i - 3]))\n                mem[i] = true;\n            else\n                mem[i] = false;\n        }\n        \n\tres = mem[n];\n\tfree(mem);\n        return res;\n    }\n};\n\n'
          },
          {
            language: 'Java',
            content:
              'package ch12.code;\n\npublic class NimGame {\n    public boolean canWinNim(int n) {\n        boolean[] mem = new boolean[n + 1];\n        mem[1] = true;\n        mem[2] = true;\n        mem[3] = true;\n\n        for (int i = 4; i < n + 1; i++) {\n            if (!(mem[i - 1] && mem[i - 2] && mem[i - 3]))\n                mem[i] = true;\n        }\n        return mem[n];\n    }\n}\n'
          },
          {
            language: 'Py',
            content:
              'class Solution:\n    def canWinNim(self, n: int) -> bool:\n        mem = [True] * (n + 1)\n        for i in range(4, n + 1):\n            if not (mem[i - 1] and mem[i - 2] and mem[i - 3]):\n                mem[i] = True\n            else:\n                mem[i] = False\n        return mem[n]\n'
          }
        ]
      },
      {
        title: '代码12.3.2',
        codes: [
          {
            language: 'Cpp',
            content:
              'class Solution {\npublic:\n    bool canWinNim(int n) {\n        if (n < 4) return true;\n        \n        int a = true, b = true, c = true;\n        \n        for (int i = 4; i < n + 1; i++) {\n            int current = !(a && b && c);\n            a = b;\n            b = c;\n            c = current;\n        }\n        \n        return c;\n    }\n};\n\n'
          },
          {
            language: 'Java',
            content:
              'package ch12.code;\n\npublic class NimGame {\n    public boolean canWinNim(int n) {\n        if (n < 4)\n            return true;\n\n        boolean a = true, b = true, c = true;\n\n        for (int i = 4; i < n + 1; i++) {\n            boolean current = a && b && c ? false : true;\n            a = b;\n            b = c;\n            c = current;\n        }\n\n        return c;\n    }\n}\n'
          },
          {
            language: 'Py',
            content:
              'class Solution:\n    def canWinNim(self, n: int) -> bool:\n        if n < 4:\n            return True\n        a, b, c = True, True, True\n        for i in range(4, n + 1):\n            current = not (a and b and c)\n            a, b, c = b, c, current\n        return c\n\n'
          }
        ]
      },
      {
        title: '代码12.3.3',
        codes: [
          {
            language: 'Cpp',
            content:
              'class Solution {\npublic:\n    bool canWinNim(int n) {\n       return n % 4 != 0;\n    }\n};\n\n'
          },
          {
            language: 'Java',
            content:
              'package ch12.code;\n\npublic class NimGame {\n    public boolean canWinNim(int n) {\n        if (n <= 0) {\n            return false;\n        }\n        return 0 != n % 4;\n    }\n}\n'
          },
          {
            language: 'Py',
            content:
              'class Solution:\n    def canWinNim3(self, n: int) -> bool:\n        return n % 4 != 0\n\n\n'
          }
        ]
      },
      {
        title: '代码12.4.1',
        codes: [
          {
            language: 'Cpp',
            content:
              'class Solution {\nprivate:\n    int cost(int low, int high) {\n        if (low >= high) return 0;\n        \n        int res = INT_MAX;\n        for (int i = low; i < high + 1; i++) {\n            int tmp = i + max(cost(low, i - 1), cost(i + 1, high));\n            res = min(res, tmp);\n        }\n        \n        return res;\n    }\npublic:\n    int getMoneyAmount(int n) {\n        return cost(1, n);\n    }\n};\n\n'
          },
          {
            language: 'Java',
            content:
              'public class GetMoneyAmount {\n\n    public int cost(int low, int high) {\n        if (low >= high)\n            return 0;\n        int res = Integer.MAX_VALUE;\n        for (int i = low; i <= high; i++) {\n            int tmp = i + Math.max(cost(i + 1, high), cost(low, i - 1));\n            res = Math.min(tmp, res);\n        }\n\n        return res;\n    }\n    public int getMoneyAmount(int n) {\n        return cost(1, n);\n    }\n}\n'
          },
          {
            language: 'Py',
            content:
              'import sys\n\n\nclass Solution:\n    def getMoneyAmount(self, n: int) -> int:\n        def cost(low: int, high: int) -> int:\n            if low >= high:\n                return 0\n            res = sys.maxsize\n            for i in range(low, high + 1):\n                tmp = i + max(\n                    cost(low, i - 1), cost(i + 1, high)\n                )\n                res = min(res, tmp)\n            return res\n\n        return cost(1, n)\n\n'
          }
        ]
      },
      {
        title: '代码12.4.2',
        codes: [
          {
            language: 'Cpp',
            content:
              'class Solution {\nprivate:\n    int cost(int low, int high, vector<vector<int>> mem) {\n        if (low >= high)\n            return 0;\n        \n        if (mem[low][high])\n            return mem[low][high];\n        \n        int res = INT_MAX;\n        for (int i = (low + high) / 2; i < high + 1; i++) {\n            int tmp = i + max(cost(low, i - 1, mem), cost(i + 1, high, mem));\n            res = min(res, tmp);\n        }\n        mem[low][high] = res;\n        \n        return res;\n    }\npublic:\n    int getMoneyAmount(int n) {\n        if (n == 1) return 0;\n\n        vector<vector<int>> mem(n + 1, vector<int>(n + 1, 0));\n        return cost(1, n, mem);\n    }\n};\n\n'
          },
          {
            language: 'Java',
            content:
              'public class GetMoneyAmount {\n\n    public int getMoneyAmount (int n){\n        if (n == 1) return 0;\n        int[][] mem = new int[n + 1][n + 1];\n        return cost(1, n, mem);\n\n    }\n\n    private int cost(int low, int high, int[][] mem) {\n        if (low >= high)\n            return 0;\n        if (mem[low][high] != 0)\n            return mem[low][high];\n        int minRes = Integer.MAX_VALUE;\n        for (int i = (low + high) / 2; i <= high; i++) {\n            int res = i + Math.max(cost(i + 1, high, mem), cost(low, i - 1, mem));\n            minRes = Math.min(res, minRes);\n        }\n        mem[low][high] = minRes;\n        return minRes;\n    }\n}\n'
          },
          {
            language: 'Py',
            content:
              'import sys\nfrom typing import List\n\n\nclass Solution:\n    def getMoneyAmount(self, n: int) -> int:\n        def cost(low: int, high: int, mem: List[List[int]]) -> int:\n\n            if low >= high:\n                return 0\n            if mem[low][high] != 0:\n                return mem[low][high]\n\n            res = sys.maxsize\n            for i in range((low + high) // 2, high + 1):\n                tmp = i + max(\n                    cost(low, i - 1, mem),\n                    cost(i + 1, high, mem),\n                )\n                res = min(res, tmp)\n            mem[low][high] = res\n            return res\n\n        if n == 1:\n            return 0\n        mem = [[0] * (n + 1) for _ in range(n + 1)]\n\n        return cost(1, n, mem)\n\n'
          }
        ]
      }
    ]
  },
  {
    id: '13',
    name: '第十三章',
    list: [
      {
        title: '代码13.1.1',
        codes: [
          {
            language: 'Java',
            content:
              'package ch13.code;\npublic class Solution {\n\n    public int maxProfitOrigin(int[] prices) {\n        int max = 0;\n        for (int i = prices.length - 1; i > 0; i--) {\n            for (int j = i - 1; j >= 0; j--) {\n                if (prices[i] - prices[j] > max)\n                    max = prices[i] - prices[j];\n            }\n        }\n        return max;\n    }\n}\n'
          }
        ]
      },
      {
        title: '代码13.1.1.best',
        codes: [
          {
            language: 'Cpp',
            content:
              'class Solution {\n    public:\n        int maxProfit(vector<int>& prices) {\n            int maxprofit = 0;\n\n            for (int i = 0; i < prices.size(); i++) {\n                for (int j = i + 1; j < prices.size(); j++) {\n                    if (prices[j] - prices[i] > maxprofit)\n                        maxprofit = prices[j] - prices[i];\n                }\n            }\n\n            return maxprofit;\n        }\n};\n\n'
          },
          {
            language: 'Py',
            content:
              'from typing import List\n\n\nclass Solution:\n    def maxProfit(self, prices: List[int]) -> int:\n        max_diff = 0\n        for i in range(1, len(prices)):\n            for j in range(0, i):\n                if prices[i] - prices[j] > max_diff:\n                    max_diff = prices[i] - prices[j]\n        return max_diff\n\n'
          }
        ]
      },
      {
        title: '代码13.1.2',
        codes: [
          {
            language: 'Java',
            content:
              'package ch13.code;\npublic class Solution {\n    public int maxProfit(int[] prices) {\n        if (prices == null || prices.length <= 1) \n            return 0;\n\n        int min = prices[0];\n        int max = 0;\n\n        for (int i = 1; i < prices.length; i++) {\n            max = Math.max(prices[i] - min, max);\n            min = Math.min(min, prices[i]);\n        }\n        return max;\n    }\n}\n'
          }
        ]
      },
      {
        title: '代码13.1.2.best',
        codes: [
          {
            language: 'Cpp',
            content:
              'class Solution {\npublic:\n    int maxProfit(vector<int>& prices) {\n        if (prices.size() == 0)\n            return 0;\n\n        int max_diff = 0;\n        int min_price = prices[0];\n        \n        for (int i = 1; i < prices.size(); i++) {\n            if (min_price > prices[i])\n                min_price = prices[i];\n            max_diff = max(max_diff, prices[i] - min_price);\n        }\n        \n        return max_diff;\n    }\n};\n\n'
          },
          {
            language: 'Py',
            content:
              'from typing import List\nimport sys\n\n\nclass Solution:\n    def maxProfit(self, prices: List[int]) -> int:\n        max_diff = 0\n        min_price = sys.maxsize\n        for i in range(len(prices)):\n            if min_price > prices[i]:\n                min_price = prices[i]\n            max_diff = max(max_diff, prices[i] - min_price)\n        return max_diff\n\n'
          }
        ]
      },
      {
        title: '代码13.2.1',
        codes: [
          {
            language: 'Java',
            content:
              'package ch13.code;\npublic class Solution {\n    public int maxProfit(int[] prices) {\n        if (prices == null || prices.length < 2)\n            return 0;\n\n        int ans = 0;\n        for (int i = 1; i < prices.length; i++) {\n            if (prices[i] - prices[i - 1] > 0)\n                ans += prices[i] - prices[i - 1];\n        }\n        return ans;\n    }\n}\n'
          }
        ]
      },
      {
        title: '代码13.2.best',
        codes: [
          {
            language: 'Cpp',
            content:
              'class Solution {\npublic:\n    int maxProfit(vector<int>& prices) {\n        int maxprofit = 0;\n        int size = prices.size();\n\n        for (int i = 1; i < size; i++) {\n            if (prices[i] > prices[i - 1])\n                maxprofit += prices[i] - prices[i - 1];\n        }\n        \n        return maxprofit;\n    }\n};\n\n'
          },
          {
            language: 'Py',
            content:
              'from typing import List\n\n\nclass Solution:\n    def maxProfit(self, prices: List[int]) -> int:\n        if len(prices) <= 1:\n            return 0\n        max_profit = 0\n        for i in range(1, len(prices)):\n            if prices[i] - prices[i - 1] > 0:\n                max_profit += prices[i] - prices[i - 1]\n        return max_profit\n\n'
          }
        ]
      },
      {
        title: '代码13.3.1',
        codes: [
          {
            language: 'Java',
            content:
              'package ch13.code;\n\npublic class Solution {\n    public int maxProfitOrigin(int[] prices, int fee) {\n        if (prices == null || prices.length < 2)\n            return 0;\n\n        int[] buy = new int[prices.length], sell = new int[prices.length];\n        buy[0] = -prices[0];\n        sell[0] = 0;\n\n        for (int i = 1; i < prices.length; i++) {\n            buy[i] = Math.max(buy[i - 1], sell[i - 1] - prices[i]);\n            sell[i] = Math.max(buy[i - 1] + prices[i] - fee, sell[i - 1]);\n        }\n\n        return sell[prices.length - 1];\n    }\n}\n'
          }
        ]
      },
      {
        title: '代码13.3.1.best',
        codes: [
          {
            language: 'Cpp',
            content:
              'class Solution {\npublic:\n    int maxProfit(vector<int>& prices, int fee) {\n        if (prices.size() <= 1)\n            return 0;\n        \n\tint res = 0;\n        int *buy  = new int[prices.size() + 1]();\n        int *sell = new int[prices.size() + 1]();\n        \n        buy[0] = -prices[0];\n        \n        for (int i = 1; i < prices.size(); i++) {\n            buy[i]  = max(buy[i - 1], sell[i - 1] - prices[i]);\n            sell[i] = max(buy[i - 1] + prices[i] - fee, sell[i - 1]);\n        }\n\n\tres = sell[prices.size() - 1];\n\tdelete [] buy;\n\tdelete [] sell;\n        \n        return res;\n    }\n};\n\n'
          },
          {
            language: 'Py',
            content:
              'from typing import List\n\n\nclass Solution:\n    def maxProfit(self, prices: List[int], fee: int) -> int:\n        if len(prices) <= 1:\n            return 0\n        # buy = [0 for i in range(len(prices))]\n        # sell = [0 for i in range(len(prices))]\n        buy, sell = [0] * len(prices), [0] * len(prices)\n        buy[0] = -prices[0]\n        for i in range(1, len(prices)):\n            buy[i] = max(buy[i - 1], sell[i - 1] - prices[i])\n            sell[i] = max(buy[i - 1] + prices[i] - fee, sell[i - 1])\n        return sell[-1]\n\n'
          }
        ]
      },
      {
        title: '代码13.3.2',
        codes: [
          {
            language: 'Java',
            content:
              'package ch13.code;\n\npublic class Solution {\n    public int maxProfit(int[] prices, int fee) {\n        if (prices == null || prices.length < 2)\n            return 0;\n\n        int preBuy = -prices[0];\n        int preSell = 0;\n\n        for (int i = 1; i < prices.length; i++) {\n            int buy = Math.max(preBuy, preSell - prices[i]);\n            int sell = Math.max(preBuy + prices[i] - fee, preSell);\n\n            preBuy = buy;\n            preSell = sell;\n        }\n        return preSell;\n    }\n}\n'
          }
        ]
      },
      {
        title: '代码13.3.2.best',
        codes: [
          {
            language: 'Cpp',
            content:
              'class Solution {\npublic:\n    int maxProfit(vector<int>& prices, int fee) {\n        if (prices.size() <= 1)\n            return 0;\n        \n        int pre_buy  = -prices[0];\n        int pre_sell = 0;\n        \n        for (int i = 1; i < prices.size(); i++) {\n            int buy  = max(pre_buy, pre_sell - prices[i]);\n            int sell = max(pre_buy + prices[i] - fee, pre_sell);\n            pre_buy  = buy;\n            pre_sell = sell;\n        }\n        \n        return pre_sell;\n    }\n};\n\n'
          },
          {
            language: 'Py',
            content:
              'from typing import List\n\n\nclass Solution:\n    def maxProfit(self, prices: List[int], fee: int) -> int:\n        if len(prices) <= 1:\n            return 0\n        pre_buy = -prices[0]\n        pre_sell = 0\n        for i in range(1, len(prices)):\n            buy = max(pre_buy, pre_sell - prices[i])\n            sell = max(pre_buy + prices[i] - fee, pre_sell)\n            pre_buy = buy\n            pre_sell = sell\n        return pre_sell\n\n'
          }
        ]
      },
      {
        title: '代码13.4.1',
        codes: [
          {
            language: 'Java',
            content:
              'package ch13.code;\npublic class Solution {\n    public int maxProfitOrigin(int[] prices) {\n        if (prices == null || prices.length < 2)\n            return 0;\n\n        int[] buy = new int[prices.length], sell = new int[prices.length];\n        buy[0] = -prices[0];\n        sell[0] = 0;\n\n        buy[1] = Math.max((0 - prices[1]), buy[0]);\n        sell[1] = Math.max((buy[0] + prices[1]), sell[0]);\n\n        for (int i = 2; i < prices.length; i++) {\n            buy[i] = Math.max((sell[i - 2] - prices[i]), buy[i - 1]);\n            sell[i] = Math.max((buy[i - 1] + prices[i]), sell[i - 1]);\n        }\n\n        return sell[prices.length - 1];\n    }\n}\n'
          }
        ]
      },
      {
        title: '代码13.4.1.best',
        codes: [
          {
            language: 'Cpp',
            content:
              'class Solution {\npublic:\n    int maxProfit(vector<int>& prices) {\n        if (prices.size() <= 1)\n            return 0;\n        \n        int res = 0;\n        int *buy  = new int[prices.size()]();\n        int *sell = new int[prices.size()]();\n        buy[0]  = -prices[0];\n        buy[1]  = max((0 - prices[1]), buy[0]);\n        sell[1] = max((buy[0] + prices[1]), sell[0]);\n        \n        for (int i = 2; i < prices.size(); i++) {\n            buy[i]  = max((sell[i - 2] - prices[i]), buy[i - 1]);\n            sell[i] = max((buy[i - 1] + prices[i]), sell[i - 1]); \n        }\n        \n        res = sell[prices.size() - 1];\n        \n        delete [] buy;\n        delete [] sell;\n        \n        return res;\n    }\n};\n\n'
          },
          {
            language: 'Py',
            content:
              'from typing import List\n\n\nclass Solution:\n    def maxProfit(self, prices: List[int]) -> int:\n        if len(prices) <= 1:\n            return 0\n        buy, sell = [0] * len(prices), [0] * len(prices)\n        buy[0] = -prices[0]\n        buy[1] = max((0 - prices[1]), buy[0])\n        sell[1] = max((buy[0] + prices[1]), sell[0])\n        for i in range(2, len(prices)):\n            buy[i] = max((sell[i - 2] - prices[i]), buy[i - 1])\n            sell[i] = max((buy[i - 1] + prices[i]), sell[i - 1])\n        return sell[-1]\n\n'
          }
        ]
      },
      {
        title: '代码13.4.2',
        codes: [
          {
            language: 'Java',
            content:
              'package ch13.code;\n\nimport java.util.Arrays;\n\npublic class Solution {\n    public int maxProfit(int[] prices) {\n        if (prices == null || prices.length < 2)\n            return 0;\n\n        int b0 = -prices[0];\n        int b1 = b0;\n\n        int s0 = 0;\n        int s1 = 0;\n        int s2 = 0;\n        for (int i = 0; i < prices.length; i++) {\n            b0 = Math.max(b1, s2 - prices[i]);\n            s0 = Math.max(s1, b0 + prices[i]);\n\n            s2 = s1;\n            s1 = s0;\n            b1 = b0;\n        }\n        return s0;\n    }\n}\n'
          }
        ]
      },
      {
        title: '代码13.4.2.best',
        codes: [
          {
            language: 'Cpp',
            content:
              'class Solution {\npublic:\n    int maxProfit(vector<int>& prices) {\n        if (prices.size() <= 1)\n            return 0;\n        \n        int b0 = -prices[0];\n        int b1 = b0;\n        int s0 = 0, s1 = 0, s2 = 0;\n        \n        for (int i = 0; i < prices.size(); i++) {\n            b0 = max(b1, s2 - prices[i]);\n            s0 = max(s1, b0 + prices[i]);\n            s2 = s1;\n            s1 = s0;\n            b1 = b0;\n        }\n        \n        return s0;\n    }\n};\n\n'
          },
          {
            language: 'Py',
            content:
              'from typing import List\n\n\nclass Solution:\n\n    def maxProfit(self, prices: List[int]) -> int:\n        if len(prices) <= 1:\n            return 0\n        b0 = -prices[0]\n        b1 = b0\n        s0, s1, s2 = 0, 0, 0\n        for i in range(0, len(prices)):\n            b0 = max(b1, s2 - prices[i])\n            s0 = max(s1, b0 + prices[i])\n            s2 = s1\n            s1 = s0\n            b1 = b0\n        return s0\n\n'
          }
        ]
      },
      {
        title: '代码13.5.1',
        codes: [
          {
            language: 'Java',
            content:
              'package ch13.code;\npublic class Solution {\n    public int maxProfit(int k, int[] prices) {\n        if (prices == null || prices.length < 2)\n            return 0;\n\n        int[][] dp = new int[k + 1][prices.length];\n\n        for (int i = 1; i <= k; i++) {\n            int minPrice = prices[0];\n            for (int j = 1; j < prices.length; j++) {\n                minPrice = Math.min(minPrice, prices[j] - dp[i - 1][j - 1]);\n                dp[i][j] = Math.max(dp[i][j - 1], prices[j] - minPrice);\n            }\n        }\n        return dp[k][prices.length - 1];\n    }\n}\n'
          }
        ]
      },
      {
        title: '代码13.5.1.best',
        codes: [
          {
            language: 'Cpp',
            content:
              '//This solution maybe Runtime Error\nclass Solution {\npublic:\n    int maxProfit(int k, vector<int>& prices) {\n        if (prices.size() <= 1) return 0;\n        \n        vector<vector<int>> dp(k + 1, vector<int>(prices.size() + 1, 0));\n\n        for (int i = 1; i < k + 1; i++) {\n            int min_price = prices[0];\n            for (int j = 1; j < prices.size(); j++) {\n                min_price = min(min_price, prices[j] - dp[i - 1][j - 1]);\n                dp[i][j]  = max(dp[i][j - 1], prices[j] - min_price);\n            }\n        }\n        \n        return dp[k][prices.size() - 1];\n    }\n};\n\n'
          },
          {
            language: 'Py',
            content:
              'from typing import List\n\n\nclass Solution:\n    def maxProfit(self, k: int, prices: List[int]) -> int:\n        if len(prices) <= 1:\n            return 0\n        if k > len(prices) / 2 + 1:\n            max_profit = 0\n            for i in range(1, len(prices)):\n                if prices[i] - prices[i - 1] > 0:\n                    max_profit += prices[i] - prices[i - 1]\n            return max_profit\n        dp = []\n        for i in range(0, k + 1):\n            dp.append([0] * len(prices))\n        for i in range(1, k + 1):\n            min_price = prices[0]\n            for j in range(1, len(prices)):\n                min_price = min(min_price, prices[j] - dp[i - 1][j - 1])\n                dp[i][j] = max(dp[i][j - 1], prices[j] - min_price)\n        return dp[-1][-1]\n\n'
          }
        ]
      },
      {
        title: '代码13.5.2',
        codes: [
          {
            language: 'Java',
            content:
              'package ch13.code;\n\nimport java.util.Arrays;\n\npublic class Solution {\n    public int maxProfit(int k, int[] prices) {\n        if (prices == null || prices.length < 2)\n            return 0;\n\n        if (k > prices.length / 2 + 1) {\n            int ans = 0;\n            for (int i = 1; i < prices.length; i++) {\n                if (prices[i] - prices[i - 1] > 0)\n                    ans += prices[i] - prices[i - 1];\n            }\n            return ans;\n        }\n\n        int[] minPrice = new int[k + 1];\n        Arrays.fill(minPrice, prices[0]);\n\n        int[] dp = new int[k + 1];\n\n        for (int i = 1; i < prices.length; i++) {\n            for (int j = 1; j <= k; j++) {\n                minPrice[j] = Math.min(minPrice[j], prices[i] - dp[j - 1]);\n                dp[j] = Math.max(dp[j], prices[i] - minPrice[j]);\n            }\n        }\n        return dp[k];\n    }\n}\n'
          }
        ]
      },
      {
        title: '代码13.5.2.best',
        codes: [
          {
            language: 'Cpp',
            content:
              'class Solution {\npublic:\n    int maxProfit(int k, vector<int>& prices) {\n        if (prices.size() <= 1)\n            return 0;\n        \n        if (k > (prices.size() / 2 + 1)) {\n            int max_profit = 0;\n            for (int i = 1; i < prices.size(); i++) {\n                if (prices[i] - prices[i - 1] > 0)\n                    max_profit += prices[i] - prices[i - 1];\n            }\n            \n            return max_profit;\n        }\n        \n        int *min_price = new int[k + 1]();\n        for (int i = 0; i < k + 1; i++)\n            min_price[i] = prices[0];\n        \n        int *dp        = new int[k + 1]();\n        \n        for (int i = 1; i < prices.size(); i++) {\n            for (int j = 1; j < k + 1; j++) {\n                min_price[j] = min(min_price[j], prices[i] - dp[j - 1]);\n                dp[j] = max(dp[j], prices[i] - min_price[j]);\n            }\n        }\n        \n        int res = dp[k];\n        delete [] min_price;\n        delete [] dp;\n        return res;\n    }\n};\n\n'
          },
          {
            language: 'Py',
            content:
              'from typing import List\n\n\nclass Solution:\n    def maxProfit(self, k: int, prices: List[int]) -> int:\n        if len(prices) <= 1:\n            return 0\n        if k > len(prices) / 2 + 1:\n            max_profit = 0\n            for i in range(1, len(prices)):\n                if prices[i] - prices[i - 1] > 0:\n                    max_profit += prices[i] - prices[i - 1]\n            return max_profit\n        min_price, dp = [prices[0]] * (k + 1), [0] * (k + 1)\n        for i in range(1, len(prices)):\n            for j in range(1, k + 1):\n                min_price[j] = min(min_price[j], prices[i] - dp[j - 1])\n                dp[j] = max(dp[j], prices[i] - min_price[j])\n        return dp[k]\n\n'
          }
        ]
      },
      {
        title: '代码13.6.1',
        codes: [
          {
            language: 'Cpp',
            content:
              'int maxProfit(int k, vector<int>& prices) {\n    if (prices.size() <= 1)\n        return 0;\n\n    int *dp = new int[prices.size() + 1]();\n    min_prices = prices[0];\n\n    for (int i = 1; i < prices.size(); i++) {\n        min_price = min(min_price, prices[i] - dp[i - 1]);\n        dp[i + 1] = max(dp[i], prices[i] - min_price);\n    }\n\n    int res = dp[prices.size() - 1];\n\n    delete [] dp;\n\n    return res;\n}\n\n'
          },
          {
            language: 'Java',
            content:
              'package ch13.code;\n\npublic class Solution {\n    public int maxProfit(int[] prices) {\n        if (prices == null || prices.length < 2)\n            return 0;\n        int[] dp = new int[prices.length + 1];\n        int min = prices[0];\n\n        for (int i = 1; i < prices.length; i++) {\n            min = Math.min(min, prices[i] - dp[i - 1]);\n            dp[i + 1] = Math.max(dp[i], prices[i] - min);\n        }\n        return dp[dp.length - 1];\n    }\n}\n'
          },
          {
            language: 'Py',
            content:
              'from typing import List\n\n\nclass Solution:\n    def maxProfit(self, prices: List[int]) -> int:\n        if len(prices) <= 1:\n            return 0\n        dp = [0] * (len(prices)+1)\n        min_price = prices[0]\n\n        for i in range(1, len(prices)):\n            min_price = min(min_price, prices[i] - dp[i - 1])\n            dp[i + 1] = max(dp[i], prices[i] - min_price)\n        return dp[-1]\n'
          }
        ]
      }
    ]
  },
  {
    id: '14',
    name: '第十四章',
    list: [
      {
        title: '代码14.1.1',
        codes: [
          {
            language: 'Cpp',
            content:
              'class Solution {\npublic:\n    ListNode* mergeTwoLists(ListNode* l1, ListNode* l2) {\n        if (l1 == nullptr) {\n            return l2;\n        } else if (l2 == nullptr) {\n            return l1;\n        } else if (l1->val < l2->val) {\n            l1->next = mergeTwoLists(l1->next, l2);\n            return l1;\n        } else {\n            l2->next = mergeTwoLists(l1, l2->next);\n            return l2;\n        }\n    }\n};\n'
          },
          {
            language: 'Java',
            content:
              'class Solution {\n    public ListNode mergeTwoLists(ListNode l1, ListNode l2) {\n        if (l1 == null) {\n            return l2;\n        }\n        else if (l2 == null) {\n            return l1;\n        }\n        else if (l1.val < l2.val) {\n            l1.next = mergeTwoLists(l1.next, l2);\n            return l1;\n        }\n        else {\n            l2.next = mergeTwoLists(l1, l2.next);\n            return l2;\n        }\n\n    }\n}\n'
          },
          {
            language: 'Py',
            content:
              'from typing import List\n# Definition for singly-linked list.\nclass ListNode:\n    def __init__(self, x):\n        self.val = x\n        self.next = None\n\n\nclass Solution:\n    def mergeTwoLists(self, l1: ListNode, l2: ListNode) -> ListNode:\n        if l1 is None:\n            return l2\n        if l2 is None:\n            return l1\n        if l1.val < l2.val:\n            l1.next = self.mergeTwoLists(l1.next, l2)\n            return l1\n        l2.next = self.mergeTwoLists(l1, l2.next)\n        return l2\n'
          }
        ]
      },
      {
        title: '代码14.1.2',
        codes: [
          {
            language: 'Cpp',
            content:
              'class Solution {\npublic:\n    ListNode* mergeTwoLists(ListNode* l1, ListNode* l2) {\n        ListNode* preHead = new ListNode(-1);\n\n        ListNode* prev = preHead;\n        while (l1 != nullptr && l2 != nullptr) {\n            if (l1->val < l2->val) {\n                prev->next = l1;\n                l1 = l1->next;\n            } else {\n                prev->next = l2;\n                l2 = l2->next;\n            }\n            prev = prev->next;\n        }\n\n        // 合并后 l1 和 l2 最多只有一个还未被合并完，我们直接将链表末尾指向未合并完的链表即可\n        prev->next = l1 == nullptr ? l2 : l1;\n\n        return preHead->next;\n    }\n};\n'
          },
          {
            language: 'Java',
            content:
              'class Solution {\n    public ListNode mergeTwoLists(ListNode l1, ListNode l2) {\n        ListNode prehead = new ListNode(-1);\n\n        ListNode prev = prehead;\n        while (l1 != null && l2 != null) {\n            if (l1.val <= l2.val) {\n                prev.next = l1;\n                l1 = l1.next;\n            } else {\n                prev.next = l2;\n                l2 = l2.next;\n            }\n            prev = prev.next;\n        }\n\n        // 合并后 l1 和 l2 最多只有一个还未被合并完，我们直接将链表末尾指向未合并完的链表即可\n        prev.next = l1 == null ? l2 : l1;\n\n        return prehead.next;\n    }\n}\n'
          },
          {
            language: 'Py',
            content:
              'from typing import List\n# Definition for singly-linked list.\nclass ListNode:\n    def __init__(self, x):\n        self.val = x\n        self.next = None\n\n\nclass Solution:\n    def mergeTwoLists(self, l1: ListNode, l2: ListNode) -> ListNode:\n        \n        sentinel = ListNode(-1) # 哨兵结点\n\n        curr = sentinel\n        while l1 and l2:\n            if l1.val <= l2.val:\n                curr.next = l1\n                l1 = l1.next\n            else:\n                curr.next = l2\n                l2 = l2.next            \n            curr = curr.next\n\n        curr.next = l1 if l1 is not None else l2\n\n        return sentinel.next\n'
          }
        ]
      },
      {
        title: '代码14.1.3',
        codes: [
          {
            language: 'Cpp',
            content:
              'class Solution {\npublic:\n    ListNode* mergeTwoLists(ListNode *a, ListNode *b) {\n        if ((!a) || (!b)) return a ? a : b;\n        ListNode head, *tail = &head, *aPtr = a, *bPtr = b;\n        while (aPtr && bPtr) {\n            if (aPtr->val < bPtr->val) {\n                tail->next = aPtr; aPtr = aPtr->next;\n            } else {\n                tail->next = bPtr; bPtr = bPtr->next;\n            }\n            tail = tail->next;\n        }\n        tail->next = (aPtr ? aPtr : bPtr);\n        return head.next;\n    }\n\n    ListNode* mergeKLists(vector<ListNode*>& lists) {\n        ListNode *ans = nullptr;\n        for (size_t i = 0; i < lists.size(); ++i) {\n            ans = mergeTwoLists(ans, lists[i]);\n        }\n        return ans;\n    }\n};\n'
          },
          {
            language: 'Java',
            content:
              'class Solution {\n    public ListNode mergeTwoLists(ListNode l1, ListNode l2) {\n        if (l1 == null) {\n            return l2;\n        }\n        else if (l2 == null) {\n            return l1;\n        }\n        else if (l1.val < l2.val) {\n            l1.next = mergeTwoLists(l1.next, l2);\n            return l1;\n        }\n        else {\n            l2.next = mergeTwoLists(l1, l2.next);\n            return l2;\n        }\n\n    }\n    \n    public ListNode mergeKLists(ListNode[] lists) {\n        ListNode res = null;\n        for (ListNode list: lists) {\n            res = mergeTwoLists(res, list);\n        }\n        return res;\n    }\n}\n'
          },
          {
            language: 'Py',
            content:
              'from typing import List\n# Definition for singly-linked list.\nclass ListNode:\n    def __init__(self, x):\n        self.val = x\n        self.next = None\n\n\nclass Solution:\n    def mergeKLists(self, lists: List[ListNode]) -> ListNode:\n        def mergeTwoLists(l1: ListNode, l2: ListNode) -> ListNode:\n\n            sentinel = ListNode(-1)  # 哨兵结点\n\n            curr = sentinel\n            while l1 and l2:\n                if l1.val <= l2.val:\n                    curr.next = l1\n                    l1 = l1.next\n                else:\n                    curr.next = l2\n                    l2 = l2.next\n                curr = curr.next\n\n            curr.next = l1 if l1 is not None else l2\n\n            return sentinel.next\n\n        if not lists:\n            return None\n        l = lists[0]\n\n        for i in range(1, len(lists)):\n            l = mergeTwoLists(l, lists[i])\n\n        return l\n\n'
          }
        ]
      },
      {
        title: '代码14.1.4',
        codes: [
          {
            language: 'Cpp',
            content:
              'class Solution {\npublic:\n    ListNode* mergeTwoLists(ListNode *a, ListNode *b) {\n        if ((!a) || (!b)) return a ? a : b;\n        ListNode head, *tail = &head, *aPtr = a, *bPtr = b;\n        while (aPtr && bPtr) {\n            if (aPtr->val < bPtr->val) {\n                tail->next = aPtr; aPtr = aPtr->next;\n            } else {\n                tail->next = bPtr; bPtr = bPtr->next;\n            }\n            tail = tail->next;\n        }\n        tail->next = (aPtr ? aPtr : bPtr);\n        return head.next;\n    }\n\n    ListNode* merge(vector <ListNode*> &lists, int l, int r) {\n        if (l == r) return lists[l];\n        if (l > r) return nullptr;\n        int mid = (l + r) >> 1;\n        return mergeTwoLists(merge(lists, l, mid), merge(lists, mid + 1, r));\n    }\n\n    ListNode* mergeKLists(vector<ListNode*>& lists) {\n        return merge(lists, 0, lists.size() - 1);\n    }\n};\n'
          },
          {
            language: 'Java',
            content:
              '/**\n * Definition for singly-linked list.\n * public class ListNode {\n *     int val;\n *     ListNode next;\n *     ListNode(int x) { val = x; }\n * }\n */\nclass Solution {\n   public ListNode mergeKLists(ListNode[] lists) {\n        if (lists == null || lists.length == 0) return null;\n        return merge(lists, 0, lists.length - 1);\n    }\n\n    private ListNode merge(ListNode[] lists, int left, int right) {\n        if (left == right) return lists[left];\n        int mid = left + (right - left) / 2;\n        ListNode l1 = merge(lists, left, mid);\n        ListNode l2 = merge(lists, mid + 1, right);\n        return mergeTwoLists(l1, l2);\n    }\n\n    private ListNode mergeTwoLists(ListNode l1, ListNode l2) {\n        if (l1 == null) return l2;\n        if (l2 == null) return l1;\n        if (l1.val < l2.val) {\n            l1.next = mergeTwoLists(l1.next, l2);\n            return l1;\n        } else {\n            l2.next = mergeTwoLists(l1,l2.next);\n            return l2;\n        }\n    }\n}\n'
          },
          {
            language: 'Py',
            content:
              'from typing import List\n# Definition for singly-linked list.\nclass ListNode:\n    def __init__(self, x):\n        self.val = x\n        self.next = None\n\n\nclass Solution:\n    def mergeKLists(self, lists: List[ListNode]) -> ListNode:\n        def mergeTwoLists(l1: ListNode, l2: ListNode) -> ListNode:\n\n            sentinel = ListNode(-1)  # 哨兵结点\n\n            curr = sentinel\n            while l1 and l2:\n                if l1.val <= l2.val:\n                    curr.next = l1\n                    l1 = l1.next\n                else:\n                    curr.next = l2\n                    l2 = l2.next\n                curr = curr.next\n\n            curr.next = l1 if l1 is not None else l2\n\n            return sentinel.next\n\n        amount = len(lists)\n        interval = 1\n        while interval < amount:\n            for i in range(0, amount - interval, interval * 2):\n                lists[i] = mergeTwoLists(lists[i], lists[i + interval])\n            interval *= 2\n        return lists[0] if amount > 0 else lists\n\n'
          }
        ]
      },
      {
        title: '代码14.1.5',
        codes: [
          {
            language: 'Cpp',
            content:
              'class Solution {\npublic:\n    struct Status {\n        int val;\n        ListNode *ptr;\n        bool operator < (const Status &rhs) const {\n            return val > rhs.val;\n        }\n    };\n\n    priority_queue <Status> q;\n\n    ListNode* mergeKLists(vector<ListNode*>& lists) {\n        for (auto node: lists) {\n            if (node) q.push({node->val, node});\n        }\n        ListNode head, *tail = &head;\n        while (!q.empty()) {\n            auto f = q.top(); q.pop();\n            tail->next = f.ptr; \n            tail = tail->next;\n            if (f.ptr->next) q.push({f.ptr->next->val, f.ptr->next});\n        }\n        return head.next;\n    }\n};\n'
          },
          {
            language: 'Java',
            content:
              '/**\n * Definition for singly-linked list.\n * public class ListNode {\n *     int val;\n *     ListNode next;\n *     ListNode(int x) { val = x; }\n * }\n */\nclass Solution {\n   public ListNode mergeKLists(ListNode[] lists) {\n        if (lists == null || lists.length == 0) return null;\n        PriorityQueue<ListNode> queue = new PriorityQueue<>(lists.length, new Comparator<ListNode>() {\n            @Override\n            public int compare(ListNode o1, ListNode o2) {\n                if (o1.val < o2.val) return -1;\n                else if (o1.val == o2.val) return 0;\n                else return 1;\n            }\n        });\n        ListNode dummy = new ListNode(0);\n        ListNode p = dummy;\n        for (ListNode node : lists) {\n            if (node != null) queue.add(node);\n        }\n        while (!queue.isEmpty()) {\n            p.next = queue.poll();\n            p = p.next;\n            if (p.next != null) queue.add(p.next);\n        }\n        return dummy.next;\n    }\n'
          },
          {
            language: 'Py',
            content:
              'from typing import List\n# Definition for singly-linked list.\nclass ListNode(object):\n    def __init__(self, x):\n        self.val = x\n        self.next = None\n\n\nclass Solution(object):\n    def mergeKLists(self, lists: List[ListNode]) -> ListNode:\n        import heapq\n\n        l = []\n\n        for head in lists:\n            if head:\n                heapq.heappush(l, (head.val, head))\n\n        dummy = ListNode(-1)\n        cur = dummy\n\n        while l:\n            _, node = heapq.heappop(l)\n            cur.next = node\n            cur = cur.next\n            node = node.next\n            if node:\n                heapq.heappush(l, (node.val, node))\n\n        return dummy.next\n\n'
          }
        ]
      },
      {
        title: '代码14.2.1',
        codes: [
          {
            language: 'Cpp',
            content:
              '#include <iostream>\n#include <vector>\n\nusing namespace std;\n\nclass Solution {\npublic:\n    int findKthLargest(vector<int> &nums, int k) {\n        int size = nums.size();\n        sort(begin(nums), end(nums));\n        return nums[size - k];\n    }\n};\n'
          },
          {
            language: 'Java',
            content:
              'import java.util.Arrays;\n\npublic class Solution {\n\n    public int findKthLargest(int[] nums, int k) {\n        int len = nums.length;\n        Arrays.sort(nums);\n        return nums[len - k];\n    }\n}\n'
          },
          {
            language: 'Py',
            content:
              'from typing import List\n\n\nclass Solution:\n    def findKthLargest(self, nums: List[int], k: int) -> int:\n        nums.sort()\n        return nums[-k]\n\n'
          }
        ]
      },
      {
        title: '代码14.2.2',
        codes: [
          {
            language: 'Cpp',
            content:
              'class Solution {\npublic:\n    void maxHeapify(vector<int>& a, int i, int heapSize) {\n        int l = i * 2 + 1, r = i * 2 + 2, largest = i;\n        if (l < heapSize && a[l] > a[largest]) {\n            largest = l;\n        } \n        if (r < heapSize && a[r] > a[largest]) {\n            largest = r;\n        }\n        if (largest != i) {\n            swap(a[i], a[largest]);\n            maxHeapify(a, largest, heapSize);\n        }\n    }\n\n    void buildMaxHeap(vector<int>& a, int heapSize) {\n        for (int i = heapSize / 2; i >= 0; --i) {\n            maxHeapify(a, i, heapSize);\n        } \n    }\n\n    int findKthLargest(vector<int>& nums, int k) {\n        int heapSize = nums.size();\n        buildMaxHeap(nums, heapSize);\n        for (int i = nums.size() - 1; i >= nums.size() - k + 1; --i) {\n            swap(nums[0], nums[i]);\n            --heapSize;\n            maxHeapify(nums, 0, heapSize);\n        }\n        return nums[0];\n    }\n};\n'
          },
          {
            language: 'Java',
            content:
              'class Solution {\n  public int findKthLargest(int[] nums, int k) {\n      int heapSize = nums.length;\n      buildMaxHeap(nums, heapSize);\n      for (int i = nums.length - 1; i >= nums.length - k + 1; --i) {\n          swap(nums, 0, i);\n          --heapSize;\n          maxHeapify(nums, 0, heapSize);\n      }\n      return nums[0];\n  }\n\n  public void buildMaxHeap(int[] a, int heapSize) {\n      for (int i = heapSize / 2; i >= 0; --i) {\n          maxHeapify(a, i, heapSize);\n      } \n  }\n\n  public void maxHeapify(int[] a, int i, int heapSize) {\n      int l = i * 2 + 1, r = i * 2 + 2, largest = i;\n      if (l < heapSize && a[l] > a[largest]) {\n          largest = l;\n      } \n      if (r < heapSize && a[r] > a[largest]) {\n          largest = r;\n      }\n      if (largest != i) {\n          swap(a, i, largest);\n          maxHeapify(a, largest, heapSize);\n      }\n  }\n\n  public void swap(int[] a, int i, int j) {\n      int temp = a[i];\n      a[i] = a[j];\n      a[j] = temp;\n  }\n}\n'
          },
          {
            language: 'Py',
            content:
              'from typing import List\n\n\nclass Solution:\n    def findKthLargest(self, nums: List[int], k: int) -> int:\n        import heapq\n\n        heap = []\n\n        for i in range(k):\n            heap.append(nums[i])\n\n        heapq.heapify(heap)\n\n        for i in range(k, len(nums)):\n            if nums[i] > heap[0]:\n                heapq.heappop(heap)\n                heapq.heappush(heap, nums[i])\n\n        return heap[0]\n\n'
          }
        ]
      },
      {
        title: '代码14.2.3',
        codes: [
          {
            language: 'Cpp',
            content:
              'class Solution {\npublic:\n    void maxHeapify(vector<int>& a, int i, int heapSize) {\n        int l = i * 2 + 1, r = i * 2 + 2, largest = i;\n        if (l < heapSize && a[l] > a[largest]) {\n            largest = l;\n        } \n        if (r < heapSize && a[r] > a[largest]) {\n            largest = r;\n        }\n        if (largest != i) {\n            swap(a[i], a[largest]);\n            maxHeapify(a, largest, heapSize);\n        }\n    }\n\n    void buildMaxHeap(vector<int>& a, int heapSize) {\n        for (int i = heapSize / 2; i >= 0; --i) {\n            maxHeapify(a, i, heapSize);\n        } \n    }\n\n    int findKthLargest(vector<int>& nums, int k) {\n        int heapSize = nums.size();\n        buildMaxHeap(nums, heapSize);\n        for (int i = nums.size() - 1; i >= nums.size() - k + 1; --i) {\n            swap(nums[0], nums[i]);\n            --heapSize;\n            maxHeapify(nums, 0, heapSize);\n        }\n        return nums[0];\n    }\n};\n'
          },
          {
            language: 'Java',
            content:
              'class Solution {\n  public int findKthLargest(int[] nums, int k) {\n      int heapSize = nums.length;\n      buildMaxHeap(nums, heapSize);\n      for (int i = nums.length - 1; i >= nums.length - k + 1; --i) {\n          swap(nums, 0, i);\n          --heapSize;\n          maxHeapify(nums, 0, heapSize);\n      }\n      return nums[0];\n  }\n\n  public void buildMaxHeap(int[] a, int heapSize) {\n      for (int i = heapSize / 2; i >= 0; --i) {\n          maxHeapify(a, i, heapSize);\n      } \n  }\n\n  public void maxHeapify(int[] a, int i, int heapSize) {\n      int l = i * 2 + 1, r = i * 2 + 2, largest = i;\n      if (l < heapSize && a[l] > a[largest]) {\n          largest = l;\n      } \n      if (r < heapSize && a[r] > a[largest]) {\n          largest = r;\n      }\n      if (largest != i) {\n          swap(a, i, largest);\n          maxHeapify(a, largest, heapSize);\n      }\n  }\n\n  public void swap(int[] a, int i, int j) {\n      int temp = a[i];\n      a[i] = a[j];\n      a[j] = temp;\n  }\n}\n'
          },
          {
            language: 'Py',
            content:
              'from typing import List\n\n\nclass Solution:\n    def findKthLargest(self, nums: List[int], k: int) -> int:\n        import heapq\n\n        return heapq.nlargest(k, nums)[-1]\n\n'
          }
        ]
      },
      {
        title: '代码14.2.4',
        codes: [
          {
            language: 'Cpp',
            content:
              'class Solution {\npublic:\n    int quickSelect(vector<int>& a, int l, int r, int index) {\n        int q = randomPartition(a, l, r);\n        if (q == index) {\n            return a[q];\n        } else {\n            return q < index ? quickSelect(a, q + 1, r, index) : quickSelect(a, l, q - 1, index);\n        }\n    }\n\n    inline int randomPartition(vector<int>& a, int l, int r) {\n        int i = rand() % (r - l + 1) + l;\n        swap(a[i], a[r]);\n        return partition(a, l, r);\n    }\n\n    inline int partition(vector<int>& a, int l, int r) {\n        int x = a[r], i = l - 1;\n        for (int j = l; j < r; ++j) {\n            if (a[j] <= x) {\n                swap(a[++i], a[j]);\n            }\n        }\n        swap(a[i + 1], a[r]);\n        return i + 1;\n    }\n\n    int findKthLargest(vector<int>& nums, int k) {\n        srand(time(0));\n        return quickSelect(nums, 0, nums.size() - 1, nums.size() - k);\n    }\n};\n'
          },
          {
            language: 'Java',
            content:
              'class Solution {\n  Random random = new Random();\n\n  public int findKthLargest(int[] nums, int k) {\n      return quickSelect(nums, 0, nums.length - 1, nums.length - k);\n  }\n\n  public int quickSelect(int[] a, int l, int r, int index) {\n      int q = randomPartition(a, l, r);\n      if (q == index) {\n          return a[q];\n      } else {\n          return q < index ? quickSelect(a, q + 1, r, index) : quickSelect(a, l, q - 1, index);\n      }\n  }\n\n  public int randomPartition(int[] a, int l, int r) {\n      int i = random.nextInt(r - l + 1) + l;\n      swap(a, i, r);\n      return partition(a, l, r);\n  }\n\n  public int partition(int[] a, int l, int r) {\n      int x = a[r], i = l - 1;\n      for (int j = l; j < r; ++j) {\n          if (a[j] <= x) {\n              swap(a, ++i, j);\n          }\n      }\n      swap(a, i + 1, r);\n      return i + 1;\n  }\n\n  public void swap(int[] a, int i, int j) {\n      int temp = a[i];\n      a[i] = a[j];\n      a[j] = temp;\n  }\n}\n'
          },
          {
            language: 'Py',
            content:
              'from typing import List\nimport random\n\n\nclass Solution:\n    def findKthLargest(self, nums: List[int], k: int) -> int:\n        return self.select(nums, 0, len(nums) - 1, len(nums) - k)\n\n    def select(self, nums: List[int], left: int, right: int, k_smallest: int) -> int:\n        if left == right:\n            # 如果只有一个元素，则最左边的元素即是答案\n            return nums[left]\n        # 随机获取一个 [left, right] 范围的整数\n        pivot_index = random.randint(left, right)\n        # 根据 pivot = nums[pivot_index] 进行划分，得到新的 pivot_index，此时 pivot_index 左边的都小于等于 pivot，右边的都大于等于 pivot\n        pivot_index = self.partition(nums, left, right, pivot_index)\n        if k_smallest == pivot_index:\n            # 如果此时 N - K == pivot_index，表示我们已经找到第 N-K+1 小元素，即第 K 大元素。这也就是我们前面所说的可以直接解决的子问题\n            return nums[k_smallest]\n        elif k_smallest < pivot_index:\n            return self.select(nums, left, pivot_index - 1, k_smallest)\n        else:\n            return self.select(nums, pivot_index + 1, right, k_smallest)\n\n    def partition(self, nums: List[int], left: int, right: int, pivot_index: int):\n        i = left\n        j = right + 1\n        pivot = nums[pivot_index]\n        nums[pivot_index], nums[left] = nums[left], nums[pivot_index]\n\n        while True:\n            while True:\n                i += 1\n                if i == right or nums[i] >= pivot:\n                    break\n            while True:\n                j -= 1\n                if j == left or nums[j] <= pivot:\n                    break\n            if i >= j:\n                break\n            nums[i], nums[j] = nums[j], nums[i]\n        nums[left], nums[j] = nums[j], nums[left]\n        return j\n\n'
          }
        ]
      },
      {
        title: '代码14.2.5',
        codes: [
          {
            language: 'Cpp',
            content:
              'class Solution {\npublic:\n    int quickSelect(vector<int>& a, int l, int r, int index) {\n        int q = randomPartition(a, l, r);\n        if (q == index) {\n            return a[q];\n        } else {\n            return q < index ? quickSelect(a, q + 1, r, index) : quickSelect(a, l, q - 1, index);\n        }\n    }\n\n    inline int randomPartition(vector<int>& a, int l, int r) {\n        int i = rand() % (r - l + 1) + l;\n        swap(a[i], a[r]);\n        return partition(a, l, r);\n    }\n\n    inline int partition(vector<int>& a, int l, int r) {\n        int x = a[r], i = l - 1;\n        for (int j = l; j < r; ++j) {\n            if (a[j] <= x) {\n                swap(a[++i], a[j]);\n            }\n        }\n        swap(a[i + 1], a[r]);\n        return i + 1;\n    }\n\n    int findKthLargest(vector<int>& nums, int k) {\n        srand(time(0));\n        return quickSelect(nums, 0, nums.size() - 1, nums.size() - k);\n    }\n};\n'
          },
          {
            language: 'Java',
            content:
              'class Solution {\n  Random random = new Random();\n\n  public int findKthLargest(int[] nums, int k) {\n      return quickSelect(nums, 0, nums.length - 1, nums.length - k);\n  }\n\n  public int quickSelect(int[] a, int l, int r, int index) {\n      int q = randomPartition(a, l, r);\n      if (q == index) {\n          return a[q];\n      } else {\n          return q < index ? quickSelect(a, q + 1, r, index) : quickSelect(a, l, q - 1, index);\n      }\n  }\n\n  public int randomPartition(int[] a, int l, int r) {\n      int i = random.nextInt(r - l + 1) + l;\n      swap(a, i, r);\n      return partition(a, l, r);\n  }\n\n  public int partition(int[] a, int l, int r) {\n      int x = a[r], i = l - 1;\n      for (int j = l; j < r; ++j) {\n          if (a[j] <= x) {\n              swap(a, ++i, j);\n          }\n      }\n      swap(a, i + 1, r);\n      return i + 1;\n  }\n\n  public void swap(int[] a, int i, int j) {\n      int temp = a[i];\n      a[i] = a[j];\n      a[j] = temp;\n  }\n}\n'
          },
          {
            language: 'Py',
            content:
              'from typing import List\nimport random\n\n\nclass Solution:\n    def findKthLargest(self, nums: List[int], k: int) -> int:\n        return self.select(nums, 0, len(nums) - 1, len(nums) - k)\n\n    def select(self, nums: List[int], left: int, right: int, k_smallest: int) -> int:\n        while left < right:\n            pivot_index = random.randint(left, right)\n            pivot_index = self.partition(nums, left, right, pivot_index)\n            if k_smallest == pivot_index:\n                return nums[k_smallest]\n            elif k_smallest < pivot_index:\n                right = pivot_index - 1\n            else:\n                left = pivot_index + 1\n\n        if left == right:\n            return nums[left]\n\n    def partition(self, nums: List[int], left: int, right: int, pivot_index: int):\n        i = left\n        j = right + 1\n        pivot = nums[pivot_index]\n        nums[pivot_index], nums[left] = nums[left], nums[pivot_index]\n\n        while True:\n            while True:\n                i += 1\n                if i == right or nums[i] >= pivot:\n                    break\n            while True:\n                j -= 1\n                if j == left or nums[j] <= pivot:\n                    break\n            if i >= j:\n                break\n            nums[i], nums[j] = nums[j], nums[i]\n        nums[left], nums[j] = nums[j], nums[left]\n        return j\n\n'
          }
        ]
      },
      {
        title: '代码14.3.1',
        codes: [
          {
            language: 'Cpp',
            content:
              'class Solution {\npublic:\n    bool searchMatrix(vector<vector<int>>& matrix, int target) {\n        for(int i = 0; i < matrix.size(); i++)\n            for(int j = 0; j < matrix[0].size(); j++) {\n                if(matrix[i][j] == target) return true;\n            }\n        return false;\n    }\n};\n'
          },
          {
            language: 'Java',
            content:
              'class Solution {\n  public boolean searchMatrix(int[][] matrix, int target) {\n      for (int i = 0; i < matrix.length; i++) {\n          for (int j = 0; j < matrix[0].length; j++) {\n              if (matrix[i][j] == target) {\n                  return true;\n              }\n          }\n      }\n\n      return false;\n  }\n}\n'
          },
          {
            language: 'Py',
            content:
              'from typing import List\nclass Solution:\n    def searchMatrix(self, matrix: List[List[int]], target: int) -> bool:\n        """\n        :type matrix: List[List[int]]\n        :type target: int\n        :rtype: bool\n        """\n        if not matrix or not matrix[0]:\n            return False\n\n        m = len(matrix)\n        n = len(matrix[0])\n\n        for i in range(m):\n            for j in range(n):\n                if matrix[i][j] == target:\n                    return True\n\n        return False\n\n'
          }
        ]
      },
      {
        title: '代码14.3.2',
        codes: [
          {
            language: 'Cpp',
            content:
              'class Solution {\npublic:\n    bool searchMatrix(vector<vector<int>>& matrix, int target) {\n        for(int i = 0; i < matrix.size(); i++)\n            for(int j = 0; j < matrix[0].size(); j++) {\n                if(matrix[i][j] == target) return true;\n            }\n        return false;\n    }\n};\n'
          },
          {
            language: 'Java',
            content:
              'class Solution {\n  public boolean searchMatrix(int[][] matrix, int target) {\n      for (int i = 0; i < matrix.length; i++) {\n          for (int j = 0; j < matrix[0].length; j++) {\n              if (matrix[i][j] == target) {\n                  return true;\n              }\n          }\n      }\n\n      return false;\n  }\n}\n'
          },
          {
            language: 'Py',
            content:
              'from typing import List\nclass Solution:\n    def searchMatrix(self, matrix: List[List[int]], target: int) -> bool:\n        """\n        :type matrix: List[List[int]]\n        :type target: int\n        :rtype: bool\n        """\n\n        def binarySearch(arr: List[List[int]], target: int) -> bool:\n            lo = 0\n            hi = len(arr) - 1\n            while lo <= hi:\n                mid = lo + (hi - lo) // 2\n                if arr[mid] == target:\n                    return True\n                elif arr[mid] < target:\n                    lo = mid + 1\n                else:\n                    hi = mid - 1\n\n            return False\n\n        if not matrix or not matrix[0]:\n            return False\n\n        m = len(matrix)\n\n        for i in range(m):\n            if binarySearch(matrix[i], target):\n                return True\n\n        return False\n\n'
          }
        ]
      },
      {
        title: '代码14.3.3',
        codes: [
          {
            language: 'Cpp',
            content:
              'class Solution {\npublic:\n    bool searchMatrix(vector<vector<int>>& matrix, int target) {\n        if(matrix.size() == 0 || matrix[0].size() == 0) return false;\n        int i = matrix.size() - 1;\n        int j = 0;\n        while(i >= 0 && j < matrix[0].size()){\n            if(matrix[i][j] > target)\n                --i;\n            else if(matrix[i][j] < target)\n                ++j;\n            else return true;\n        }\n        return false;\n    }\n};\n'
          },
          {
            language: 'Java',
            content:
              'class Solution {\n  private boolean binarySearch(int[][] matrix, int target, int start, boolean vertical) {\n      int lo = start;\n      int hi = vertical ? matrix[0].length-1 : matrix.length-1;\n\n      while (hi >= lo) {\n          int mid = (lo + hi)/2;\n          if (vertical) { // searching a column\n              if (matrix[start][mid] < target) {\n                  lo = mid + 1;\n              } else if (matrix[start][mid] > target) {\n                  hi = mid - 1;\n              } else {\n                  return true;\n              }\n          } else { // searching a row\n              if (matrix[mid][start] < target) {\n                  lo = mid + 1;\n              } else if (matrix[mid][start] > target) {\n                  hi = mid - 1;\n              } else {\n                  return true;\n              }\n          }\n      }\n\n      return false;\n  }\n\n  public boolean searchMatrix(int[][] matrix, int target) {\n      // an empty matrix obviously does not contain `target`\n      if (matrix == null || matrix.length == 0) {\n          return false;\n      }\n\n      // iterate over matrix diagonals\n      int shorterDim = Math.min(matrix.length, matrix[0].length);\n      for (int i = 0; i < shorterDim; i++) {\n          boolean verticalFound = binarySearch(matrix, target, i, true);\n          boolean horizontalFound = binarySearch(matrix, target, i, false);\n          if (verticalFound || horizontalFound) {\n              return true;\n          }\n      }\n      \n      return false; \n  }\n}\n'
          },
          {
            language: 'Py',
            content:
              'from typing import List\nclass Solution:\n    def binary_search(self, matrix: List[List[int]], target: int, start: int, vertical: bool) -> bool:\n        lo = start\n        hi = len(matrix[0]) - 1 if vertical else len(matrix) - 1\n\n        while lo <= hi:\n            mid = lo + (hi - lo) // 2\n            if vertical:\n                if matrix[start][mid] < target:\n                    lo = mid + 1\n                elif matrix[start][mid] > target:\n                    hi = mid - 1\n                else:\n                    return True\n            else:\n                if matrix[mid][start] < target:\n                    lo = mid + 1\n                elif matrix[mid][start] > target:\n                    hi = mid - 1\n                else:\n                    return True\n\n        return False\n\n    def searchMatrix(self, matrix: List[List[int]], target: int) -> bool:\n        if not matrix:\n            return False\n\n        minLen = min(len(matrix), len(matrix[0]))\n        for i in range(minLen):\n            vertical_found = self.binary_search(matrix, target, i, True)\n            horizontal_found = self.binary_search(matrix, target, i, False)\n            if vertical_found or horizontal_found:\n                return True\n\n        return False\n\n'
          }
        ]
      },
      {
        title: '代码14.3.4',
        codes: [
          {
            language: 'Cpp',
            content:
              'class Solution {\npublic:\n    bool searchMatrix(vector<vector<int>>& matrix, int target) {\n        if(matrix.size() == 0 || matrix[0].size() == 0) return false;\n        int i = matrix.size() - 1;\n        int j = 0;\n        while(i >= 0 && j < matrix[0].size()){\n            if(matrix[i][j] > target)\n                --i;\n            else if(matrix[i][j] < target)\n                ++j;\n            else return true;\n        }\n        return false;\n    }\n};\n'
          },
          {
            language: 'Java',
            content:
              'class Solution {\n  private int[][] matrix;\n  private int target;\n\n  private boolean searchRec(int left, int up, int right, int down) {\n      // this submatrix has no height or no width.\n      if (left > right || up > down) {\n          return false;\n      // `target` is already larger than the largest element or smaller\n      // than the smallest element in this submatrix.\n      } else if (target < matrix[up][left] || target > matrix[down][right]) {\n          return false;\n      }\n\n      int mid = left + (right-left)/2;\n\n      // Locate `row` such that matrix[row-1][mid] < target < matrix[row][mid]\n      int row = up;\n      while (row <= down && matrix[row][mid] <= target) {\n          if (matrix[row][mid] == target) {\n              return true;\n          }\n          row++;\n      }\n\n      return searchRec(left, row, mid-1, down) || searchRec(mid+1, up, right, row-1);\n  }\n\n  public boolean searchMatrix(int[][] mat, int targ) {\n      // cache input values in object to avoid passing them unnecessarily\n      // to `searchRec`\n      matrix = mat;\n      target = targ;\n\n      // an empty matrix obviously does not contain `target`\n      if (matrix == null || matrix.length == 0) {\n          return false;\n      }\n\n      return searchRec(0, 0, matrix[0].length-1, matrix.length-1);\n  }\n}\n'
          },
          {
            language: 'Py',
            content:
              'from typing import List\nclass Solution:\n    def searchMatrix(self, matrix: List[List[int]], target: int) -> bool:\n        if not matrix:\n            return False\n\n        def search_rec(left, up, right, down):\n            # 空矩阵\n            if left > right or up > down:\n                return False\n            # 目标值大于矩阵右下角元素或者小于左上角元素\n            elif target < matrix[up][left] or target > matrix[down][right]:\n                return False\n\n            mid = left + (right - left) // 2\n\n            # 定位 row，来使 matrix[row-1][mid] < target < matrix[row][mid]\n            row = up\n            while row <= down and matrix[row][mid] <= target:\n                if matrix[row][mid] == target:\n                    return True\n                row += 1\n\n            return search_rec(left, row, mid - 1, down) or search_rec(\n                mid + 1, up, right, row - 1\n            )\n\n        return search_rec(0, 0, len(matrix[0]) - 1, len(matrix) - 1)\n\n'
          }
        ]
      },
      {
        title: '代码14.3.5',
        codes: [
          {
            language: 'Cpp',
            content:
              'class Solution {\npublic:\n    bool searchMatrix(vector<vector<int>>& matrix, int target) {\n        if(matrix.size() == 0 || matrix[0].size() == 0) return false;\n        int i = matrix.size() - 1;\n        int j = 0;\n        while(i >= 0 && j < matrix[0].size()){\n            if(matrix[i][j] > target)\n                --i;\n            else if(matrix[i][j] < target)\n                ++j;\n            else return true;\n        }\n        return false;\n    }\n};\n'
          },
          {
            language: 'Java',
            content:
              'class Solution {\n  public boolean searchMatrix(int[][] matrix, int target) {\n      // start our "pointer" in the bottom-left\n      int row = matrix.length-1;\n      int col = 0;\n\n      while (row >= 0 && col < matrix[0].length) {\n          if (matrix[row][col] > target) {\n              row--;\n          } else if (matrix[row][col] < target) {\n              col++;\n          } else { // found it\n              return true;\n          }\n      }\n\n      return false;\n  }\n}\n'
          },
          {
            language: 'Py',
            content:
              'from typing import List\nclass Solution:\n    def searchMatrix(self, matrix: List[List[int]], target: int) -> bool:\n        if not matrix:\n            return False\n\n        # 也就是找到第一个大于target的位置\n        def binarySearch(matrix: List[List[int]], up: int, down: int, col: int, target: int) -> List:\n            lo = up\n            hi = down + 1\n            while lo < hi:\n                mid = lo + (hi - lo) // 2\n                if matrix[mid][col] == target:\n                    return [True, mid]\n                elif matrix[mid][col] < target:\n                    lo = mid + 1\n                else:\n                    hi = mid\n\n            return [False, lo]\n\n        def search_rec(left: int, up: int, right: int, down: int) -> bool:\n            # 空矩阵\n            if left > right or up > down:\n                return False\n            # 目标值大于矩阵右下角元素或者小于左上角元素\n            elif target < matrix[up][left] or target > matrix[down][right]:\n                return False\n\n            mid = left + (right - left) // 2\n\n            # 定位 row，来使 matrix[row-1][mid] < target < matrix[row][mid]\n            find, row = binarySearch(matrix, up, down, mid, target)\n\n            return (\n                find\n                or search_rec(left, row, mid - 1, down)\n                or search_rec(mid + 1, up, right, row - 1)\n            )\n\n        return search_rec(0, 0, len(matrix[0]) - 1, len(matrix) - 1)\n\n'
          }
        ]
      },
      {
        title: '代码14.3.6',
        codes: [
          {
            language: 'Cpp',
            content:
              'class Solution {\npublic:\n    bool searchMatrix(vector<vector<int>>& matrix, int target) {\n        if(matrix.size() == 0 || matrix[0].size() == 0) return false;\n        int i = matrix.size() - 1;\n        int j = 0;\n        while(i >= 0 && j < matrix[0].size()){\n            if(matrix[i][j] > target)\n                --i;\n            else if(matrix[i][j] < target)\n                ++j;\n            else return true;\n        }\n        return false;\n    }\n};\n'
          },
          {
            language: 'Java',
            content:
              'class Solution {\n  public boolean searchMatrix(int[][] matrix, int target) {\n      // start our "pointer" in the bottom-left\n      int row = matrix.length-1;\n      int col = 0;\n\n      while (row >= 0 && col < matrix[0].length) {\n          if (matrix[row][col] > target) {\n              row--;\n          } else if (matrix[row][col] < target) {\n              col++;\n          } else { // found it\n              return true;\n          }\n      }\n\n      return false;\n  }\n}\n'
          },
          {
            language: 'Py',
            content:
              'from typing import List\nclass Solution:\n    def searchMatrix(self, matrix: List[List[int]], target: int):\n        if len(matrix) == 0 or len(matrix[0]) == 0:\n            return False\n\n        m = len(matrix)\n        n = len(matrix[0])\n\n        row = m - 1\n        col = 0\n\n        while col < n and row >= 0:\n            if matrix[row][col] > target:\n                row -= 1\n            elif matrix[row][col] < target:\n                col += 1\n            else:\n                return True\n\n        return False\n\n'
          }
        ]
      }
    ]
  },
  {
    id: '15',
    name: '第十五章',
    list: [
      {
        title: '代码15.1.1',
        codes: [
          {
            language: 'Cpp',
            content:
              'class Solution {\r\npublic:\r\n    int findContentChildren(vector<int>& g, vector<int>& s) {\r\n        // 对孩子胃口以及饼干排序\r\n        sort(g.begin(), g.end());\r\n        sort(s.begin(), s.end());\r\n        int ans = 0;\r\n        // 饼干下标\r\n        int idx = 0;\r\n        // 遍历每个孩子\r\n        for (int i = 0; i < g.size(); i++) {\r\n            // 遍历剩余的饼干\r\n            while (idx < s.size()) {\r\n                if (s[idx] >= g[i]) {\r\n                    ans += 1;\r\n                    idx += 1;\r\n                    break;\r\n                } else {\r\n                    idx += 1;\r\n                }\r\n            }\r\n        }\r\n        return ans;\r\n    }\r\n};\n'
          },
          {
            language: 'Java',
            content:
              'class Solution {\r\n    public int findContentChildren(int[] g, int[] s) {\r\n        // 对孩子胃口以及饼干排序\r\n        Arrays.sort(g);\r\n        Arrays.sort(s);\r\n        int ans = 0;\r\n        // 饼干下标\r\n        int idx = 0;\r\n        // 遍历每个孩子\r\n        for (int i = 0; i < g.length; i++) {\r\n            // 遍历剩余的饼干\r\n            while (idx < s.length) {\r\n                if (s[idx] >= g[i]) {\r\n                    ans += 1;\r\n                    idx += 1;\r\n                    break;\r\n                } else {\r\n                    idx += 1;\r\n                }\r\n            }\r\n        }\r\n        return ans;\r\n    }\r\n}\n'
          },
          {
            language: 'Py',
            content:
              'class Solution:\n    def findContentChildren(self, g: List[int], s: List[int]) -> int:\n        # 对孩子胃口以及饼干排序\n        g.sort()\n        s.sort()\n        ans = 0\n        # 饼干下标\n        idx = 0\n        # 遍历每个孩子\n        for i in range(len(g)):\n            # 遍历剩余的饼干\n            while idx < len(s):\n                if s[idx] >= g[i]:\n                    ans += 1\n                    idx += 1\n                    break\n                else:\n                    idx += 1\n        return ans\n\n'
          }
        ]
      },
      {
        title: '代码15.2.1',
        codes: [
          {
            language: 'Cpp',
            content:
              'class Solution {\r\npublic:\r\n    bool canJump(vector<int>& nums) {\r\n        bool dp[nums.size()];\r\n        memset(dp, false, sizeof(dp));\r\n        dp[0] = true;\r\n        for (int i = 1; i < nums.size(); i++) {\r\n            for (int j = 0; j < i; j++) {\r\n                if (j + nums[j] >= i) {\r\n                    dp[i] = dp[i] | dp[j];\r\n                }\r\n            }\r\n        }\r\n        return dp[nums.size() - 1];\r\n    }\r\n};\n'
          },
          {
            language: 'Java',
            content:
              'class Solution {\r\n    public boolean canJump(int[] nums) {\r\n        boolean[] dp = new boolean[nums.length];\r\n        dp[0] = true;\r\n        for (int i = 1; i < nums.length; i++) {\r\n            for (int j = 0; j < i; j++) {\r\n                if (j + nums[j] >= i) {\r\n                    dp[i] = dp[i] | dp[j];\r\n                }\r\n            }\r\n        }\r\n        return dp[nums.length - 1];\r\n    }\r\n}\n'
          },
          {
            language: 'Py',
            content:
              'class Solution:\n    def canJump(self, nums: List[int]) -> bool:\n        dp = [False] * len(nums)\n        dp[0] = True\n        for i in range(1, len(nums)):\n            for j in range(0, i):\n                if j + nums[j] >= i:\n                    dp[i] = dp[i] | dp[j]\n        return dp[len(nums) - 1]\n\n'
          }
        ]
      },
      {
        title: '代码15.2.2',
        codes: [
          {
            language: 'Cpp',
            content:
              'class Solution {\r\npublic:\r\n    bool canJump(vector<int>& nums) {\r\n        int n = nums.size();\r\n        int dp[n];\r\n        memset(dp, 0, sizeof(dp));\r\n        dp[0] = nums[0];\r\n        for (int i = 1; i < n; i++) {\r\n            if (dp[i - 1] < i) {\r\n                dp[i] = dp[i - 1];\r\n            } else {\r\n                if (dp[i - 1] > i + nums[i]) {\r\n                    dp[i] = dp[i - 1];\r\n                } else {\r\n                    dp[i] = i + nums[i];\r\n                }\r\n            }\r\n        }\r\n        return dp[n - 1] >= n - 1;\r\n    }\r\n};\n'
          },
          {
            language: 'Java',
            content:
              'class Solution {\r\n    public boolean canJump(int[] nums) {\r\n        int n = nums.length;\r\n        int[] dp = new int[n];\r\n        dp[0] = nums[0];\r\n        for (int i = 1; i < n; i++) {\r\n            if (dp[i - 1] < i) {\r\n                dp[i] = dp[i - 1];\r\n            } else {\r\n                dp[i] = Math.max(dp[i - 1], i + nums[i]);\r\n            }\r\n        }\r\n        return dp[n - 1] >= n - 1;\r\n    }\r\n}\n'
          },
          {
            language: 'Py',
            content:
              'class Solution:\r\n    def canJump(self, nums: List[int]) -> bool:\r\n        n = len(nums)\r\n        dp = [0] * n\r\n        dp[0] = nums[0]\r\n        for i in range(1, n):\r\n            if dp[i - 1] < i:\r\n                dp[i] = dp[i - 1]\r\n            else:\r\n                dp[i] = max(dp[i - 1], i + nums[i])\r\n        return dp[n - 1] >= n - 1\r\n\n'
          }
        ]
      },
      {
        title: '代码15.2.3',
        codes: [
          {
            language: 'Cpp',
            content:
              'class Solution {\r\npublic:\r\n    bool canJump(vector<int>& nums) {\r\n        int begin = 0, end = 0;\r\n        while (true) {\r\n            // 下次考虑的最远位置\r\n            int next_end = end;\r\n            // min(end + 1, len(nums)) 防止越界\r\n            int limit = end + 1;\r\n            if (nums.size() < limit) {\r\n                limit = nums.size();\r\n            }\r\n            for (int i = begin; i < limit; i++) {\r\n                if (next_end > i + nums[i]) {\r\n                    next_end = next_end;\r\n                } else {\r\n                    next_end = i + nums[i];\r\n                }\r\n            }\r\n            if (next_end == end) {\r\n                break;\r\n            }\r\n            begin = end + 1;\r\n            end = next_end;\r\n        }\r\n        return end >= nums.size() - 1;\r\n    }\r\n};\n'
          },
          {
            language: 'Java',
            content:
              'class Solution {\r\n    public boolean canJump(int[] nums) {\r\n        int begin = 0, end = 0;\r\n        while (true) {\r\n            // 下次考虑的最远位置\r\n            int next_end = end;\r\n            // min(end + 1, len(nums)) 防止越界\r\n            for (int i = begin; i < Math.min(end + 1, nums.length); i++) {\r\n                next_end = Math.max(next_end, i + nums[i]);\r\n            }\r\n            if (next_end == end) {\r\n                break;\r\n            }\r\n            begin = end + 1;\r\n            end = next_end;\r\n        }\r\n        return end >= nums.length - 1;\r\n    }\r\n}\n'
          },
          {
            language: 'Py',
            content:
              'class Solution:\n    def canJump(self, nums: List[int]) -> bool:\n        # 可跳跃范围\n        begin, end = 0, 0\n        # 下次考虑的最远位置，终点位置\n        next_end = end, target = len(nums) - 1\n        while next_end < target:\n            # min(end + 1, len(nums)) 防止越界\n            for i in range(begin, min(end + 1, len(nums))):\n                next_end = max(next_end, i + nums[i])\n            # 范围不发生变化，终点不可达\n            if next_end == end:\n                return False\n            begin, end = end + 1, next_end\n        return True\n\n'
          }
        ]
      },
      {
        title: '代码15.3.1',
        codes: [
          {
            language: 'Cpp',
            content:
              'class Solution {\r\npublic\r\n    int candy(int[] ratings) {\r\n        int n = ratings.length;\r\n        int[] left_ans = new int[n];\r\n        int[] right_ans = new int[n];\r\n        Arrays.fill(left_ans, 1);\r\n        Arrays.fill(right_ans, 1);\r\n        int ans = 0;\r\n        // 考虑左相邻孩子条件\r\n        for (int i = 1; i < n; i++) {\r\n            if (ratings[i] > ratings[i - 1]) {\r\n                left_ans[i] = left_ans[i - 1] + 1;\r\n            }\r\n        }\r\n        // 考虑右相邻孩子条件\r\n        for (int i = n - 2; i >= 0; i--) {\r\n            if (ratings[i] > ratings[i + 1]) {\r\n                right_ans[i] = right_ans[i + 1] + 1;\r\n            }\r\n        }\r\n        // 合并两个条件结果\r\n        for (int i = 0; i < n; i++) {\r\n            ans += Math.max(left_ans[i], right_ans[i]);\r\n        }\r\n        return ans;\r\n    }\r\n}\n'
          },
          {
            language: 'Java',
            content:
              'class Solution {\r\n    public int candy(int[] ratings) {\r\n        int n = ratings.length;\r\n        int[] left_ans = new int[n];\r\n        int[] right_ans = new int[n];\r\n        Arrays.fill(left_ans, 1);\r\n        Arrays.fill(right_ans, 1);\r\n        int ans = 0;\r\n        // 考虑左相邻孩子条件\r\n        for (int i = 1; i < n; i++) {\r\n            if (ratings[i] > ratings[i - 1]) {\r\n                left_ans[i] = left_ans[i - 1] + 1;\r\n            }\r\n        }\r\n        // 考虑右相邻孩子条件\r\n        for (int i = n - 2; i >= 0; i--) {\r\n            if (ratings[i] > ratings[i + 1]) {\r\n                right_ans[i] = right_ans[i + 1] + 1;\r\n            }\r\n        }\r\n        // 合并两个条件结果\r\n        for (int i = 0; i < n; i++) {\r\n            ans += Math.max(left_ans[i], right_ans[i]);\r\n        }\r\n        return ans;\r\n    }\r\n}\n'
          },
          {
            language: 'Py',
            content:
              'class Solution:\n    def leastInterval(self, tasks: List[str], n: int) -> int:\n        t_map = [0] * 26\n        for t in tasks:\n            t_map[ord(t) - ord("A")] += 1\n        t_map.sort()\n        # max_num 为最高次数，cnt 为最高次数的任务种类\n        max_num, cnt = t_map[25], 0\n        for i in range(26):\n            if t_map[i] == max_num:\n                cnt += 1\n        return max((max_num - 1) * (n + 1) + cnt, len(tasks))\n\n'
          }
        ]
      },
      {
        title: '代码15.4.1',
        codes: [
          {
            language: 'Cpp',
            content:
              'class Solution {\npublic:\n    int candy(vector<int>& ratings) {\n        int n = ratings.size();\n        vector<int> left_ans(n, 1);\n        vector<int> right_ans(n, 1);\n        int ans = 0;\n        // 考虑左相邻孩子条件\n        for (int i = 1; i < n; i++) {\n            if (ratings[i] > ratings[i - 1]) {\n                left_ans[i] = left_ans[i - 1] + 1;\n            }\n        }\n        // 考虑右相邻孩子条件\n        for (int i = n - 2; i >= 0; i--) {\n            if (ratings[i] > ratings[i + 1]) {\n                right_ans[i] = right_ans[i + 1] + 1;\n            }\n        }\n        // 合并两个条件结果\n        for (int i = 0; i < n; i++) {\n            cout << left_ans[i] << ":" << right_ans[i] << endl;\n            if (left_ans[i] > right_ans[i]) {\n                ans += left_ans[i];\n            } else {\n                ans += right_ans[i];\n            }\n        }\n        return ans;\n    }\n};\n'
          },
          {
            language: 'Java',
            content:
              'class Solution {\r\n    public int candy(int[] ratings) {\r\n        int n = ratings.length;\r\n        int[] left_ans = new int[n];\r\n        int[] right_ans = new int[n];\r\n        Arrays.fill(left_ans, 1);\r\n        Arrays.fill(right_ans, 1);\r\n        int ans = 0;\r\n        // 考虑左相邻孩子条件\r\n        for (int i = 1; i < n; i++) {\r\n            if (ratings[i] > ratings[i - 1]) {\r\n                left_ans[i] = left_ans[i - 1] + 1;\r\n            }\r\n        }\r\n        // 考虑右相邻孩子条件\r\n        for (int i = n - 2; i >= 0; i--) {\r\n            if (ratings[i] > ratings[i + 1]) {\r\n                right_ans[i] = right_ans[i + 1] + 1;\r\n            }\r\n        }\r\n        // 合并两个条件结果\r\n        for (int i = 0; i < n; i++) {\r\n            ans += Math.max(left_ans[i], right_ans[i]);\r\n        }\r\n        return ans;\r\n    }\r\n}\n'
          },
          {
            language: 'Py',
            content:
              'class Solution:\n    def candy(self, ratings: List[int]) -> int:\n        left_ans, right_ans = [1] * len(ratings), [1] * len(ratings)\n        ans = 0\n        # 考虑左相邻孩子条件\n        for i in range(1, len(ratings)):\n            if ratings[i] > ratings[i - 1]:\n                left_ans[i] = left_ans[i - 1] + 1\n        # 考虑右相邻孩子条件\n        for i in range(len(ratings) - 2, -1, -1):\n            if ratings[i] > ratings[i + 1]:\n                right_ans[i] = right_ans[i + 1] + 1\n        # 合并两个条件结果\n        for i in range(0, len(ratings)):\n            ans += max(left_ans[i], right_ans[i])\n        return ans\n\n'
          }
        ]
      }
    ]
  },
  {
    id: '16',
    name: '第十六章',
    list: [
      {
        title: '代码16.1.1',
        codes: [
          {
            language: 'Cpp',
            content:
              'class Solution {\r\npublic:\r\n    vector<vector<int>> ans;\r\n    vector<int> path;\r\n    vector<vector<int>> combinationSum(vector<int>& candidates, int target) {\r\n        dfs(candidates, 0, target);\r\n        return ans;\r\n    }\r\n    void dfs(vector<int>& candidates, int idx, int cur) {\r\n        // 递归结束\r\n        if (cur == 0) {\r\n            // 克隆 path 并添加到 ans\r\n            ans.push_back(vector<int>(path));\r\n            return;\r\n        } else if (idx == candidates.size()) {\r\n            return;\r\n        }\r\n        // 1.加入这个数字\r\n        if (candidates[idx] <= cur) {\r\n            path.push_back(candidates[idx]);\r\n            // idx 不变，继续考虑当前数字\r\n            dfs(candidates, idx, cur - candidates[idx]);\r\n            // 消除影响\r\n            path.pop_back();\r\n        }\r\n        // 2.不加入这个数字，考虑下一个数字\r\n        dfs(candidates, idx + 1, cur);\r\n    }\r\n};\n'
          },
          {
            language: 'Java',
            content:
              'class Solution {\r\n    List<List<Integer>> ans = new ArrayList<>();\r\n    public List<List<Integer>> combinationSum(int[] candidates, int target) {\r\n        dfs(candidates, 0, target, new ArrayList<>());\r\n        return ans;\r\n    }\r\n    public void dfs(int[] candidates, int idx, int cur, List<Integer> path) {\r\n        // 递归结束\r\n        if (cur == 0) {\r\n            // 克隆 path 并添加到 ans\r\n            ans.add(new ArrayList<>(path));\r\n            return;\r\n        } else if (idx == candidates.length) {\r\n            return;\r\n        }\r\n        // 1.加入这个数字\r\n        if (candidates[idx] <= cur) {\r\n            path.add(candidates[idx]);\r\n            // idx 不变，继续考虑当前数字\r\n            dfs(candidates, idx, cur - candidates[idx], path);\r\n            // 消除影响\r\n            path.remove(path.size() - 1);\r\n        }\r\n        // 2.不加入这个数字，考虑下一个数字\r\n        dfs(candidates, idx + 1, cur, path);\r\n    }\r\n}\n'
          },
          {
            language: 'Py',
            content:
              'class Solution:\n    def combinationSum(self, candidates: List[int], target: int) -> List[List[int]]:\n        ans = []\n        n = len(candidates)\n\n        def dfs(idx: int, cur: int, path: List[int]):\n            # 递归结束\n            if cur == 0:\n                # 克隆 path 并添加到 ans\n                ans.append(path[:])\n                return\n            elif idx == n:\n                return\n            # 1.加入这个数字\n            if candidates[idx] <= cur:\n                path.append(candidates[idx])\n                # idx 不变，继续考虑当前数字\n                dfs(idx, cur - candidates[idx], path)\n                # 消除影响\n                path.pop()\n            # 2.不加入这个数字，考虑下一个数字\n            dfs(idx + 1, cur, path)\n\n        dfs(0, target, [])\n        return ans\n\n'
          }
        ]
      },
      {
        title: '代码16.2.1',
        codes: [
          {
            language: 'Cpp',
            content:
              'class Solution {\r\npublic:\r\n    vector<vector<int>> ans;\r\n    set<int> visited;\r\n    vector<int> path;\r\n    vector<vector<int>> combinationSum2(vector<int>& candidates, int target) {\r\n        sort(candidates.begin(), candidates.end());\r\n        dfs(candidates, 0, target);\r\n        return ans;\r\n    }\r\n    void dfs(vector<int>& candidates, int idx, int cur) {\r\n        if (cur == 0) {\r\n            ans.push_back(vector<int>(path));\r\n            return;\r\n        } else if (idx == candidates.size()) {\r\n            return;\r\n        }\r\n        // 当前数字与前面数字相同并且前面数字没有在路径中，则忽略这个数字\r\n        if (idx != 0 && candidates[idx] == candidates[idx - 1] && !visited.count(idx - 1)) {\r\n            dfs(candidates, idx + 1, cur);\r\n            return;\r\n        }\r\n        // 1.加入这个数字\r\n        if (candidates[idx] <= cur) {\r\n            path.push_back(candidates[idx]);\r\n            visited.insert(idx);\r\n            // 向下递归时考虑下一个数字\r\n            dfs(candidates, idx + 1, cur - candidates[idx]);\r\n            // 消除影响\r\n            path.pop_back();\r\n            visited.erase(idx);\r\n        }\r\n        // 2.不加入这个数字\r\n        dfs(candidates, idx + 1, cur);\r\n    }\r\n};\n'
          },
          {
            language: 'Java',
            content:
              'class Solution {\r\n    List<List<Integer>> ans = new ArrayList<>();\r\n    Set<Integer> visited = new HashSet<>();\r\n    List<Integer> path = new ArrayList<>();\r\n    public List<List<Integer>> combinationSum2(int[] candidates, int target) {\r\n        Arrays.sort(candidates);\r\n        dfs(candidates, 0, target);\r\n        return ans;\r\n    }\r\n    public void dfs(int[] candidates, int idx, int cur) {\r\n        if (cur == 0) {\r\n            ans.add(new ArrayList<>(path));\r\n            return;\r\n        } else if (idx == candidates.length) {\r\n            return;\r\n        }\r\n        // 当前数字与前面数字相同并且前面数字没有在路径中，则忽略这个数字\r\n        if (idx != 0 && candidates[idx] == candidates[idx - 1] && !visited.contains(idx - 1)) {\r\n            dfs(candidates, idx + 1, cur);\r\n            return;\r\n        }\r\n        // 1.加入这个数字\r\n        if (candidates[idx] <= cur) {\r\n            path.add(candidates[idx]);\r\n            visited.add(idx);\r\n            // 向下递归时考虑下一个数字\r\n            dfs(candidates, idx + 1, cur - candidates[idx]);\r\n            // 消除影响\r\n            path.remove(path.size() - 1);\r\n            visited.remove(idx);\r\n        }\r\n        // 2.不加入这个数字\r\n        dfs(candidates, idx + 1, cur);\r\n    }\r\n}\n'
          },
          {
            language: 'Py',
            content:
              'class Solution:\n    def combinationSum2(self, candidates: List[int], target: int) -> List[List[int]]:\n        ans = []\n        n = len(candidates)\n        visited = set()\n        candidates.sort()\n\n        def dfs(idx: int, cur: int, path: List[int]):\n            if cur == 0:\n                ans.append(path[:])\n                return\n            elif idx == n:\n                return\n            # 当前数字与前面数字相同并且前面数字没有在路径中，则忽略这个数字\n            if (\n                idx != 0\n                and candidates[idx] == candidates[idx - 1]\n                and (idx - 1) not in visited\n            ):\n                dfs(idx + 1, cur, path)\n                return\n            # 1.加入这个数字\n            if candidates[idx] <= cur:\n                path.append(candidates[idx])\n                visited.add(idx)\n                # 向下递归时考虑下一个数字\n                dfs(idx + 1, cur - candidates[idx], path)\n                # 消除影响\n                path.pop()\n                visited.remove(idx)\n            # 2.不加入这个数字\n            dfs(idx + 1, cur, path)\n\n        dfs(0, target, [])\n        return ans\n\n'
          }
        ]
      },
      {
        title: '代码16.3.1',
        codes: [
          {
            language: 'Cpp',
            content:
              'class Solution {\r\npublic:\r\n    vector<vector<int>> ans;\r\n    vector<int> path;\r\n    vector<vector<int>> subsets(vector<int>& nums) {\r\n        dfs(nums, 0);\r\n        return ans;\r\n    }\r\n    void dfs(vector<int>& nums, int idx) {\r\n        if (idx == nums.size()) {\r\n            ans.push_back(vector<int>(path));\r\n            return;\r\n        }\r\n        path.push_back(nums[idx]);\r\n        dfs(nums, idx + 1);\r\n        path.pop_back();\r\n        dfs(nums, idx + 1);\r\n    }\r\n};\n'
          },
          {
            language: 'Java',
            content:
              'class Solution {\r\n    List<List<Integer>> ans = new ArrayList<>();\r\n    public List<List<Integer>> subsets(int[] nums) {\r\n        dfs(nums, 0, new ArrayList<>());\r\n        return ans;\r\n    }\r\n    public void dfs(int[] nums, int idx, List<Integer> path) {\r\n        if (idx == nums.length) {\r\n            ans.add(new ArrayList<>(path));\r\n            return;\r\n        }\r\n        path.add(nums[idx]);\r\n        dfs(nums, idx + 1, path);\r\n        path.remove(path.size() - 1);\r\n        dfs(nums, idx + 1, path);\r\n    }\r\n}\n'
          },
          {
            language: 'Py',
            content:
              'class Solution:\n    def subsets(self, nums: List[int]) -> List[List[int]]:\n        ans = []\n        n = len(nums)\n\n        def dfs(idx: int, path: List[int]):\n            if idx == n:\n                ans.append(path[:])\n                return\n            path.append(nums[idx])\n            dfs(idx + 1, path)\n            path.pop()\n            dfs(idx + 1, path)\n\n        dfs(0, [])\n        return ans\n\n'
          }
        ]
      },
      {
        title: '代码16.4.1',
        codes: [
          {
            language: 'Cpp',
            content:
              'class Solution {\r\npublic:\r\n    vector<vector<int>> ans;\r\n    vector<int> path;\r\n    set<int> visited;\r\n    vector<vector<int>> permute(vector<int>& nums) {\r\n        dfs(nums);\r\n        return ans;\r\n    }\r\n    void dfs(vector<int>& nums) {\r\n        if (path.size() == nums.size()) {\r\n            ans.push_back(vector<int>(path));\r\n            return;\r\n        }\r\n        for (int i = 0; i < nums.size(); i++) {\r\n            if (!visited.count(i)) {\r\n                visited.insert(i);\r\n                path.push_back(nums[i]);\r\n                dfs(nums);\r\n                path.pop_back();\r\n                visited.erase(i);\r\n            }\r\n        }\r\n    }\r\n};\n'
          },
          {
            language: 'Java',
            content:
              'class Solution {\r\n    List<List<Integer>> ans = new ArrayList<>();\r\n    Set<Integer> visited = new HashSet<>();\r\n    public List<List<Integer>> permute(int[] nums) {\r\n        dfs(new ArrayList<>(), nums);\r\n        return ans;\r\n    }\r\n    public void dfs(List<Integer> path, int[] nums) {\r\n        if (path.size() == nums.length) {\r\n            ans.add(new ArrayList<>(path));\r\n            return;\r\n        }\r\n        for (int i = 0; i < nums.length; i++) {\r\n            if (!visited.contains(i)) {\r\n                visited.add(i);\r\n                path.add(nums[i]);\r\n                dfs(path, nums);\r\n                path.remove(path.size() - 1);\r\n                visited.remove(i);\r\n            }\r\n        }\r\n    }\r\n}\n'
          },
          {
            language: 'Py',
            content:
              'class Solution:\n    def permute(self, nums: List[int]) -> List[List[int]]:\n        ans = []\n        n = len(nums)\n        visited = set()\n\n        def dfs(path: List[int]):\n            if len(path) == n:\n                ans.append(path[:])\n                return\n            for i in range(n):\n                if i not in visited:\n                    visited.add(i)\n                    path.append(nums[i])\n                    dfs(path)\n                    path.pop()\n                    visited.remove(i)\n\n        dfs([])\n        return ans\n\n'
          }
        ]
      },
      {
        title: '代码16.5.1',
        codes: [
          {
            language: 'Cpp',
            content:
              "class Solution {\r\npublic:\r\n    bool col[9][9];\r\n    bool row[9][9];\r\n    bool place[9][9];\r\n\r\n    void solveSudoku(vector<vector<char>>& board) {\r\n        memset(col, false, sizeof(col));\r\n        memset(row, false, sizeof(row));\r\n        memset(place, false, sizeof(place));\r\n\r\n        for (int i = 0; i < 9; i++) {\r\n            for (int j = 0; j < 9; j++) {\r\n                if (board[i][j] == '.') {\r\n                    continue;\r\n                }\r\n                int num = board[i][j] - '1';\r\n                row[i][num] = true;\r\n                col[j][num] = true;\r\n                place[i / 3 * 3 + j / 3][num] = true;\r\n            }\r\n        }\r\n\r\n        dfs(board, 0, 0);\r\n    }\r\n\r\n    bool dfs(vector<vector<char>>& board, int i, int j) {\r\n        if (j == 9) {\r\n            return dfs(board, i + 1, 0);\r\n        } else if (i == 9) {\r\n            return true;\r\n        } else if (board[i][j] != '.') {\r\n            return dfs(board, i, j + 1);\r\n        }\r\n\r\n        for (int k = 0; k < 9; k++) {\r\n            if (col[j][k] || row[i][k] || place[i / 3 * 3 + j / 3][k]) {\r\n                continue;\r\n            }\r\n            board[i][j] = '1' + k;\r\n            col[j][k] = true;\r\n            row[i][k] = true;\r\n            place[i / 3 * 3 + j / 3][k] = true;\r\n            if (dfs(board, i, j + 1)) {\r\n                return true;\r\n            }\r\n            board[i][j] = '.';\r\n            col[j][k] = false;\r\n            row[i][k] = false;\r\n            place[i / 3 * 3 + j / 3][k] = false;\r\n        }\r\n        return false;\r\n    }\r\n};\n"
          },
          {
            language: 'Java',
            content:
              "class Solution {\r\n    \r\n    boolean[][] col = new boolean[9][9];\r\n    boolean[][] row = new boolean[9][9];\r\n    boolean[][] place = new boolean[9][9];\r\n    \r\n    public void solveSudoku(char[][] board) {\r\n        for (int i = 0; i < 9; i++) {\r\n            for (int j = 0; j < 9; j++) {\r\n                if (board[i][j] == '.') {\r\n                    continue;\r\n                }\r\n                int num = board[i][j] - '1';\r\n                row[i][num] = true;\r\n                col[j][num] = true;\r\n                place[i / 3 * 3 + j / 3][num] = true;\r\n            }\r\n        }\r\n        dfs(board, 0, 0);\r\n    }\r\n    \r\n    public boolean dfs(char[][] board, int i, int j) {\r\n        if (j == 9) {\r\n            return dfs(board, i + 1, 0);\r\n        } else if (i == 9) {\r\n            return true;\r\n        } else if (board[i][j] != '.') {\r\n            return dfs(board, i, j + 1);\r\n        }\r\n\r\n        for (int k = 0; k < 9; k++) {\r\n            if (col[j][k] || row[i][k] || place[i / 3 * 3 + j / 3][k]) {\r\n                continue;\r\n            }\r\n            board[i][j] = (char)('1' + k);\r\n            col[j][k] = true;\r\n            row[i][k] = true;\r\n            place[i / 3 * 3 + j / 3][k] = true;\r\n            if (dfs(board, i, j + 1)) {\r\n                return true;\r\n            }\r\n            board[i][j] = '.';\r\n            col[j][k] = false;\r\n            row[i][k] = false;\r\n            place[i / 3 * 3 + j / 3][k] = false;\r\n        }\r\n        return false;\r\n    }\r\n  \r\n}\n"
          },
          {
            language: 'Py',
            content:
              'class Solution:\n    def solveSudoku(self, board: List[List[str]]) -> None:\n        col = [[False] * 9 for i in range(9)]\n        row = [[False] * 9 for i in range(9)]\n        place = [[False] * 9 for i in range(9)]\n        for i in range(9):\n            for j in range(9):\n                if board[i][j] != ".":\n                    num = int(board[i][j]) - 1\n                    col[j][num] = True\n                    row[i][num] = True\n                    place[i // 3 * 3 + j // 3][num] = True\n\n        def dfs(i: int, j: int) -> boolean:\n            if j == 9:\n                return dfs(i + 1, 0)\n            if i == 9:\n                return True\n            if board[i][j] != ".":\n                return dfs(i, j + 1)\n            for k in range(9):\n                if (\n                    col[j][k] == True\n                    or row[i][k] == True\n                    or place[i // 3 * 3 + j // 3][k] == True\n                ):\n                    continue\n                board[i][j] = str(k + 1)\n                col[j][k] = True\n                row[i][k] = True\n                place[i // 3 * 3 + j // 3][k] = True\n                if dfs(i, j + 1) == True:\n                    return True\n                board[i][j] = "."\n                col[j][k] = False\n                row[i][k] = False\n                place[i // 3 * 3 + j // 3][k] = False\n            return False\n\n        dfs(0, 0)\n\n'
          }
        ]
      }
    ]
  },
  {
    id: '17',
    name: '第十七章',
    list: [
      {
        title: '代码17.1.1',
        codes: [
          {
            language: 'Cpp',
            content:
              '#include <vector>\nusing namespace std;\n\nclass Solution {\npublic:\n  vector<int> majorityElement(vector<int>& nums) {\n    int n = nums.size();\n    vector<int> res;\n    int cnt1 = 0, cnt2 = 0, n1, n2;\n    bool n1_init = false, n2_init = false;\n    for (int i = 0; i < nums.size(); i++) {\n      if (!n1_init) {\n        n1 = nums[i];\n        n1_init = true;\n        cnt1 += 1;\n      }\n      else if (nums[i] == n1) cnt1 += 1;\n      else if (!n2_init) {\n        n2 = nums[i];\n        n2_init = true;\n        cnt2 += 1;\n      }\n      else if (nums[i] == n2) cnt2 += 1;\n      else if (cnt1 == 0) {\n        n1 = nums[i];\n        cnt1 += 1;\n      }\n      else if (cnt2 == 0) {\n        n2 = nums[i];\n        cnt2 += 1;\n      } else {\n        cnt1 -= 1;\n        cnt2 -= 1;\n      }\n    }\n    cnt1 = 0;\n    cnt2 = 0;\n    for (int i = 0; i < nums.size(); i++) {\n      if (nums[i] == n1) cnt1 += 1;\n      if (nums[i] == n2) cnt2 += 1;\n    }\n    if (cnt1 > n / 3) res.push_back(n1);\n    if (cnt2 > n / 3) res.push_back(n2);\n    return res;\n  }\n};\n\n'
          },
          {
            language: 'Java',
            content:
              'import java.util.*;\n\npublic class Solution {\n  public List<Integer> majaorityElement(int[] nums) {\n    int n = nums.length;\n    List<Integer> res = new ArrayList<>();\n    int cnt1 = 0, cnt2 = 0, n1, n2;\n    boolean n1_init = false, n2_init = false;\n    for (int i = 0; i < nums.length; i++) {\n      if (!n1_init) {\n        n1 = nums[i];\n        n1_init = true;\n        cnt1 += 1;\n      }\n      else if (nums[i] == n1) cnt1 += 1;\n      else if (!n2_init) {\n        n2 = nums[i];\n        n2_init = true;\n        cnt2 += 1;\n      }\n      else if (nums[i] == n2) cnt2 += 1;\n      else if (cnt1 == 0) {\n        n1 = nums[i];\n        cnt1 += 1;\n      }\n      else if (cnt2 == 0) {\n        n2 = nums[i];\n        cnt2 += 1;\n      } else {\n        cnt1 -= 1;\n        cnt2 -= 1;\n      }\n    }\n    cnt1 = 0;\n    cnt2 = 0;\n    for (int i = 0; i < nums.length; i++) {\n      if (nums[i] == n1) cnt1 += 1;\n      if (nums[i] == n2) cnt2 += 1;\n    }\n    if (cnt1 > n / 3) res.add(n1);\n    if (cnt2 > n / 3) res.add(n2);\n    return res;\n  }\n}\n\n'
          },
          {
            language: 'Py',
            content:
              'class Solution:\n    def majorityElement(self, nums: List[int]) -> List[int]:\n        n = len(nums)\n        res = []\n        cnt1 = 0\n        cnt2 = 0\n        n1 = None\n        n2 = None\n\n        # 筛选出现次数最多的前两个\n        for num in nums:\n            if num == n1:\n                cnt1 += 1\n            elif num == n2:\n                cnt2 += 1\n            elif cnt1 == 0:\n                n1 = num\n                cnt1 += 1\n            elif cnt2 == 0:\n                n2 = num\n                cnt2 += 1\n            else:\n                cnt1 -= 1\n                cnt2 -= 1\n        # 筛选出现次数超过三分之一的\n        # 这里的cnt1和cnt2的含义已经变了\n        # 这里的cnt1和cnt2表示的是出现次数， 而上面的则不是\n        cnt1 = 0\n        cnt2 = 0\n        for num in nums:\n            if num == n1:\n                cnt1 += 1\n            if num == n2:\n                cnt2 += 1\n        if cnt1 > n // 3:\n            res.append(n1)\n        if cnt2 > n // 3:\n            res.append(n2)\n        return res\n\n'
          }
        ]
      },
      {
        title: '代码17.2.1',
        codes: [
          {
            language: 'Cpp',
            content:
              '#include <vector>\n#include <algorithm>\nusing namespace std;\n\nclass Solution {\npublic:\n  int largestRectangleArea(vector<int>& heights) {\n    int n = heights.size(), ans = 0;\n    if (n != 0) ans = heights[0];\n    for (int i = 0; i < n; i++) {\n      int height = heights[i];\n      for (int j = i; j < n; j++) {\n        height = min(height, heights[j]);\n        ans = max(ans, (j - i + 1) * height);\n      }\n    }\n    return ans;\n  }\n};\n\n'
          },
          {
            language: 'Java',
            content:
              'import java.util.*;\nimport java.lang.Math;\n\npublic class Solution {\n  public int largestRectangleArea(int[] heights) {\n    int n = heights.length, ans = 0;\n    if (n != 0) ans = heights[0];\n    for (int i = 0; i < n; i++) {\n      int height = heights[i];\n      for (int j = i; j < n; j++) {\n        height = Math.min(height, heights[j]);\n        ans = Math.max(ans, (j - i + 1) * height);\n      }\n    }\n    return ans;\n  }\n};\n\n'
          },
          {
            language: 'Py',
            content:
              'class Solution:\n    def largestRectangleArea(self, heights: List[int]) -> int:\n        n, ans = len(heights), 0\n        if n != 0:\n            ans = heights[0]\n        for i in range(n):\n            height = heights[i]\n            for j in range(i, n):\n                height = min(height, heights[j])\n                ans = max(ans, (j - i + 1) * height)\n        return ans\n\n'
          }
        ]
      },
      {
        title: '代码17.2.2',
        codes: [
          {
            language: 'Cpp',
            content:
              '#include <vector>\n#include <algorithm>\nusing namespace std;\n\nclass Solution {\npublic:\n  int largestRectangleArea(vector<int>& heights) {\n    int n = heights.size(), ans = 0;\n    vector<int> l, r;\n    for (int i = 0; i < n; i++) {\n      l.push_back(-1);\n      r.push_back(n);\n    }\n    for (int i = 1; i < n; i++) {\n      int j = i - 1;\n      while (j >= 0 && heights[j] >= heights[i])\n        j -= 1;\n      l[i] = j;\n    }\n    for (int i = n - 2; i >= 0; i--) {\n      int j = i + 1;\n      while (j < n && heights[j] >= heights[i])\n        j += 1;\n      r[i] = j;\n    }\n    for (int i = 0; i < n; i++)\n      ans = max(ans, heights[i] * (r[i] - l[i] - 1));\n    return ans;\n  }\n};\n\n'
          },
          {
            language: 'Java',
            content:
              'import java.util.*;\nimport java.lang.Math;\n\npublic class Solution {\n  public int largestRectangleArea(int[] heights) {\n    int n = heights.length, ans = 0;\n    List<Integer> l = new ArrayList<>(),\n      r = new ArrayList<>();\n    for (int i = 0; i < n; i++) {\n      l.add(-1);\n      r.add(n);\n    }\n    for (int i = 1; i < n; i++) {\n      int j = i - 1;\n      while (j > 0 && heights[j] >= heights[i])\n        j -= 1;\n      l.set(i, j);\n    }\n    for (int i = n - 2; i >= 0; i--) {\n      int j = i + 1;\n      while (j < n && heights[j] >= heights[i])\n        j += 1;\n      r.set(i, j);\n    }\n    for (int i = 0; i < n; i++)\n      ans = Math.max(ans, heights[i] * (r.get(i) - l.get(i) - 1));\n    return ans;\n  }\n}\n\n'
          },
          {
            language: 'Py',
            content:
              'class Solution:\n    def largestRectangleArea(self, heights: List[int]) -> int:\n        n = len(heights)\n        l, r, ans = [-1] * n, [n] * n, 0\n        for i in range(1, n):\n            j = i - 1\n            while j >= 0 and heights[j] >= heights[i]:\n                j -= 1\n            l[i] = j\n        for i in range(n - 2, -1, -1):\n            j = i + 1\n            while j < n and heights[j] >= heights[i]:\n                j += 1\n            r[i] = j\n        for i in range(n):\n            ans = max(ans, heights[i] * (r[i] - l[i] - 1))\n        return ans\n\n'
          }
        ]
      },
      {
        title: '代码17.2.3',
        codes: [
          {
            language: 'Cpp',
            content:
              '#include <vector>\n#include <algorithm>\nusing namespace std;\n\nclass Solution {\npublic:\n  int largestRectangleArea(vector<int>& heights) {\n    int n = heights.size(), ans = 0;\n    vector<int> l, r;\n    for (int i = 0; i < n; i++) {\n      l.push_back(-1);\n      r.push_back(n);\n    }\n    for (int i = 0; i < n; i++) {\n      int j = i - 1;\n      while (j >= 0 && heights[j] >= heights[i])\n        j = l[j];\n      l[i] = j;\n    }\n    for (int i = n - 2; i >= 0; i--) {\n      int j = i + 1;\n      while (j < n && heights[j] >= heights[i])\n        j = r[j];\n      r[i] = j;\n    }\n    for (int i = 0; i < n; i++)\n      ans = max(ans, heights[i] * (r[i] - l[i] - 1));\n    return ans;\n  }\n};\n\n'
          },
          {
            language: 'Java',
            content:
              'import java.util.*;\nimport java.lang.Math;\n\npublic class Solution {\n  public int largetstRectangleArea(int[] heights) {\n    int n = heights.length, ans = 0;\n    List<Integer> l = new ArrayList<>(),\n      r = new ArrayList<>();\n    for (int i = 0; i < n; i++) {\n      l.add(-1);\n      r.add(n);\n    }\n    for (int i = 0; i < n; i++) {\n      int j = i - 1;\n      while (j >= 0 && heights[j] >= heights[i])\n        j = l.get(j);\n      l.set(i, j);\n    }\n    for (int i = n - 2; i >= 0; i--) {\n      int j = i + 1;\n      while (j < n && heights[j] >= heights[i])\n        j = r.get(j);\n      r.set(i, j);\n    }\n    for (int i = 0; i < n; i++)\n      ans = Math.max(ans, heights[i] * (r.get(i) - l.get(i) - 1));\n    return ans;\n  }\n}\n\n'
          },
          {
            language: 'Py',
            content:
              'class Solution:\n    def largestRectangleArea(self, heights: List[int]) -> int:\n        n = len(heights)\n        l, r, ans = [-1] * n, [n] * n, 0\n\n        for i in range(1, n):\n            j = i - 1\n            while j >= 0 and heights[j] >= heights[i]:\n                j = l[j]\n            l[i] = j\n        for i in range(n - 2, -1, -1):\n            j = i + 1\n            while j < n and heights[j] >= heights[i]:\n                j = r[j]\n            r[i] = j\n        for i in range(n):\n            ans = max(ans, heights[i] * (r[i] - l[i] - 1))\n        return ans\n\n'
          }
        ]
      },
      {
        title: '代码17.2.4',
        codes: [
          {
            language: 'Cpp',
            content:
              '#include <vector>\n#include <algorithm>\nusing namespace std;\n\nclass Solution {\npublic:\n  int largestRectangleArea(vector<int>& heights) {\n    int n = heights.size(), ans = 0;\n    vector<int> st;\n    heights.push_back(0);\n    for (int i = heights.size(); i > 0; i--)\n      swap(heights[i], heights[i - 1]);\n    heights.push_back(0);\n    for (int i = 0; i < n + 2; i++) {\n      while (st.size() && heights[st.back()] > heights[i]) {\n        int buf = st.back();\n        st.pop_back();\n        ans = max(ans, heights[buf] * (i - st.back() - 1));\n      }\n      st.push_back(i);\n    }\n    return ans;\n  }\n};\n\n'
          },
          {
            language: 'Java',
            content:
              'import java.util.*;\nimport java.lang.Math;\n\npublic class Solution {\n  public int largestRectangleArea(List<Integer> heights) {\n    int n = heights.size(), ans = 0;\n    List<Integer> st = new ArrayList<>();\n    heights.add(0);\n    for (int i = heights.size(); i > 0; i--) {\n      int tmp = heights.get(i);\n      heights.set(i, heights.get(i - 1));\n      heights.set(i - 1, tmp);\n    }\n    heights.add(0);\n    for (int i = 0; i < n + 2; i ++) {\n      while (st.size() != 0 &&\n           heights.get(st.get(st.size() - 1)) > heights.get(i)) {\n        int buf = st.get(st.size() - 1);\n        st.remove(st.size() - 1);\n        ans = Math.max(ans, heights.get(buf) * (i\n              - st.get(st.size() - 1) - 1));\n      }\n      st.add(i);\n    }\n    return ans;\n  }\n}\n\n'
          },
          {
            language: 'Py',
            content:
              'class Solution:\n    def largestRectangleArea(self, heights: List[int]) -> int:\n        n, heights, st, ans = len(heights), [0] + heights + [0], [], 0\n        for i in range(n + 2):\n            while st and heights[st[-1]] > heights[i]:\n                ans = max(ans, heights[st.pop(-1)] * (i - st[-1] - 1))\n            st.append(i)\n        return ans\n\n'
          }
        ]
      },
      {
        title: '代码17.3.1',
        codes: [
          {
            language: 'Cpp',
            content:
              '#include <string>\nusing namespace std;\n\nclass Solution {\npublic:\n  string dayOfTheWeek(int day, int month, int year) {\n    int months[] = {31, 28, 31, 30, 31, 30, 31, 31,\n                    30, 31, 30, 31};\n    int leap_months[] = {31, 29, 31, 30, 31, 30, 31,\n                        31, 30, 31, 30, 31};\n    string days[] = {"Friday", "Saturday", "Sunday",\n                    "Monday", "Tuesday",\n                    "Wednesday", "Thursday"};\n    int years = year - 1971, leaps = 0, i = 1972;\n    while (i < year) {\n      if (i % 400 == 0 || (i % 4 == 0 && i % 100))\n        leaps += 1;\n      i += 1;\n    }\n    int diff = (years * 365) + leaps;\n    for (int m = 0; m < month - 1; m++) {\n      if (i % 400 == 0 || (i % 4 == 0 && i % 100))\n        diff += leap_months[m];\n      else\n        diff += months[m];\n    }\n    diff += day - 1;\n    return days[diff % 7];\n  }\n};\n\n'
          },
          {
            language: 'Java',
            content:
              'import java.util.*;\n\npublic class Solution {\n  public String dayOfTheWeek(int day, int month, int year) {\n    int[] months = {31, 28, 31, 30, 31, 30, 31, 31,\n    30, 31, 30, 31};\n    int[] leap_months = {31, 29, 31, 30, 31, 30, 31,\n    31, 30, 31, 30, 31};\n    String[] days = {"Friday", "Saturday", "Sunday",\n    "Monday", "Tuesday", "Wednesday", "Thursday"};\n    int years = year - 1971, leaps = 0, i = 1972;\n    while (i < year) {\n      if (i % 400 == 0 || (i % 4 == 0 && i % 100 != 0))\n        leaps += 1;\n      i += 1;\n    }\n    int diff = (years * 365) + leaps;\n    for (int m = 0; m < month - 1; m++) {\n      if (i % 400 == 0 || (i % 4 == 0 && i % 100 != 0))\n        diff += leap_months[m];\n      else\n        diff += months[m];\n    }\n    diff += day - 1;\n    return days[diff % 7];\n  }\n}\n\n'
          },
          {
            language: 'Py',
            content:
              'class Solution:\n    def dayOfTheWeek(self, day: int, month: int, year: int) -> str:\n        months = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]\n        leap_months = [31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]\n        # 1971-01-01 作为基准日期\n        # 1971-01-01 是周五\n        days = [\n            "Friday",\n            "Saturday",\n            "Sunday",\n            "Monday",\n            "Tuesday",\n            "Wednesday",\n            "Thursday",\n        ]\n        years = year - 1971\n        leaps = 0\n        i = 1972\n        # 处理年\n        while i < year:\n            if i % 400 == 0 or (i % 4 == 0 and i % 100 != 0):\n                leaps += 1\n            i += 1\n        diff = (years * 365) + leaps\n        # 处理月\n        for m in range(month - 1):\n            if i % 400 == 0 or (i % 4 == 0 and i % 100 != 0):\n                diff += leap_months[m]\n            else:\n                diff += months[m]\n        # 处理日\n        diff += day - 1\n        return days[diff % 7]\n\n'
          }
        ]
      },
      {
        title: '代码17.3.2',
        codes: [
          {
            language: 'Cpp',
            content:
              '#include <string>\nusing namespace std;\n\nclass Solution {\npublic:\n  string dayOfTheWeek(int day, int month, int year) {\n    string list_of_days[] = {\n      "Saturday", "Sunday", "Monday", "Tuesday",\n      "Wednesday", "Thursday", "Friday"\n    };\n    if (month == 1 || month == 2) {\n      year -= 1;\n      month += 12;\n    }\n    int y = year % 100, c = year / 100;\n    int weekday = (day + 13 * (month + 1) / 5 + y + \\\n                  y / 4 + c / 4 + 5 * c) % 7;\n    return list_of_days[weekday];\n  }\n};\n\n'
          },
          {
            language: 'Java',
            content:
              'import java.util.*;\n\npublic class Solution {\n  public String dayOfTheWeek(int day, int month, int year) {\n    String[] list_of_days = {\n      "Saturday", "Sunday", "Monday", "Tuesday",\n      "Wednesday", "Thursday", "Friday"\n    };\n    if (month == 1 || month == 2) {\n      year -= 1;\n      month += 12;\n    }\n    int y = year % 100, c = year / 100;\n    int weekday = (day + 13 * (month + 1) / 5 + y\n        + y / 4 + c / 4 + 5 * c) % 7;\n    return list_of_days[weekday];\n  }\n}\n\n'
          },
          {
            language: 'Py',
            content:
              'class Solution:\n    def dayOfTheWeek(self, day: int, month: int, year: int) -> str:\n        list_of_days = [\n            "Saturday",\n            "Sunday",\n            "Monday",\n            "Tuesday",\n            "Wednesday",\n            "Thursday",\n            "Friday",\n        ]\n        if month == 1 or month == 2:\n            year = year - 1\n            month = month + 12\n        y = year % 100\n        c = year // 100\n        weekday = int((day + 13 * (month + 1) // 5 + y + y // 4 + c // 4 + 5 * c) % 7)\n        required_day = list_of_days[weekday]\n        return required_day\n\n'
          }
        ]
      },
      {
        title: '代码17.4.1',
        codes: [
          {
            language: 'Cpp',
            content:
              '#include <utility>\n#include <set>\n#include <queue>\n#include <algorithm>\nusing namespace std;\n\nclass Solution {\npublic:\n  bool canMeasureWater(int x, int y, int z) {\n    if (x + y < z) return false;\n    queue<pair<int, int> > q;\n    q.push(make_pair(0, 0));\n    set<pair<int, int> > seen;\n    seen.insert(make_pair(0, 0));\n    while (q.size()) {\n      pair<int, int> buf = q.front();\n      q.pop();\n      int a = buf.first, b = buf.second;\n      if (a == z || b == z || a + b == z) return true;\n      set<pair<int, int> > states;\n      states.insert(make_pair(x, b));\n      states.insert(make_pair(a, y));\n      states.insert(make_pair(0, b));\n      states.insert(make_pair(a, 0));\n      int val = ((b < x - a) ? 0 : (b - (x - a)));\n      states.insert(make_pair(min(x, b + a), val));\n      val = ((a + b < y) ? 0 : (a - (y - b)));\n      states.insert(make_pair(val, min(b + a, y)));\n      for (set<pair<int, int> >::iterator it = \\\n          states.begin(); it != states.end(); it++) {\n        if (seen.count(*it)) continue;\n        q.push(*it);\n        seen.insert(*it);\n      }\n    }\n    return false;\n  }\n};\n\n'
          },
          {
            language: 'Java',
            content:
              'import java.util.*;\nimport java.lang.Math;\n\npublic class Solution {\n  public class Pair {\n    public final int first;\n    public final int second;\n    public Pair(int x, int y) {\n      this.first = x;\n      this.second = y;\n    }\n  }\n  public Pair make_pair(int x, int y) {\n    Pair buf = new Pair(x, y);\n    return buf;\n  }\n  public boolean canMeasureWater(int x, int y, int z) {\n    if (x + y < z) return false;\n    Queue<Pair> q = new LinkedList<Pair>();\n    q.offer(make_pair(0, 0));\n    Set<Pair> seen = new HashSet<Pair>();\n    seen.add(make_pair(0, 0));\n    while (q.size() != 0) {\n      Pair buf = q.poll();\n      int a = buf.first, b = buf.second;\n      if (a == z || b == z || a + b == z) return true;\n      Set<Pair> states = new HashSet<Pair>();\n      states.add(make_pair(x, b));\n      states.add(make_pair(a, y));\n      states.add(make_pair(0, b));\n      states.add(make_pair(a, 0));\n      int val = ((b < x - a) ? 0 : (b - (x - a)));\n      states.add(make_pair(Math.min(x, b + a), val));\n      val = ((a + b < y) ? 0 : (a - (y - b)));\n      states.add(make_pair(val, Math.min(b + a, y)));\n      Iterator<Pair> it = states.iterator();\n      while (it.hasNext()) {\n        Pair node = it.next();\n        if (seen.contains(node)) continue;\n        q.offer(node);\n        seen.add(node);\n      }\n    }\n    return false;\n  }\n}\n\n'
          },
          {
            language: 'Py',
            content:
              'class Solution:\n    def canMeasureWater(self, x: int, y: int, z: int) -> bool:\n        if x + y < z:\n            return False\n        queue = [(0, 0)]\n        seen = set((0, 0))\n\n        while len(queue) > 0:\n            a, b = queue.pop(0)\n            if a == z or b == z or a + b == z:\n                return True\n            states = set()\n\n            states.add((x, b))\n            states.add((a, y))\n            states.add((0, b))\n            states.add((a, 0))\n            states.add((min(x, b + a), 0 if b < x - a else b - (x - a)))\n            states.add((0 if a + b < y else a - (y - b), min(b + a, y)))\n            for state in states:\n                if state in seen:\n                    continue\n                queue.append(state)\n                seen.add(state)\n        return False\n\n'
          }
        ]
      },
      {
        title: '代码17.4.2',
        codes: [
          {
            language: 'Cpp',
            content:
              '#include <algorithm>\nusing namespace std;\n\nclass Solution {\npublic:\n  int gcd(int a, int b) {\n    int smaller = min(a, b);\n    while (smaller) {\n      if (a % smaller == 0 && b % smaller == 0)\n        return smaller;\n      smaller -= 1;\n    }\n  }\n  bool canMeasureWater(int x, int y, int z) {\n    if (x + y < z) return false;\n    if (z == 0) return true;\n    if (x == 0) return y == z;\n    if (y == 0) return x == z;\n    return z % gcd(x, y) == 0;\n  }\n};\n\n'
          },
          {
            language: 'Java',
            content:
              'import java.lang.Math;\n\npublic class Solution {\n  public int gcd(int a, int b) {\n    int smaller = Math.min(a, b);\n    while (smaller != 0) {\n      if (a % smaller == 0 && b % smaller == 0)\n        return smaller;\n      smaller -= 1;\n    }\n  }\n  boolean canMeasureWater(int x, int y, int z) {\n    if (x + y < z) return false;\n    if (z == 0) return true;\n    if (x == 0) return y == z;\n    if (y == 0) return x == z;\n    return z % gcd(x, y) == 0;\n  }\n}\n\n'
          },
          {
            language: 'Py',
            content:
              'class Solution:\n    def canMeasureWater(self, x: int, y: int, z: int) -> bool:\n        if x + y < z:\n            return False\n\n        if z == 0:\n            return True\n\n        if x == 0:\n            return y == z\n\n        if y == 0:\n            return x == z\n\n        def GCD(a: int, b: int) -> int:\n            smaller = min(a, b)\n            while smaller:\n                if a % smaller == 0 and b % smaller == 0:\n                    return smaller\n                smaller -= 1\n\n        return z % GCD(x, y) == 0\n\n'
          }
        ]
      },
      {
        title: '代码17.4.3',
        codes: [
          {
            language: 'Cpp',
            content:
              'int gcd(int a, int b) {\n  return (b == 0) ? a : gcd(b, a % b);\n}\n\n'
          },
          {
            language: 'Java',
            content:
              'public class Gcd {\n  public int gcd(int a, int b) {\n    return (b == 0) ? a : gcd(b, a % b);\n  }\n}\n\n'
          },
          {
            language: 'Py',
            content:
              'def GCD(a: int, b: int) -> int:\n    return a if b == 0 else GCD(b, a % b)\n\n'
          }
        ]
      },
      {
        title: '代码17.4.4',
        codes: [
          {
            language: 'Cpp',
            content:
              'int gcd(int a, int b) {\n  if (a == b) return a;\n  if (a < b)\n    return gcd(b - a, a);\n  return gcd(a - b, b);\n}\n\n'
          },
          {
            language: 'Java',
            content:
              'public class Gcd {\n  public int gcd(int a, int b) {\n    if (a == b) return a;\n    if (a < b)\n      return gcd(b - a, a);\n    return gcd(a - b, b);\n  }\n}\n\n'
          },
          {
            language: 'Py',
            content:
              'def GCD(a: int, b: int) -> int:\n    if a == b:\n        return a\n    if a < b:\n        return GCD(b - a, a)\n    return GCD(a - b, b)\n\n'
          }
        ]
      },
      {
        title: '代码17.5.1',
        codes: [
          {
            language: 'Cpp',
            content:
              '#include <cstdlib>\n#include <cmath>\n\nclass Solution {\npublic:\n  int poorPigs(int buckets, int minutesToDie,\n      int minutesToTest) {\n    int cnt = 0;\n    while (pow(minutesToTest / minutesToDie + 1, cnt) <\\\n        buckets)\n      cnt += 1;\n    return cnt;\n  }\n};\n\n'
          },
          {
            language: 'Java',
            content:
              'import java.lang.Math;\n\npublic class Solution {\n  public int poorPigs(int buckets, int minutesToDie,\n      int minutesToTest) {\n    int cnt = 0;\n    while (Math.pow(minutesToTest / minutesToDie + 1, cnt)\n        < buckets)\n      cnt += 1;\n    return cnt;\n  }\n}\n\n'
          },
          {
            language: 'Py',
            content:
              'class Solution:\n    def poorPigs(self, buckets: int, minutesToDie: int, minutesToTest: int) -> int:\n        cnt = 0\n        while (minutesToTest / minutesToDie + 1) ** cnt < buckets:\n            cnt += 1\n        return cnt\n\n'
          }
        ]
      },
      {
        title: '代码17.5.2',
        codes: [
          {
            language: 'Cpp',
            content:
              '#include <cmath>\n#include <cstdlib>\n\nclass Solution {\npublic:\n  int poorPigs(int buckets, int minutesToDie,\n      int minutesToTest) {\n    return ceil(log(buckets) / log(minutesToTest /\\\n          minutesToDie + 1));\n  }\n};\n\n'
          },
          {
            language: 'Java',
            content:
              'import java.lang.Math;\n\npublic class Solution {\n  public int poorPigs(int buckets, int minutesToDie,\n      int minutesToTest) {\n    return (int)Math.ceil(Math.log(buckets) / Math.log(\n          minutesToTest / minutesToDie + 1\n          ));\n  }\n}\n\n'
          },
          {
            language: 'Py',
            content:
              'import math\n\n\nclass Solution:\n    def poorPigs(self, buckets: int, minutesToDie: int, minutesToTest: int) -> int:\n        return math.ceil(math.log(buckets, minutesToTest / minutesToDie + 1))\n\n'
          }
        ]
      }
    ]
  },
  {
    id: '18',
    name: '第十八章',
    list: [
      {
        title: '代码18.1.1',
        codes: [
          {
            language: 'Cpp',
            content:
              'int bs(vector<int>& nums, int target) {\r\n    int n = nums.size();\r\n    int l = 0, h = n - 1;\r\n    while (l <= h) {\r\n        int mid = l + (h - l) / 2;\r\n        if (nums[mid] == target) {\r\n            return mid;\r\n        } else if (nums[mid] < target) {\r\n            l = mid + 1;\r\n        } else {\r\n            h = mid - 1;\r\n        }\r\n    }\r\n    return -1;\r\n}\n'
          },
          {
            language: 'Java',
            content:
              'public int bs(int[] nums, int target) {\r\n\tint n = nums.length;\r\n\tint l = 0, h = n - 1;\r\n\twhile (l <= h) {\r\n\t\tint mid = l + (h - l) / 2;\r\n\t\tif (nums[mid] == target) {\r\n\t\t\treturn mid;\r\n\t\t} else if (nums[mid] < target) {\r\n\t\t\tl = mid + 1;\r\n\t\t} else {\r\n\t\t\th = mid - 1;\r\n\t\t}\r\n\t}\r\n\treturn -1;\r\n}\n'
          },
          {
            language: 'Py',
            content:
              '# 查找 nums 数组中元素值为 target 的下标，如果不存在则返回 -1\ndef bs(nums: [], target: int) -> int:\n    n = len(nums)\n    l, h = 0, n - 1\n    while l <= h:\n        mid = l + (h - l) // 2\n        if nums[mid] == target:\n            return mid\n        elif nums[mid] < target:\n            l = mid + 1\n        else:\n            h = mid - 1\n    return -1\n\n'
          }
        ]
      },
      {
        title: '代码18.1.2',
        codes: [
          {
            language: 'Cpp',
            content:
              '#查找第一个大于等于 x 的元素\r\nint bs(vector<int>& nums, int x) {\r\n    int l = 0, h = nums.size() - 1;\r\n    while (l <= h) {\r\n        int mid = l + (h - l) / 2;\r\n        if (l == h) {\r\n            break;\r\n        } else if (nums[mid] >= x) {\r\n            h = mid;\r\n        } else {\r\n            l = mid + 1;\r\n        }\r\n    }\r\n    return nums[l];\r\n}\n'
          },
          {
            language: 'Java',
            content:
              '# 查找第一个大于等于 x 的元素\r\npublic int bs(int[] nums, int x) {\r\n\tint l = 0, h = nums.length - 1;\r\n\twhile (l <= h) {\r\n\t\tint mid = l + (h - l) / 2;\r\n\t\tif (l == h) {\r\n\t\t\tbreak;\r\n\t\t} else if (nums[mid] >= x) {\r\n\t\t\th = mid;\r\n\t\t} else {\r\n\t\t\tl = mid + 1;\r\n\t\t}\r\n\t}\r\n\treturn nums[l];\r\n}\r\n\r\n\n'
          },
          {
            language: 'Py',
            content:
              '# 查找第一个大于等于 x 的元素\ndef bs(nums: List[int], x: int) -> int:\n    l, h = 0, len(nums) - 1\n    while l <= h:\n        mid = l + (h - l) // 2\n        if l == h:\n            break\n        elif nums[mid] >= x:\n            h = mid\n        else:\n            l = mid + 1\n    return nums[l]\n\n'
          }
        ]
      },
      {
        title: '代码18.1.3',
        codes: [
          {
            language: 'Cpp',
            content:
              '#查找最后一个小于等于 x 的元素\r\nint bs(vector<int>& nums, int x) {\r\n    int l = 0, h = nums.size() - 1;\r\n    while (l <= h) {\r\n        int mid = l + (h - l) / 2;\r\n        if (l == h || l + 1 == h) {\r\n            break;\r\n        } else if (nums[mid] <= x) {\r\n            l = mid;\r\n        } else {\r\n            h = mid - 1;\r\n        }\r\n    }\r\n    if (nums[h] <= x) {\r\n        return nums[h];\r\n    } else {\r\n        return nums[l];\r\n    }\r\n}\n'
          },
          {
            language: 'Java',
            content:
              '# 查找最后一个小于等于 x 的元素\r\npublic int bs(int[] nums, int x) {\r\n    int l = 0, h = nums.length - 1;\r\n    while (l <= h) {\r\n        int mid = l + (h - l) / 2;\r\n        if (l == h || l + 1 == h) {\r\n            break;\r\n        } else if (nums[mid] <= x) {\r\n            l = mid;\r\n        } else {\r\n            h = mid - 1;\r\n        }\r\n    }\r\n    if (nums[h] <= x) {\r\n        return nums[h];\r\n    } else {\r\n        return nums[l];\r\n    }\r\n}\n'
          },
          {
            language: 'Py',
            content:
              '# 查找最后一个小于等于 x 的元素\ndef bs(nums: List[int], x: int) -> int:\n    l, h = 0, len(nums) - 1\n    while l <= h:\n        mid = l + (h - l) // 2\n        if l == h or l + 1 == h:\n            break\n        elif nums[mid] <= x:\n            l = mid\n        else:\n            h = mid - 1\n    if nums[h] <= x:\n        return nums[h]\n    else:\n        return nums[l]\n\n'
          }
        ]
      },
      {
        title: '代码18.3.1',
        codes: [
          {
            language: 'Cpp',
            content:
              'class UnionFind {\r\npublic:\r\n    // 每个节点的父节点\r\n    int* parent;\r\n    // 以该节点为根的树权值（树高度）\r\n    int* rank;\r\n    // 连通区域数量\r\n    int cnt;\r\n\r\n    UnionFind(int n) {\r\n        parent = new int[n];\r\n        rank = new int[n];\r\n        cnt = n;\r\n        for (int i = 0; i < n; i++) {\r\n            parent[i] = i;\r\n            rank[i] = 0;\r\n        }\r\n    }\r\n\r\n    int find(int p) {\r\n        while (p != parent[p]) {\r\n            p = parent[p];\r\n        }\r\n        return p;\r\n    }\r\n\r\n    void merge(int p, int q) {\r\n        int root_p = find(p), root_q = find(q);\r\n        if (root_p == root_q) {\r\n            return;\r\n        }\r\n        if (rank[root_p] > rank[root_q]) {\r\n            parent[root_q] = root_p;\r\n        } else if (rank[root_p] < rank[root_q]) {\r\n            parent[root_p] = root_q;\r\n        } else {\r\n            parent[root_p] = root_q;\r\n            rank[root_q] += 1;\r\n        }\r\n        cnt -= 1;\r\n    }\r\n};\n'
          },
          {
            language: 'Java',
            content:
              'class UnionFind {\r\n    // 每个节点的父节点\r\n    int[] parent;\r\n    // 以该节点为根的树权值（树高度）\r\n    int[] rank;\r\n    // 连通区域数量\r\n    int cnt;\r\n    \r\n    public UnionFind(int n) {\r\n        this.parent = new int[n];\r\n        this.rank = new int[n];\r\n        this.cnt = n;\r\n        for (int i = 0; i < n; i++) {\r\n            this.parent[i] = i;\r\n            this.rank[i] = 0;\r\n        }\r\n    }\r\n\r\n    public int find(int p) {\r\n        while (p != this.parent[p]) {\r\n            p = this.parent[p];\r\n        }\r\n        return p;\r\n    }\r\n\r\n    public void union(int p, int q) {\r\n        int root_p = this.find(p), root_q = this.find(q);\r\n        if (root_p == root_q) {\r\n            return;\r\n        }\r\n        if (this.rank[root_p] > this.rank[root_q]) {\r\n            this.parent[root_q] = root_p;\r\n        } else if (this.rank[root_p] < this.rank[root_q]) {\r\n            this.parent[root_p] = root_q;\r\n        } else {\r\n            this.parent[root_p] = root_q;\r\n            this.rank[root_q] += 1;\r\n        }\r\n        this.cnt -= 1;\r\n    }\r\n}\n'
          },
          {
            language: 'Py',
            content:
              'class UnionFind:\n    def __init__(self, n: int):\n        # 每个节点的父节点\n        self.parent = [i for i in range(n)]\n        # 以该节点为根的树权值（树高度）\n        self.rank = [0 for i in range(n)]\n        # 连通区域数量\n        self.cnt = n\n\n    def find(self, p: int) -> int:\n        while p != self.parent[p]:\n            p = self.parent[p]\n        return p\n\n    def union(self, p: int, q: int):\n        root_p, root_q = self.find(p), self.find(q)\n        if root_p == root_q:\n            return\n        if self.rank[root_p] > self.rank[root_q]:\n            self.parent[root_q] = root_p\n        elif self.rank[root_p] < self.rank[root_q]:\n            self.parent[root_p] = root_q\n        else:\n            self.parent[root_q] = root_p\n            self.rank[root_p] += 1\n        self.cnt -= 1\n\n'
          }
        ]
      },
      {
        title: '代码18.3.2',
        codes: [
          {
            language: 'Cpp',
            content:
              'class UnionFind {\npublic:\n    // 每个节点的父节点\n    int* parent;\n    // 以该节点为根的树权值（树高度）\n    int* rank;\n    // 连通区域数量\n    int cnt;\n\n    UnionFind(int n) {\n        parent = new int[n];\n        rank = new int[n];\n        cnt = n;\n        for (int i = 0; i < n; i++) {\n            parent[i] = i;\n            rank[i] = 0;\n        }\n    }\n\n    int find(int p) {\n        if (p != parent[p]) {\n            parent[p] = find(parent[p]);\n        }\n        return parent[p];\n    }\n\n    void merge(int p, int q) {\n        int root_p = find(p), root_q = find(q);\n        if (root_p == root_q) {\n            return;\n        }\n        if (rank[root_p] > rank[root_q]) {\n            parent[root_q] = root_p;\n        } else if (rank[root_p] < rank[root_q]) {\n            parent[root_p] = root_q;\n        } else {\n            parent[root_p] = root_q;\n            rank[root_q] += 1;\n        }\n        cnt -= 1;\n    }\n};\n'
          },
          {
            language: 'Java',
            content:
              'class UnionFind {\r\n    // 每个节点的父节点\r\n    int[] parent;\r\n    // 以该节点为根的树权值（树高度）\r\n    int[] rank;\r\n    // 连通区域数量\r\n    int cnt;\r\n    \r\n    public UnionFind(int n) {\r\n        this.parent = new int[n];\r\n        this.rank = new int[n];\r\n        this.cnt = n;\r\n        for (int i = 0; i < n; i++) {\r\n            this.parent[i] = i;\r\n            this.rank[i] = 0;\r\n        }\r\n    }\r\n\r\n    public int find(int p) {\r\n        if (p != this.parent[p]) {\r\n            this.parent[p] = this.find(this.parent[p]);\r\n        }\r\n        return this.parent[p];\r\n    }\r\n\r\n    public void union(int p, int q) {\r\n        int root_p = this.find(p), root_q = this.find(q);\r\n        if (root_p == root_q) {\r\n            return;\r\n        }\r\n        if (this.rank[root_p] > this.rank[root_q]) {\r\n            this.parent[root_q] = root_p;\r\n        } else if (this.rank[root_p] < this.rank[root_q]) {\r\n            this.parent[root_p] = root_q;\r\n        } else {\r\n            this.parent[root_p] = root_q;\r\n            this.rank[root_q] += 1;\r\n        }\r\n        this.cnt -= 1;\r\n    }\r\n}\n'
          },
          {
            language: 'Py',
            content:
              'class UnionFind:\n    def __init__(self, n: int):\n        # 每个节点的父节点\n        self.parent = [i for i in range(n)]\n        # 以该节点为根的树权值（树高度）\n        self.rank = [0 for i in range(n)]\n        # 连通区域数量\n        self.cnt = n\n\n    def find(self, p: int) -> int:\n        if p != self.parent[p]:\n            self.parent[p] = self.find(self.parent[p])\n        return self.parent[p]\n\n    def union(self, p: int, q: int):\n        root_p, root_q = self.find(p), self.find(q)\n        if root_p == root_q:\n            return\n        if self.rank[root_p] > self.rank[root_q]:\n            self.parent[root_q] = root_p\n        elif self.rank[root_p] < self.rank[root_q]:\n            self.parent[root_p] = root_q\n        else:\n            self.parent[root_q] = root_p\n            self.rank[root_p] += 1\n        self.cnt -= 1\n\n'
          }
        ]
      },
      {
        title: '代码18.4.1',
        codes: [
          {
            language: 'Cpp',
            content:
              'vector<vector<int>> grid(5, vector<int>(5, 0));\n// n * m 大小的矩阵\nint n = grid.size(), m = grid[0].size();\n// 扩展方向\nint direction[4][2] = {{0, 1}, {1, 0}, {-1, 0}, {0, -1}};\n// 记录节点是否被访问\nbool visited[n][m];\nfor (int i = 0; i < n; i++) {\n    memset(visited[i], false, m);\n}\nqueue<pair<int, int>> que;\n// 深度\nint level = 0;\n// 加入初始节点\nque.push(pair(0, 0));\nvisited[0][0] = true;\nwhile (que.size() > 0) {\n    int cnt = que.size();\n    for (int i = 0; i < cnt; i++) {\n        pair<int, int> top = que.front();\n        que.pop();\n        int x = top.first, y = top.second;\n        // 扩展节点\n        for (int i = 0; i < 4; i++) {\n            int next_x = x + direction[i][0];\n            int next_y = y + direction[i][1];\n            // 判断相邻节点是否有效\n            if (next_x < 0 || next_x >= n || next_y < 0 || next_y >= m || visited[next_x][next_y]) {\n                continue;\n            }\n            que.push(pair(next_x, next_y));\n            visited[next_x][next_y] = true;\n        }\n    }\n    // 深度增加\n    level += 1;\n}\n'
          },
          {
            language: 'Java',
            content:
              'int[][] grid = new int[5][5];\n// n * m 大小的矩阵\nint n = grid.length, m = grid[0].length;\n// 扩展方向\nint[][] direction = new int[][]{{0, 1}, {1, 0}, {-1, 0}, {0, -1}};\n// 记录节点是否被访问\nboolean[][] visited = new boolean[n][m];\nQueue<int[]> queue = new LinkedList<>();\n// 深度\nint level = 0;\n// 加入初始节点\nqueue.offer(new int[]{0, 0});\nvisited[0][0] = true;\nwhile (queue.size() > 0) {\n    int cnt = queue.size();\n    System.out.println("---------------");\n    for (int i = 0; i < cnt; i++) {\n        int[] top = queue.poll();\n        int x = top[0], y = top[1];\n        System.out.println(x + ":" + y);\n        // 扩展节点\n        for (int[] d : direction) {\n            int next_x = x + d[0];\n            int next_y = y + d[1];\n            // 判断相邻节点是否有效\n            if (next_x < 0 || next_x >= n || next_y < 0 || next_y >= m || visited[next_x][next_y]) {\n                continue;\n            }\n            queue.offer(new int[]{next_x, next_y});\n            visited[next_x][next_y] = true;\n        } \n    }\n    // 深度增加\n    level += 1;\n}\n'
          },
          {
            language: 'Py',
            content:
              'from collections import deque\n\ngrid = [[0] * 5 for _ in range(5)]\n# n * m 大小的矩阵\nn, m = len(grid), len(grid[0])\n# 扩展方向\ndirection = [[0, 1], [0, -1], [-1, 0], [1, 0]]\n# 记录节点是否被访问\nvisited = [[False for _ in range(m)] for _ in range(n)]\nqueue = deque()\n# 深度\nlevel = 0\n# 加入初始节点\nqueue.append([0, 0])\nvisited[0][0] = True\nwhile len(queue) > 0:\n    sz = len(queue)\n    for _ in range(sz):\n        top = queue.popleft()\n        x, y = top[0], top[1]\n        # 扩展节点\n        for d in direction:\n            next_x = x + d[0]\n            next_y = y + d[1]\n            # 判断相邻节点是否有效\n            if (\n                next_x < 0\n                or next_x >= n\n                or next_y < 0\n                or next_y >= m\n                or visited[next_x][next_y]\n            ):\n                continue\n            queue.append([next_x, next_y])\n            visited[next_x][next_y] = True\n    # 深度增加\n    level += 1\n\n'
          }
        ]
      },
      {
        title: '代码18.6.1',
        codes: [
          {
            language: 'Cpp',
            content:
              'bool isPrime(int n) {\r\n    if (n <= 1) {\r\n        return false;\r\n    }\r\n    int i = 2;\r\n    while (i * i <= n) {\r\n        if (n % i == 0) {\r\n            return false;\r\n        }\r\n        i += 1;\r\n    }\r\n    return true;\r\n}\n'
          },
          {
            language: 'Java',
            content:
              'public boolean isPrime(int n) {\n    if (n <= 1) {\n        return false;\n    }\n    int i = 2;\n    while (i * i <= n) {\n        if (n % i == 0) {\n            return false;\n        }\n        i += 1;\n    }\n    return true;\n}\n'
          },
          {
            language: 'Py',
            content:
              'def isPrime(n: int) -> boolean:\n    if n <= 1:\n        return False\n    i = 2\n    while i * i <= n:\n        if n % i == 0:\n            return False\n        i += 1\n    return True\n\n'
          }
        ]
      },
      {
        title: '代码18.6.2',
        codes: [
          {
            language: 'Cpp',
            content:
              'int countPrimes(int n) {\r\n    if (n <= 1) {\r\n        return 0;\r\n    }\r\n    vector<bool> tmp(n, true);\r\n    int ans = 0;\r\n    tmp[0] = false;\r\n    tmp[1] = false;\r\n    for (int i = 2; i < n; i++) {\r\n        if (!tmp[i]) {\r\n            continue;\r\n        }\r\n        // 查找 i 倍数的优化细节：i * i开始\r\n        for (int j = i * i; j < n; j += i) {\r\n            tmp[j] = false;\r\n        }\r\n    }\r\n    for (int i = 0; i < n; i++) {\r\n        if (tmp[i]) {\r\n            ans += 1;\r\n        }\r\n    }\r\n    return ans;\r\n}\n'
          },
          {
            language: 'Java',
            content:
              'public int countPrimes(int n) {\r\n    if (n <= 1) {\r\n        return 0;\r\n    }\r\n    boolean[] tmp = new boolean[n];\r\n    Arrays.fill(tmp, true);\r\n    int ans = 0;\r\n    tmp[0] = false;\r\n    tmp[1] = false;\r\n    for (int i = 2; i < n; i++) {\r\n        if (!tmp[i]) {\r\n            continue;\r\n        }\r\n        // 查找 i 倍数的优化细节：i * i开始\r\n        for (int j = i * i; j < n; j += i) {\r\n            tmp[j] = false;\r\n        }\r\n    }\r\n    for (int i = 0; i < n; i++) {\r\n        if (tmp[i]) {\r\n            ans += 1;\r\n        }\r\n    }\r\n    return ans;\r\n}\n'
          },
          {
            language: 'Py',
            content:
              'class Solution:\n    def countPrimes(self, n: int) -> int:\n        if n <= 1:\n            return 0\n        tmp = [True for i in range(n)]\n        ans = 0\n        tmp[0] = False\n        tmp[1] = False\n        for i in range(2, n):\n            if not tmp[i]:\n                continue\n            # 查找 i 倍数的优化细节：i * i开始\n            for j in range(i * i, n, i):\n                tmp[j] = False\n        for i in range(n):\n            if tmp[i]:\n                ans += 1\n        return ans\n\n'
          }
        ]
      },
      {
        title: '代码18.6.3',
        codes: [
          {
            language: 'Cpp',
            content:
              'int gcd(int a, int b) {\r\n    return b == 0 ? a : gcd(b, a % b);\r\n}\n'
          },
          {
            language: 'Java',
            content:
              'public int gcd(int a, int b) {\r\n    return b == 0 ? a : gcd(b, a % b);\r\n}\n'
          },
          {
            language: 'Py',
            content:
              'def gcd(a: int, b: int) -> int:\n    return a if b == 0 else gcd(b, a % b)\n\n'
          }
        ]
      },
      {
        title: '代码18.6.4',
        codes: [
          {
            language: 'Cpp',
            content:
              'int gcd(int a, int b) {\r\n    return b == 0 ? a : gcd(b, a % b);\r\n}\r\n\r\nint lcm(int a, int b) {\r\n    return a * b / gcd(a, b);\r\n}\n'
          },
          {
            language: 'Java',
            content:
              'public int gcd(int a, int b) {\r\n    return b == 0 ? a : gcd(b, a % b);\r\n}\r\n    \r\npublic int lcm(int a, int b) {\r\n    return a * b / gcd(a, b);\r\n}\n'
          },
          {
            language: 'Py',
            content:
              'def gcd(a: int, b: int) -> int:\n    return a if b == 0 else gcd(b, a % b)\n\n\ndef lcm(a: int, b: int) -> int:\n    return a * b // gcd(a, b)\n\n'
          }
        ]
      }
    ]
  },
  {
    id: '19',
    name: '第十九章',
    list: [
      {
        title: '代码19.1.1',
        codes: [
          {
            language: 'Cpp',
            content:
              '#include <vector>\nusing namespace std;\n\nclass Solution {\npublic:\n  void rotate(vector<int>& nums, int k) {\n    vector<int> copy = nums;\n    int n = nums.size();\n    for (int i = 0; i < n; i++)\n      nums[(k + i) % n] = copy[i];\n  }\n};\n\n'
          },
          {
            language: 'Java',
            content:
              'public class Solution {\n  public void rotate(int[] nums, int k) {\n    int[] copy = new int[nums.length];\n    int n = nums.length;\n    for (int i = 0; i < n; i++) copy[i] = nums[i];\n    for (int i = 0; i < n; i++)\n      nums[(k + i) % n] = copy[i];\n  }\n}\n\n'
          },
          {
            language: 'Py',
            content:
              'class Solution:\n    def rotate(self, nums: List[int], k: int) -> None:\n        copy = nums.copy()\n        n = len(nums)\n\n        for i in range(n):\n            nums[(k + i) % n] = copy[i]\n\n'
          }
        ]
      },
      {
        title: '代码19.1.2',
        codes: [
          {
            language: 'Cpp',
            content:
              '#include <vector>\nusing namespace std;\n\nclass Solution {\npublic:\n  void rotate(vector<int>& nums, int k) {\n    vector<int> copy = nums;\n    int n = nums.size();\n    if (k % n == 0) return;\n    for (int i = 0; i < n; i++)\n      nums[(k + i) % n] = copy[i];\n  }\n};\n\n'
          },
          {
            language: 'Java',
            content:
              'public class Solution {\n  public void rotate(int[] nums, int k) {\n    int[] copy = new int[nums.length];\n    int n = nums.length;\n    for (int i = 0; i < n; i++) copy[i] = nums[i];\n    if (k % n == 0) return;\n    for (int i = 0; i < n; i++)\n      nums[(k + i) % n] = copy[i];\n  }\n}\n\n'
          },
          {
            language: 'Py',
            content:
              'class Solution:\n    def rotate(self, nums: List[int], k: int) -> None:\n        copy = nums.copy()\n        n = len(nums)\n        if k % n == 0:\n            return\n\n        for i in range(n):\n            nums[(k + i) % n] = copy[i]\n\n'
          }
        ]
      },
      {
        title: '代码19.1.3',
        codes: [
          {
            language: 'Cpp',
            content:
              '#include <vector>\nusing namespace std;\n\nclass Solution {\npublic:\n  void rotate(vector<int>& nums, int k) {\n    int n = nums.size(), t, offset = n - k % n;\n    if (offset == 0) return;\n    while (offset) {\n      t = nums[0];\n      offset -= 1;\n      for (int i = 0; i < n - 1; i++)\n        nums[i] = nums[i + 1];\n      nums[n - 1] = t;\n    }\n  }\n};\n\n'
          },
          {
            language: 'Java',
            content:
              'public class Solution {\n  public void rotate(int[] nums, int k) {\n    int n = nums.length, t, offset = n - k % n;\n    if (offset == 0) return;\n    while (offset != 0) {\n      t = nums[0];\n      offset -= 1;\n      for (int i = 0; i < n - 1; i++)\n        nums[i] = nums[i + 1];\n      nums[n - 1] = t;\n    }\n  }\n}\n\n'
          },
          {
            language: 'Py',
            content:
              'class Solution:\n    def rotate(self, nums: List[int], k: int) -> None:\n        """\n        Do not return anything, modify nums in-place instead.\n        """\n        n = len(nums)\n        t = None\n        offset = n - k % n  # 右移变左移\n        if offset == 0:\n            return\n        while offset:\n            t = nums[0]\n            offset -= 1\n            for i in range(n - 1):\n                nums[i] = nums[i + 1]\n            nums[n - 1] = t\n\n'
          }
        ]
      },
      {
        title: '代码19.1.4',
        codes: [
          {
            language: 'Cpp',
            content:
              '#include <vector>\nusing namespace std;\n\nclass Solution {\npublic:\n  vector<int> rotate(vector<int>& nums, int k) {\n    int n = nums.size(), offset = k % n;\n    for (int i = 0; i < n; i++) nums.push_back(nums[i]);\n    vector<int> ans;\n    for (int i = n - offset; i < n * 2 - offset; i++)\n      ans.push_back(nums[i]);\n    return ans;\n  }\n};\n\n'
          },
          {
            language: 'Java',
            content:
              'public class Solution {\n  public int[] rotate(int[] nums, int k) {\n    int n = nums.length, offset = k % n;\n    int[] ano_nums = new int[2 * n];\n    for (int i = 0; i < n; i++)\n      ano_nums[i] = ano_nums[n + i] = nums[i];\n    int[] ans = new int[n];\n    for (int i = n - offset; i < n * 2 - offset; i++)\n      ans[i - n + offset] = ano_nums[i];\n    return ans;\n  }\n}\n\n'
          },
          {
            language: 'Py',
            content:
              'class Solution:\n    def rotate(self, nums: List[int], k: int) -> None:\n        """\n        Do not return anything, modify nums in-place instead.\n        """\n        n = len(nums)\n        offset = k % n\n        nums = nums + nums.copy()\n        return nums[n - offset : n * 2 - offset]\n\n'
          }
        ]
      },
      {
        title: '代码19.1.5',
        codes: [
          {
            language: 'Cpp',
            content:
              '#include <vector>\nusing namespace std;\n\nclass Solution {\npublic:\n  void reverse(vector<int>& arr, int start, int end) {\n    while (start < end) {\n      int t = arr[start];\n      arr[start] = arr[end];\n      arr[end] = t;\n      start += 1;\n      end -= 1;\n    }\n  }\n  void rotate(vector<int>& nums, int k) {\n    int n = nums.size(), offset = k % n;\n    if (offset == 0) return;\n    reverse(nums, 0, n - offset - 1);\n    reverse(nums, n - offset, n - 1);\n    reverse(nums, 0, n - 1);\n  }\n};\n\n'
          },
          {
            language: 'Java',
            content:
              'public class Solution {\n  public void reverse(int[] arr, int start, int end) {\n    while (start < end) {\n      int t = arr[start];\n      arr[start] = arr[end];\n      arr[end] = t;\n      start += 1;\n      end -= 1;\n    }\n  }\n  public void rotate(int[] nums, int k) {\n    int n = nums.length, offset = k % n;\n    if (offset == 0) return;\n    reverse(nums, 0, n - offset - 1);\n    reverse(nums, n - offset, n - 1);\n    reverse(nums, 0, n - 1);\n  }\n}\n\n'
          },
          {
            language: 'Py',
            content:
              'class Solution:\n    def rotate(self, nums: List[int], k: int) -> None:\n        """\n        Do not return anything, modify nums in-place instead.\n        """\n        # 首尾交换法\n        def reverse(list: List[int], start: int, end: int) -> None:\n            while start < end:\n                t = list[start]\n                list[start] = list[end]\n                list[end] = t\n                start += 1\n                end -= 1\n\n        n = len(nums)\n        offset = k % n\n        if offset == 0:\n            return\n        reverse(nums, 0, n - offset - 1)\n        reverse(nums, n - offset, n - 1)\n        reverse(nums, 0, n - 1)\n\n'
          }
        ]
      },
      {
        title: '代码19.2.1',
        codes: [
          {
            language: 'Cpp',
            content:
              '#include <cstdio>\n\nclass Solution {\npublic:\n  ListNode *rotateRight(ListNode *head, int k) {\n    if (head == NULL || head->next == NULL) return head;\n    ListNode *p1 = head, *res = NULL;\n    int n = 1;\n    while (p1 && p1->next) {\n      p1 = p1->next;\n      n += 1;\n    }\n    int cur = 1;\n    ListNode *p2 = head;\n    while (cur < n - k % n) {\n      p2 = p2->next;\n      cur += 1;\n    }\n    p1->next = head;\n    res = p2->next;\n    p2->next = NULL;\n    return res;\n  }\n};\n\n'
          },
          {
            language: 'Java',
            content:
              'public class Solution {\n  public ListNode rotateRight(ListNode head, int k) {\n    if (head == null || head.next == null) return head;\n    ListNode p1 = head, res = null;\n    int n = 1;\n    while (p1 != null && p1.next != null) {\n      p1 = p1.next;\n      n += 1;\n    }\n    int cur = 1;\n    ListNode p2 = head;\n    while (cur < n - k % n) {\n      p2 = p2.next;\n      cur += 1;\n    }\n    p1.next = head;\n    res = p2.next;\n    p2.next = null;\n    return res;\n  }\n}\n\n'
          },
          {
            language: 'Py',
            content:
              'class Solution:\n    def rotateRight(self, head: ListNode, k: int) -> ListNode:\n        if head == None or head.next == None:\n            return head\n        p1 = head\n        res = None\n        n = 1\n\n        while p1 and p1.next:\n            p1 = p1.next\n            n += 1\n        cur = 1\n        p2 = head\n        while cur < n - k % n:\n            p2 = p2.next\n            cur += 1\n        p1.next = head\n        res = p2.next\n        p2.next = None\n\n        return res\n\n'
          }
        ]
      },
      {
        title: '代码19.3.1',
        codes: [
          {
            language: 'Cpp',
            content:
              '#include <string>\n#include <algorithm>\n#include <map>\n#include <utility>\nusing namespace std;\n\nclass Solution {\npublic:\n  int helper(string word1, int s1, int e1,\n      string word2, int s2, int e2,\n      map<pair<int, int>, int>& memo) {\n    if (s1 > e1) return e2 - s2 + 1;\n    else if (s2 > e2) return e1 - s1 + 1;\n    char c1 = word1[s1], c2 = word2[s2];\n    pair<int, int> key = make_pair(s1, s2);\n    if (memo.count(key)) return memo[key];\n    if (c1 == c2)\n      return memo[key] = helper(word1, s1 + 1, e1, word2,\n          s2 + 1, e2, memo);\n    else\n      return memo[key] = min(min(helper(word1, s1 + 1,\n            e1, word2, s2, e2, memo), helper(word1,\n              s1, e1, word2, s2 + 1, e2, memo)), helper(\n              word1, s1 + 1, e1, word2, s2 + 1, e2, memo\n              )) + 1;\n  }\n  int minDistance(string word1, string word2) {\n    map<pair<int, int>, int> dict;\n    return helper(word1, 0, word1.size() - 1,\n        word2, 0, word2.size() - 1, dict);\n  }\n};\n\n'
          },
          {
            language: 'Java',
            content:
              'import java.util.*;\nimport java.lang.Math;\n\npublic class Solution {\n  public class Pair {\n    public final int first;\n    public final int second;\n    public Pair(int x, int y) {\n      this.first = x;\n      this.second = y;\n    }\n  }\n  public Pair make_pair(int x, int y) {\n    Pair node = new Pair(x, y);\n    return node;\n  }\n  public int helper(String word1, int s1, int e1,\n      String word2, int s2, int e2,\n      Map<Pair, Integer> memo) {\n    if (s1 > e1) return e2 - s2 + 1;\n    else if (s2 > e2) return e1 - s1 + 1;\n    char c1 = word1.charAt(s1), c2 = word2.charAt(s2);\n    Pair key = make_pair(s1, s2);\n    if (memo.get(key) != null) return memo.get(key);\n    if (c1 == c2) {\n      int buf_val = helper(word1, s1 + 1, e1, word2,\n          s2 + 1, e2, memo);\n      memo.put(key, buf_val);\n      return buf_val;\n    } else {\n      int buf_val = Math.min(Math.min(helper(word1,\n              s1 + 1, e1, word2, s2, e2, memo),\n            helper(word1, s1, e1, word2, s2 + 1, e2,\n              memo)), helper(word1, s1 + 1, e1, word2,\n              s2 + 1, e2, memo)) + 1;\n      memo.put(key, buf_val);\n      return buf_val;\n    }\n  }\n  public int minDistance(String word1, String word2) {\n    Map<Pair, Integer> dict = new HashMap<Pair, Integer>();\n    return helper(word1, 0, word1.length() - 1,\n        word2, 0, word2.length() - 1, dict);\n  }\n}\n\n'
          },
          {
            language: 'Py',
            content:
              'class Solution:\n    def helper(\n        self, word1: str, s1: int, e1: int, word2: str, s2: int, e2: int, memo: dict\n    ) -> int:\n        if s1 > e1:\n            return e2 - s2 + 1\n        elif s2 > e2:\n            return e1 - s1 + 1\n        c1 = word1[s1]\n        c2 = word2[s2]\n        key = (s1, s2)\n        if key in memo:\n            return memo[key]\n        if c1 == c2:\n            memo[key] = self.helper(word1, s1 + 1, e1, word2, s2 + 1, e2, memo)\n            return memo[key]\n        else:\n            memo[key] = (\n                min(\n                    self.helper(\n                        word1, s1 + 1, e1, word2, s2, e2, memo\n                    ),  # delete or add\n                    self.helper(\n                        word1, s1, e1, word2, s2 + 1, e2, memo\n                    ),  # delete or add\n                    self.helper(word1, s1 + 1, e1, word2, s2 + 1, e2, memo),  # replace\n                )\n                + 1\n            )\n\n            return memo[key]\n\n    def minDistance(self, word1: str, word2: str) -> int:\n        return self.helper(word1, 0, len(word1) - 1, word2, 0, len(word2) - 1, dict())\n\n'
          }
        ]
      },
      {
        title: '代码19.3.2',
        codes: [
          {
            language: 'Cpp',
            content:
              '#include <cstdlib>\n#include <string>\n#include <algorithm>\nusing namespace std;\n\nclass Solution {\npublic:\n  int minDistance(string word1, string word2) {\n    int m = word1.length(), n = word2.length();\n    int **dp = (int **)malloc((m + 1) * sizeof(int *));\n    for (int i = 0; i <= m; i++) {\n      dp[i] = (int *)malloc((n + 1) * sizeof(int));\n      for (int j = 0; j <= n; j++)\n        dp[i][j] = 0;\n    }\n    for (int i = 1; i <= m; i++) dp[i][0] = i;\n    for (int j = 1; j <= n; j++) dp[0][j] = j;\n    for (int i = 1; i <= m; i++)\n      for (int j = 1; j <= n; j++) {\n        if (word1[i - 1] == word2[j - 1])\n          dp[i][j] = dp[i - 1][j - 1];\n        else\n          dp[i][j] = min(min(dp[i - 1][j - 1],\\\n                dp[i][j - 1]), dp[i - 1][j]) + 1;\n      }\n    int ans = dp[m][n];\n    for (int i = 0; i <= m; i++) free(dp[i]);\n    free(dp);\n    return ans;\n  }\n};\n\n'
          },
          {
            language: 'Java',
            content:
              'import java.lang.Math\n\npublic class Solution {\n  public int minDistance(String word1, String word2) {\n    int m = word1.length(), n = word2.length();\n    int[][] dp = new int[m + 1][n + 1];\n    for (int i = 0; i <= m; i++)\n      for (int j = 0; j <= n; j++) dp[i][j] = 0;\n    for (int i = 1; i <= m; i++) dp[i][0] = i;\n    for (int j = 1; j <= n; j++) dp[0][j] = j;\n    for (int i = 1; i <= m; i++)\n      for  (int j = 1; j <= n; j++)\n        if (word1.charAt(i - 1) == word2.charAt(j - 1))\n          dp[i][j] = dp[i - 1][j - 1];\n        else\n          dp[i][j] = Math.min(Math.min(dp[i - 1][j - 1],\n                dp[i][j - 1]), dp[i - 1][j]) + 1;\n    return dp[m][n];\n  }\n}\n\n'
          },
          {
            language: 'Py',
            content:
              'class Solution:\n    def minDistance(self, word1: str, word2: str) -> int:\n        m = len(word1)\n        n = len(word2)\n        dp = [[0 for j in range(n + 1)] for i in range(m + 1)]\n\n        for i in range(1, m + 1):\n            dp[i][0] = i\n        for j in range(1, n + 1):\n            dp[0][j] = j\n\n        for i in range(1, m + 1):\n            for j in range(1, n + 1):\n                if word1[i - 1] == word2[j - 1]:\n                    dp[i][j] = dp[i - 1][j - 1]\n                else:\n                    dp[i][j] = min(dp[i - 1][j - 1], dp[i][j - 1], dp[i - 1][j]) + 1\n        return dp[m][n]\n\n'
          }
        ]
      },
      {
        title: '代码19.3.3',
        codes: [
          {
            language: 'Cpp',
            content:
              '#include <string>\n#include <cstdlib>\n#include <algorithm>\nusing namespace std;\n\nclass Solution {\npublic:\n  int minDistance(string word1, string word2) {\n    int m = word1.length(), n = word2.length();\n    int *pre = (int *)malloc((n + 1) * sizeof(int));\n    int *cur = (int *)malloc((n + 1) * sizeof(int));\n    for (int i = 0; i <= n; i++) pre[i] = cur[i] = 0;\n    for (int i = 1; i <= n; i++) pre[i] = i;\n    for (int i = 1; i <= m; i++) {\n      cur[0] = i;\n      for (int j = 1; j <= n; j++) {\n        if (word1[i - 1] == word2[j - 1])\n          cur[j] = pre[j - 1];\n        else\n          cur[j] = min(min(pre[j], pre[j - 1]),\n              cur[j - 1]) + 1;\n      }\n      for (int k = 0; k <= n; k++) pre[k] = cur[k];\n    }\n    int ans = pre[n];\n    free(pre);\n    free(cur);\n    return ans;\n  }\n};\n\n'
          },
          {
            language: 'Java',
            content:
              'import java.lang.Math;\n\npublic class Solution {\n  public int minDistance(String word1, String word2) {\n    int m = word1.length(), n = word2.length();\n    int[] pre = new int[n + 1];\n    int[] cur = new int[n + 1];\n    for (int i = 0; i <= n; i++) pre[i] = cur[i] = 0;\n    for (int i = 1; i <= n; i++) pre[i] = i;\n    for (int i = 1; i <= m; i++) {\n      cur[0] = i;\n      for (int j = 1; j <= n; j++) {\n        if (word1.charAt(i - 1) == word2.charAt(j - 1))\n          cur[j] = pre[j - 1];\n        else\n          cur[j] = Math.min(Math.min(pre[j], pre[j - 1]),\n              cur[j - 1]) + 1;\n      }\n      for (int k = 0; k <= n; k++) pre[k] = cur[k];\n    }\n    return pre[n];\n  }\n}\n\n'
          },
          {
            language: 'Py',
            content:
              'class Solution:\n    def minDistance(self, word1: str, word2: str) -> int:\n        m = len(word1)\n        n = len(word2)\n        pre = [0] * (n + 1)\n        cur = [0] * (n + 1)\n\n        for i in range(1, n + 1):\n            pre[i] = i\n        for i in range(1, m + 1):\n            cur[0] = i\n            for j in range(1, n + 1):\n                if word1[i - 1] == word2[j - 1]:\n                    cur[j] = pre[j - 1]\n                else:\n                    cur[j] = min(pre[j], pre[j - 1], cur[j - 1]) + 1\n            # move on\n            pre = cur.copy()\n        # 最后进行了一次交换， cur变成了pre，因此我们应该取pre[n]，而不是cur[n]\n        return pre[n]\n\n'
          }
        ]
      },
      {
        title: '代码19.3.4',
        codes: [
          {
            language: 'Cpp',
            content:
              '#include <cstdlib>\n#include <string>\n#include <algorithm>\nusing namespace std;\n\nclass Solution {\npublic:\n  int minDistance(string word1, string word2) {\n    int m = word1.size(), n = word2.size();\n    int *cur = (int *)malloc((n + 1) * sizeof(int));\n    cur[0] = 0;\n    int pre;\n    for (int i = 1; i <= n; i++) cur[i] = i;\n    for (int i = 1; i <= m; i++) {\n      pre = cur[0];\n      cur[0] = i;\n      for (int j = 1; j <= n; j++) {\n        int temp = cur[j];\n        if (word1[i - 1] == word2[j - 1])\n          cur[j] = pre;\n        else\n          cur[j] = min(min(cur[j], cur[j - 1]), pre) + 1;\n        pre = temp;\n      }\n    }\n    int ans = cur[n];\n    free(cur);\n    return ans;\n  }\n};\n\n'
          },
          {
            language: 'Java',
            content:
              'import java.lang.Math;\n\npublic class Solution {\n  public int minDistance(String word1, String word2) {\n    int m = word1.length(), n = word2.length();\n    int[] cur = new int[n + 1];\n    int pre;\n    for (int i = 1; i <= n; i++) cur[i] = i;\n    for (int i = 1; i <= m; i++) {\n      pre = cur[0];\n      cur[0] = i;\n      for (int j = 1; j <= n; j++) {\n        int temp = cur[j];\n        if (word1.charAt(i - 1) == word2.charAt(j - 1))\n          cur[j] = pre;\n        else\n          cur[j] = Math.min(Math.min(cur[j], cur[j - 1]),\n              pre) + 1;\n        pre = temp;\n      }\n    }\n    return cur[n];\n  }\n}\n\n'
          },
          {
            language: 'Py',
            content:
              'class Solution:\n    def minDistance(self, word1: str, word2: str) -> int:\n        m = len(word1)\n        n = len(word2)\n        cur = [0] * (n + 1)\n        pre = None\n\n        for i in range(1, n + 1):\n            cur[i] = i\n        for i in range(1, m + 1):\n            pre = cur[0]\n            cur[0] = i\n            for j in range(1, n + 1):\n                temp = cur[j]\n                if word1[i - 1] == word2[j - 1]:\n                    cur[j] = pre\n                else:\n                    cur[j] = min(cur[j], cur[j - 1], pre) + 1\n                pre = temp\n        return cur[n]\n\n'
          }
        ]
      },
      {
        title: '代码19.4.1',
        codes: [
          {
            language: 'Cpp',
            content:
              '#include <ctime>\n#include <cstdlib>\n#include <algorithm>\n#include <vector>\nusing namespace std;\n\nclass Solution {\npublic:\n  // find the idx-th smallest element\n  // 0-th smallest element is the smallest globally\n  // time complexity is O(n)\n  int locate(vector<int>& arr,\n      int st, int ed, int idx) {\n    if (st == ed) return arr[st];\n\n    // avoid the worst case\n    int rd = st + rand() % (ed - st + 1);\n    swap(arr[rd], arr[ed]);\n\n    int now = st;\n    for (int i = st; i < ed; i++)\n      if (arr[i] < arr[ed]) swap(arr[i], arr[now++]);\n    swap(arr[now], arr[ed]);\n    if (now == st + idx) return arr[now];\n    else if (now < st + idx)\n      return locate(arr, now + 1, ed,\n          idx - (now - st) - 1);\n    else return locate(arr, st, now - 1, idx);\n  }\n  int findKthLargest(vector<int>& nums, int k){\n    return locate(nums, 0, nums.size() - 1,\n        nums.size() - k);\n  }\n};\n\n\n'
          },
          {
            language: 'Java',
            content:
              'import java.util.*;\n\npublic class Solution {\n  public int locate(int[] arr, int st, int ed, int idx) {\n    if (st == ed) return arr[st];\n    Random r = new Random();\n    int rd = st + r.nextInt(ed - st + 1);\n    int tmp = arr[rd];\n    arr[rd] = arr[ed];\n    arr[ed] = tmp;\n    int now = st;\n    for (int i = st; i < ed; i++)\n      if (arr[i] < arr[ed]) {\n        tmp = arr[i];\n        arr[i] = arr[now];\n        arr[now] = tmp;\n        now += 1;\n      }\n    tmp = arr[now];\n    arr[now] = arr[ed];\n    arr[ed] = tmp;\n    if (now == st + idx) return arr[now];\n    else if (now < st + idx)\n      return locate(arr, now + 1, ed,\n          idx - (now - st) - 1);\n    else return locate(arr, st, now - 1, idx);\n  }\n  int findKthLargest(int[] nums, int k) {\n    return locate(nums, 0, nums.length - 1,\n        nums.length - k);\n  }\n}\n\n'
          },
          {
            language: 'Py',
            content:
              'from heapq import nlargest\n\n\nclass Solution:\n    def findKthLargest(self, nums: List[int], k: int) -> int:\n        return nlargest(k, nums)[-1]\n\n'
          }
        ]
      },
      {
        title: '代码19.4.2',
        codes: [
          {
            language: 'Cpp',
            content:
              '#include <queue>\n#include <vector>\n#include <algorithm>\nusing namespace std;\n\nclass KthLargest {\npublic:\n  priority_queue<int, vector<int>, less<int> > qlarge;\n  priority_queue<int, vector<int>, greater<int> > qsmall;\n  int k;\n  KthLargest(int buf_k, vector<int>& nums) {\n    while (!qlarge.empty()) qlarge.pop();\n    while (!qsmall.empty()) qsmall.pop();\n    k = buf_k;\n    for (int i = 0; i < nums.size(); i++)\n      qlarge.push(nums[i]);\n    while (qsmall.size() < k - 1) {\n      qsmall.push(qlarge.top());\n      qlarge.pop();\n    }\n  }\n  int add(int val) {\n    int cmp;\n    if (k > 1) cmp = qsmall.top();\n    else {\n      qlarge.push(val);\n      return qlarge.top();\n    }\n    if (cmp < val) {\n      qsmall.pop();\n      qsmall.push(val);\n      qlarge.push(cmp);\n    } else {\n      qlarge.push(val);\n    }\n    return qlarge.top();\n  }\n};\n\n'
          },
          {
            language: 'Java',
            content:
              'import java.util.*;\n\nclass KthLargest {\n  public static Comparator<Integer> less = new\n    Comparator<Integer>() {\n      public int compare(Integer e1, Integer e2) {\n        return e2 - e1;\n      }\n    };\n  public static Comparator<Integer> greater = new\n    Comparator<Integer>() {\n      public int compare(Integer e1, Integer e2) {\n        return e1 - e2;\n      }\n    };\n  public Queue<Integer> qlarge;\n  public Queue<Integer> qsmall;\n  public int k;\n  public KthLargest(int buf_k, int[] nums) {\n    qlarge = new PriorityQueue<>(less);\n    qsmall = new PriorityQueue<>(greater);\n    k = buf_k;\n    for (int i = 0; i < nums.length; i++)\n      qlarge.add(nums[i]);\n    while (qsmall.size() < k - 1) {\n      qsmall.add(qlarge.peek());\n      qlarge.poll();\n    }\n  }\n  public int add(int val) {\n    int cmp;\n    if (k > 1) cmp = qsmall.peek();\n    else {\n      qlarge.add(val);\n      return qlarge.peek();\n    }\n    if (cmp < val) {\n      qsmall.poll();\n      qsmall.add(val);\n      qlarge.add(cmp);\n    } else {\n      qlarge.add(val);\n    }\n    return qlarge.peek();\n  }\n}\n\n'
          },
          {
            language: 'Py',
            content:
              'import heapq\n\n\nclass KthLargest:\n    def __init__(self, k: int, nums: List[int]):\n        self.k = k\n        self.nums = heapq.nlargest(k, nums + [float("-inf")])\n        heapq.heapify(self.nums)\n\n    def add(self, val: int) -> int:\n        heapq.heappushpop(self.nums, val)\n        return self.nums[0]\n\n'
          }
        ]
      },
      {
        title: '代码19.4.3',
        codes: [
          {
            language: 'Cpp',
            content:
              '#include <cstdio>\n\nclass Solution {\npublic:\n  int countNodes(TreeNode *node) {\n    if (node == NULL) return 0;\n    int l = countNodes(node->left);\n    int r = countNodes(node->right);\n    return l + r + 1;\n  }\n  int kthSmallest(TreeNode *root, int k) {\n    int cnt = countNodes(root->left);\n    if (cnt == k - 1) return root->val;\n    else if (cnt > k - 1)\n      return kthSmallest(root->left, k);\n    else\n      return kthSmallest(root->right, k - cnt - 1);\n  }\n};\n\n'
          },
          {
            language: 'Java',
            content:
              'class Solution {\n  public int countNodes(TreeNode node) {\n    if (node == null) return 0;\n    int l = countNodes(node.left);\n    int r = countNodes(node.right);\n    return l + r + 1;\n  }\n  public int kthSmallest(TreeNode root, int k) {\n    int cnt = countNodes(root.left);\n    if (cnt == k - 1) return root.val;\n    else if (cnt > k - 1)\n      return kthSmallest(root.left, k);\n    else\n      return kthSmallest(root.right, k - cnt - 1);\n  }\n}\n\n'
          },
          {
            language: 'Py',
            content:
              'class Solution:\n    def kthSmallest(self, root: TreeNode, k: int) -> int:\n        # 返回该节点以及其所有子节点的个数\n        def countNodes(node) -> int:\n            if node == None:\n                return 0\n            l = countNodes(node.left)\n            r = countNodes(node.right)\n            return l + r + 1\n\n        cnt = countNodes(root.left)\n        if cnt == k - 1:\n            return root.val\n        elif cnt > k - 1:\n            return self.kthSmallest(root.left, k)\n\n        return self.kthSmallest(root.right, k - cnt - 1)\n\n'
          }
        ]
      },
      {
        title: '代码19.4.4',
        codes: [
          {
            language: 'Cpp',
            content:
              '#include <vector>\nusing namespace std;\n\nclass Solution {\npublic:\n  int countNotGreater(const vector<vector<int> >& matrix,\n      int target) {\n    int n = matrix.size();\n    int i = 0, j = n - 1, cnt = 0;\n    while (i < n && j >= 0) {\n      if (matrix[i][j] <= target) {\n        cnt += j + 1;\n        i += 1;\n      } else {\n        j -= 1;\n      }\n    }\n    return cnt;\n  }\n  int kthSmallest(vector<vector<int> >& matrix, int k) {\n    int n = matrix.size();\n    int lo = matrix[0][0], hi = matrix[n - 1][n - 1];\n    while (lo < hi) {\n      int mid = (lo + hi) / 2;\n      int cnt = countNotGreater(matrix, mid);\n      if (cnt < k) lo = mid + 1;\n      else hi = mid;\n    }\n    return lo;\n  }\n};\n\n'
          },
          {
            language: 'Java',
            content:
              'public class Solution {\n  public int countNotGreater(int[][] matrix, int target) {\n    int n = matrix.length;\n    int i = 0, j = n - 1, cnt = 0;\n    while (i < n && j >= 0) {\n      if (matrix[i][j] <= target) {\n        cnt += j + 1;\n        i += 1;\n      }\n      else j -= 1;\n    }\n    return cnt;\n  }\n  int kthSmallest(int[][] matrix, int k) {\n    int n = matrix.length;\n    int lo = matrix[0][0], hi = matrix[n - 1][n - 1];\n    while (lo < hi) {\n      int mid = (lo + hi) / 2;\n      int cnt = countNotGreater(matrix, mid);\n      if (cnt < k) lo = mid + 1;\n      else hi = mid;\n    }\n    return lo;\n  }\n}\n\n'
          },
          {
            language: 'Py',
            content:
              'class Solution:\n    def kthSmallest(self, matrix: List[List[int]], k: int) -> int:\n        n = len(matrix)\n        lo = matrix[0][0]\n        hi = matrix[n - 1][n - 1]\n\n        def countNotGreater(target: int) -> int:\n            i, j = 0, n - 1\n            cnt = 0\n            while i < n and j >= 0:\n                if matrix[i][j] <= target:\n                    cnt += j + 1\n                    i += 1\n                else:\n                    j -= 1\n            return cnt\n\n        while lo < hi:\n            mid = (lo + hi) // 2\n            cnt = countNotGreater(mid)\n\n            if cnt < k:\n                lo = mid + 1\n            else:\n                hi = mid\n        return lo\n\n'
          }
        ]
      },
      {
        title: '代码19.4.5',
        codes: [
          {
            language: 'Cpp',
            content:
              '#include <vector>\n#include <algorithm>\nusing namespace std;\n\nclass Solution {\npublic:\n  int countNotGreater(int mid, int m, int n) {\n    int cnt = 0;\n    for (int i = 1; i <= m; i++)\n      cnt += min(mid / i, n);\n    return cnt;\n  }\n  int findKthNumber(int m, int n, int k) {\n    int lo = 1, hi = m * n;\n    while (lo < hi) {\n      int mid = (lo + hi) / 2;\n      if (countNotGreater(mid, m, n) < k)\n        lo = mid + 1;\n      else\n        hi = mid;\n    }\n    return lo;\n  }\n};\n\n'
          },
          {
            language: 'Java',
            content:
              'import java.lang.Math;\n\npublic class Solution {\n  public int countNotGreater(int mid, int m, int n) {\n    int cnt = 0;\n    for (int i = 1; i <= m; i++)\n      cnt += Math.min(mid / i, n);\n    return cnt;\n  }\n  public int findKthNumber(int m, int n, int k) {\n    int lo = 1, hi = m * n;\n    while (lo < hi) {\n      int mid = (lo + hi) / 2;\n      if (countNotGreater(mid, m, n) < k)\n        lo = mid + 1;\n      else\n        hi = mid;\n    }\n    return lo;\n  }\n}\n\n'
          },
          {
            language: 'Py',
            content:
              'class Solution:\n    def findKthNumber(self, m: int, n: int, k: int) -> int:\n        lo = 1\n        hi = m * n\n\n        def countNotGreater(mid: int, m: int, n: int) -> int:\n            cnt = 0\n            for i in range(1, m + 1):\n                cnt += min(mid // i, n)\n            return cnt\n\n        while lo < hi:\n            mid = (lo + hi) // 2\n            if countNotGreater(mid, m, n) < k:\n                lo = mid + 1\n            else:\n                hi = mid\n        return lo\n\n'
          }
        ]
      }
    ]
  },
  {
    id: '20',
    name: '第二十章',
    list: [
      {
        title: '代码20.1.1',
        codes: [
          {
            language: 'Cpp',
            content:
              '\n#include <vector>\n#include <string>\n#include <map>\n#include <queue>\n#include <set>\nusing namespace std;\n\nclass Solution {\npublic:\n  void flip(map<string, string>& mapper, vector<string>& state, int i, int m, int n) {\n    state[i] = mapper[state[i]];\n    if (i % n != 0)\n      state[i - 1] = mapper[state[i - 1]];\n    if (i % n < n - 1)\n      state[i + 1] = mapper[state[i + 1]];\n    if (i >= n)\n      state[i - n] = mapper[state[i - n]];\n    if (i < (m - 1) * n)\n      state[i + n] = mapper[state[i + n]];\n  }\n  int minFlips(vector<vector<int> >& mat) {\n    map<string, string> mapper;\n    int m = mat.size();\n    int n = mat[0].size();\n    string target(""), cur("");\n    for (int i = 0; i < m; i++)\n      for (int j = 0; j < n; j++) {\n        target += "0";\n        cur += to_string(mat[i][j]);\n      }\n    queue<string> q;\n    q.push(cur);\n    set<string> visited;\n    int steps = 0;\n    mapper["0"] = "1";\n    mapper["1"] = "0";\n    while (!q.empty()) {\n      int last_q_size = q.size();\n      for (int flg = 0; flg < last_q_size; flg++) {\n        cur = q.front();\n        q.pop();\n        if (cur == target) return steps;\n        if (visited.count(cur)) continue;\n        visited.insert(cur);\n        for (int j = 0; j < cur.length(); j++) {\n          vector<string> s;\n          for (int ww = 0; ww < cur.length(); ww++)\n            s.push_back(string(1, cur[ww]));\n          flip(mapper, s, j, m, n);\n          string to_add("");\n          for (int ww = 0; ww < s.size(); ww++)\n            to_add += s[ww];\n          q.push(to_add);\n        }\n      }\n      steps += 1;\n    }\n    return -1;\n  }\n};\n\n\n'
          },
          {
            language: 'Java',
            content:
              'import java.util.*;\n\npublic class Solution {\n    Map<String, String> mapper = new HashMap<String, String>();\n    int m;\n    int n;\n    private void flip(String[] state, int i) {\n        state[i] = mapper.get(state[i]);\n        if ((i % n) != 0) {\n            state[i - 1] = mapper.get(state[i - 1]);\n        }\n        if ((i % n) < n - 1) {\n            state[i + 1] = mapper.get(state[i + 1]);\n        }\n        if (i >= n) {\n            state[i - n] = mapper.get(state[i - n]);\n        }\n        if (i < (m - 1) * n) {\n            state[i + n] = mapper.get(state[i + n]);\n        }\n    }\n    public int minFlips(int[][] mat) {\n        m = mat.length;\n        n = mat[0].length;\n        int[][] initial = new int[m][n];\n        StringBuffer targetBuffer = new StringBuffer();\n        StringBuffer curBufffer = new StringBuffer();\n        for(int i = 0; i < m; i++) {\n            for(int j = 0; j < n; j++) {\n                targetBuffer.append(String.valueOf(initial[i][j]));\n                curBufffer.append(String.valueOf(mat[i][j]));\n            }\n        }\n        String target = targetBuffer.toString();\n        String cur = curBufffer.toString();\n        LinkedList<String> queue = new LinkedList<String>();\n        queue.offer(cur);\n\t\tSet visited = new HashSet();\n        int steps = 0;\n        mapper.put("0", "1");\n        mapper.put("1", "0");\n        while (!queue.isEmpty()) {\n            int size = queue.size();\n            for(int i = 0; i < size; i++) {\n                cur = queue.poll();\n                if (cur.equals(target)) return steps;\n                if (visited.contains(cur)) continue;\n                visited.add(cur);\n                \n                for(int j = 0; j < cur.length(); j++) {\n                    String[] s = cur.split("");\n                    flip(s, j);\n                    queue.add(String.join("", s));\n                }\n            }\n            steps += 1;\n        }\n        return -1;\n    }\n}\n\n'
          },
          {
            language: 'Py',
            content:
              'class Solution:\n    def minFlips(self, mat: List[List[int]]) -> int:\n        # 放到 flip 函数外面可以减少计算\n        mapper = {"0": "1", "1": "0"}\n\n        def flip(state: List[str], i: int) -> None:\n            state[i] = mapper[state[i]]\n            if i % n != 0:\n                state[i - 1] = mapper[state[i - 1]]\n            if i % n < n - 1:\n                state[i + 1] = mapper[state[i + 1]]\n            if i >= n:\n                state[i - n] = mapper[state[i - n]]\n            if i < (m - 1) * n:\n                state[i + n] = mapper[state[i + n]]\n\n        m = len(mat)\n        n = len(mat[0])\n        target = "0" * (m * n)\n        cur = "".join(str(cell) for row in mat for cell in row)\n\n        queue = [cur]\n        visited = set()\n        steps = 0\n\n        while len(queue) > 0:\n            for _ in range(len(queue)):\n                cur = queue.pop(0)\n                if cur == target:\n                    return steps\n                if cur in visited:\n                    continue\n\n                visited.add(cur)\n                for i in range(len(cur)):\n                    s = list(cur)\n                    flip(s, i)\n                    queue.append("".join(s))\n            steps += 1\n\n        return -1\n\n'
          }
        ]
      },
      {
        title: '代码20.1.2',
        codes: [
          {
            language: 'Cpp',
            content:
              '#include <vector>\nusing namespace std;\n\nclass Solution {\npublic:\n  void setRowZeros(vector<vector<int> >& matrix, int i) {\n    for (int j = 0; j < matrix[i].size(); j++)\n      matrix[i][j] = 0;\n  }\n  void setColZeros(vector<vector<int> >& matrix, int j) {\n    for (int i = 0; i < matrix.size(); i++)\n      matrix[i][j] = 0;\n  }\n  void setZeroes(vector<vector<int> >& matrix) {\n    bool isCol = false;\n    int R = matrix.size(), C = matrix[0].size();\n    for (int i = 0; i < R; i++) {\n      if (matrix[i][0] == 0) isCol = true;\n      for (int j = 1; j < C; j++)\n        if (matrix[i][j] == 0) {\n          matrix[i][0] = 0;\n          matrix[0][j] = 0;\n        }\n    }\n    for (int j = 1; j < C; j++)\n      if (matrix[0][j] == 0)\n        setColZeros(matrix, j);\n    for (int i = 0; i < R; i++)\n      if (matrix[i][0] == 0)\n        setRowZeros(matrix, i);\n    if (isCol) setColZeros(matrix, 0);\n  }\n};\n\n'
          },
          {
            language: 'Java',
            content:
              'class Solution {\n  public void setRowZeros(int[][] matrix, int i) {\n    for (int j = 0; j < matrix[i].length; j++)\n      matrix[i][j] = 0;\n  }\n  public void setColZeors(int[][] matrix, int j) {\n    for (int i = 0; i < matrix.length; i++)\n      matrix[i][j] = 0;\n  }\n  public void setZeroes(int[][] matrix) {\n    boolean isCol = false;\n    int R = matrix.length, C = matrix[0].length;\n    for (int i = 0; i < R; i++) {\n      if (matrix[i][0] == 0) isCol = true;\n      for (int j = 1; j < C; j++)\n        if (matrix[i][j] == 0) {\n          matrix[i][0] = 0;\n          matrix[0][j] = 0;\n        }\n    }\n    for (int j = 1; j < C; j++)\n      if (matrix[0][j] == 0)\n        setColZeors(matrix, j);\n    for (int i = 0; i < R; i++)\n      if (matrix[i][0] == 0)\n        setRowZeros(matrix, i);\n    if (isCol) setColZeors(matrix, 0);\n  }\n}\n\n'
          },
          {
            language: 'Py',
            content:
              'class Solution:\n    def setZeroes(self, matrix: List[List[int]]) -> None:\n        """\n        Do not return anything, modify matrix in-place instead.\n        """\n\n        def setRowZeros(matrix: List[List[int]], i: int) -> None:\n            C = len(matrix[0])\n            matrix[i] = [0] * C\n\n        def setColZeros(matrix: List[List[int]], j: int) -> None:\n            R = len(matrix)\n            for i in range(R):\n                matrix[i][j] = 0\n\n        isCol = False\n        R = len(matrix)\n        C = len(matrix[0])\n\n        for i in range(R):\n            if matrix[i][0] == 0:\n                isCol = True\n            for j in range(1, C):\n                if matrix[i][j] == 0:\n                    matrix[i][0] = 0\n                    matrix[0][j] = 0\n        for j in range(1, C):\n            if matrix[0][j] == 0:\n                setColZeros(matrix, j)\n\n        for i in range(R):\n            if matrix[i][0] == 0:\n                setRowZeros(matrix, i)\n\n        if isCol:\n            setColZeros(matrix, 0)\n\n'
          }
        ]
      },
      {
        title: '代码20.1.3',
        codes: [
          {
            language: 'Cpp',
            content:
              '#include <vector>\nusing namespace std;\n\nclass Solution {\npublic:\n  void setZeroes(vector<vector<int> >& matrix) {\n    const int none = -0x7fffffff;\n    int rows = matrix.size(), cols = matrix[0].size();\n    for (int r = 0; r < rows; r++)\n      for (int c = 0; c < cols; c++)\n        if (matrix[r][c] != none && matrix[r][c] == 0) {\n          for (int i = 0; i < rows; i++)\n            matrix[i][c] = ((matrix[i][c] != 0) ? none : 0);\n          for (int j = 0; j < cols; j++)\n            matrix[r][j] = ((matrix[r][j] != 0) ? none : 0);\n        }\n    for (int r = 0; r < rows; r++)\n      for (int c = 0; c < cols; c++)\n        if (matrix[r][c] == none)\n          matrix[r][c] = 0;\n  }\n};\n\n'
          },
          {
            language: 'Java',
            content:
              'public class Solution {\n  public void setZeroes(int[][] matrix) {\n    int none = -0x7fffffff;\n    int rows = matrix.length, cols = matrix[0].length;\n    for (int r = 0; r < rows; r++)\n      for (int c = 0; c < cols; c++)\n        if (matrix[r][c] != none && matrix[r][c] == 0) {\n          for (int i = 0; i < rows; i++)\n            matrix[i][c] = ((matrix[i][c] != 0) ? none: 0);\n          for (int j = 0; j < cols; j++)\n            matrix[r][j] = ((matrix[r][j] != 0) ? none: 0);\n        }\n    for (int r = 0; r < rows; r++)\n      for (int c = 0; c < cols; c++)\n        if (matrix[r][c] == none)\n          matrix[r][c] = 0;\n  }\n}\n\n'
          },
          {
            language: 'Py',
            content:
              'class Solution:\n    def setZeroes(self, matrix: List[List[int]]) -> None:\n        """\n        这题要解决的问题是，必须有个地方记录判断结果，但又不能影响下一步的判断条件；\n        直接改为 0 的话，会影响下一步的判断条件；\n        因此，有一种思路是先改为 None，最后再将 None 改为 0；\n        从条件上看，如果可以将第一行、第二行作为记录空间，那么，用 None 应该也不算违背题目条件；\n        """\n        rows = len(matrix)\n        cols = len(matrix[0])\n        # 遍历矩阵，用 None 记录要改的地方，注意如果是 0 则要保留，否则会影响下一步判断\n        for r in range(rows):\n            for c in range(cols):\n                if matrix[r][c] is not None and matrix[r][c] == 0:\n                    # 改值\n                    for i in range(rows):\n                        matrix[i][c] = None if matrix[i][c] != 0 else 0\n                    for j in range(cols):\n                        matrix[r][j] = None if matrix[r][j] != 0 else 0\n        # 再次遍历，将 None 改为 0\n        for r in range(rows):\n            for c in range(cols):\n                if matrix[r][c] is None:\n                    matrix[r][c] = 0\n\n'
          }
        ]
      },
      {
        title: '代码20.2.1',
        codes: [
          {
            language: 'Cpp',
            content:
              '#include <vector>\n#include <string>\nusing namespace std;\n\nclass Solution {\npublic:\n  vector<int> sequentialDigits(int low, int high) {\n    string numbers("123456789");\n    vector<int> ins;\n    int n = numbers.size();\n    for (int i = 1; i < n; i++)\n      for (int j = 0; j < n - i; j++)\n        ins.push_back(atoi(numbers.substr(j, i + 1).c_str()));\n    vector<int> ans;\n    for (int i = 0; i < ins.size(); i++)\n      if (ins[i] >= low && ins[i] <= high)\n        ans.push_back(ins[i]);\n    return ans;\n  }\n};\n\n'
          },
          {
            language: 'Java',
            content:
              'import java.util.*;\n\nclass Solution {\n  public List<Integer> sequentialDigits(int low, int high) {\n    String numbers = "123456789";\n    List<Integer> ins = new ArrayList<>();\n    int n = numbers.length();\n    for (int i = 1; i < n; i++)\n      for (int j = 0; j < n - i; j++)\n        ins.add(Integer.parseInt(numbers.substring(\n                j, i + j + 1\n                )));\n    List<Integer> ans = new ArrayList<>();\n    for (int i = 0; i < ins.size(); i++)\n      if (ins.get(i) >= low && ins.get(i) <= high)\n        ans.add(ins.get(i));\n    return ans;\n  }\n}\n\n'
          },
          {
            language: 'Py',
            content:
              'class Solution:\n    def sequentialDigits(self, low: int, high: int) -> List[int]:\n        numbers = "123456789"\n        ins = []\n        n = len(numbers)\n        for i in range(1, n):\n            for j in range(n - i):\n                ins.append(int(numbers[j : i + j + 1]))\n        return [x for x in ins if x >= low and x <= high]\n\n'
          }
        ]
      },
      {
        title: '代码20.2.2',
        codes: [
          {
            language: 'Cpp',
            content:
              '#include <vector>\n#include <string>\n#include <algorithm>\nusing namespace std;\n\nclass Solution {\npublic:\n  vector<int> sequentialDigits(int low, int high) {\n    string numbers("123456789");\n    vector<int> ins;\n    int n = numbers.length();\n    for (int i = 1; i < n; i++)\n      for (int j = 0; j < n - i; j++)\n        ins.push_back(atoi(numbers.substr(j, i + 1).c_str()));\n    vector<int>::iterator st = lower_bound(ins.begin(), ins.end(), low);\n    vector<int>::iterator ed = upper_bound(ins.begin(), ins.end(), high);\n    vector<int> ans;\n    while (st != ed) ans.push_back(*st++);\n    return ans;\n  }\n};\n\n'
          },
          {
            language: 'Java',
            content:
              'import java.util.*;\n\npublic class Solution {\n  public int lower_bound(List<Integer> arr, int first,\n      int last, int value) {\n    while (first < last) {\n      int mid = first + (last - first) / 2;\n      if (arr.get(mid) < value) first = mid + 1;\n      else last = mid;\n    }\n    return first;\n  }\n  public int upper_bound(List<Integer> arr, int first,\n      int last, int value) {\n    while (first < last) {\n      int mid = first + (last - first) / 2;\n      if (arr.get(mid) <= value) first = mid + 1;\n      else last = mid;\n    }\n    return first;\n  }\n  List<Integer> sequentialDigits(int low, int high) {\n    String numbers = "123456789";\n    List<Integer> ins = new ArrayList<>();\n    int n = numbers.length();\n    for (int i = 1; i < n; i++)\n      for (int j = 0; j < n - i; j++)\n        ins.add(Integer.parseInt(numbers.substring(\n                j, i + j + 1\n                )));\n    int st = lower_bound(ins, 0, ins.size(), low);\n    int ed = upper_bound(ins, 0, ins.size(), high);\n    List<Integer> ans = new ArrayList<>();\n    for (; st != ed; st++)\n      ans.add(ins.get(st));\n    return ans;\n  }\n}\n\n'
          },
          {
            language: 'Py',
            content:
              'class Solution:\n    def sequentialDigits(self, low: int, high: int) -> List[int]:\n        numbers = "123456789"\n        ins = []\n        n = len(numbers)\n        for i in range(1, n):\n            for j in range(n - i):\n                ins.append(int(numbers[j : i + j + 1]))\n        return ins[bisect.bisect_left(ins, low) : bisect.bisect(ins, high)]\n\n'
          }
        ]
      },
      {
        title: '代码20.2.3',
        codes: [
          {
            language: 'Cpp',
            content:
              '#include <string>\n#include <vector>\n#include <algorithm>\nusing namespace std;\n\nclass Solution {\npublic:\n  vector<int> sequentialDigits(int low, int high) {\n    vector<int> ins {\n            12,\n            23,\n            34,\n            45,\n            56,\n            67,\n            78,\n            89,\n            123,\n            234,\n            345,\n            456,\n            567,\n            678,\n            789,\n            1234,\n            2345,\n            3456,\n            4567,\n            5678,\n            6789,\n            12345,\n            23456,\n            34567,\n            45678,\n            56789,\n            123456,\n            234567,\n            345678,\n            456789,\n            1234567,\n            2345678,\n            3456789,\n            12345678,\n            23456789,\n            123456789,\n    };\n    vector<int>::iterator st = lower_bound(ins.begin(),\n        ins.end(), low);\n    vector<int>::iterator ed = upper_bound(ins.begin(),\n        ins.end(), high);\n    vector<int> ans;\n    while (st != ed) ans.push_back(*st++);\n    return ans;\n  }\n};\n\n'
          },
          {
            language: 'Java',
            content:
              'import java.util.*;\n\npublic class Solution {\n  public int lower_bound(int[] arr, int first, int last,\n      int value) {\n    while (first < last) {\n      int mid = first + (last - first) / 2;\n      if (arr[mid] < value) first = mid + 1;\n      else last = mid;\n    }\n    return first;\n  }\n  public int upper_bound(int[] arr, int first, int last,\n      int value) {\n    while (first < last) {\n      int mid = first + (last - first) / 2;\n      if (arr[mid] <= value) first = mid + 1;\n      else last = mid;\n    }\n    return first;\n  }\n  public List<Integer> sequentialDigits(int low, int high) {\n    int[] ins = {\n            12,\n            23,\n            34,\n            45,\n            56,\n            67,\n            78,\n            89,\n            123,\n            234,\n            345,\n            456,\n            567,\n            678,\n            789,\n            1234,\n            2345,\n            3456,\n            4567,\n            5678,\n            6789,\n            12345,\n            23456,\n            34567,\n            45678,\n            56789,\n            123456,\n            234567,\n            345678,\n            456789,\n            1234567,\n            2345678,\n            3456789,\n            12345678,\n            23456789,\n            123456789\n    };\n    int st = lower_bound(ins, 0, ins.length, low);\n    int ed = upper_bound(ins, 0, ins.length, high);\n    List<Integer> ans = new ArrayList<>();\n    for (int i = st; i != ed; i++)\n      ans.add(ins[i]);\n    return ans;\n  }\n}\n\n'
          },
          {
            language: 'Py',
            content:
              'class Solution:\n    def sequentialDigits(self, low: int, high: int) -> List[int]:\n        ins = [\n            12,\n            23,\n            34,\n            45,\n            56,\n            67,\n            78,\n            89,\n            123,\n            234,\n            345,\n            456,\n            567,\n            678,\n            789,\n            1234,\n            2345,\n            3456,\n            4567,\n            5678,\n            6789,\n            12345,\n            23456,\n            34567,\n            45678,\n            56789,\n            123456,\n            234567,\n            345678,\n            456789,\n            1234567,\n            2345678,\n            3456789,\n            12345678,\n            23456789,\n            123456789,\n        ]\n        return ins[bisect.bisect_left(ins, low) : bisect.bisect(ins, high)]\n\n'
          }
        ]
      },
      {
        title: '代码20.2.4',
        codes: [
          {
            language: 'Cpp',
            content:
              "#include <vector>\n#include <string>\n#include <queue>\n#include <set>\nusing namespace std;\n\nclass Solution {\npublic:\n  int ladderLength(string beginWord, string endWord,\n      vector<string>& wordList) {\n    queue<string> q;\n    q.push(beginWord);\n    set<string> visited;\n    int steps = 1, L = beginWord.length();\n    while (!q.empty()) {\n      int last_q_size = q.size();\n      for (int flg = 0; flg < last_q_size; flg++) {\n        string cur = q.front();\n        q.pop();\n        if (visited.count(cur)) continue;\n        visited.insert(cur);\n        if (cur == endWord) return steps;\n        for (int i = 0; i < L; i++)\n          for (int j = 0; j < 26; j++) {\n            string s = cur;\n            s[i] = 'a' + j;\n            for (int k = 0; k < wordList.size(); k++) {\n              string& word = wordList[k];\n              if (word == s)\n                q.push(word);\n            }\n          }\n      }\n      steps += 1;\n    }\n    return 0;\n  }\n};\n\n"
          },
          {
            language: 'Java',
            content:
              'import java.util.*;\n\nclass Solution {\n  public int ladderLength(String beginWord,\n      String endWord, List<String> wordList) {\n    Queue<String> q = new LinkedList<String>();\n    q.offer(beginWord);\n    Set<String> visited = new HashSet<String>();\n    int steps = 1, L = beginWord.length();\n    while (q.size() != 0) {\n      int last_q_size = q.size();\n      for (int flg = 0; flg < last_q_size; flg++) {\n        String cur = q.poll();\n        if (visited.contains(cur)) continue;\n        visited.add(cur);\n        if (cur.equals(endWord)) return steps;\n        for (int i = 0; i < L; i++)\n          for (int j = 0; j < 26; j++) {\n            String s = "";\n            for (int ww = 0; ww < i; ww++)\n              s = s + String.valueOf(cur.charAt(ww));\n            s = s + String.valueOf((char)(\'a\' + j));\n            for (int ww = i + 1; ww < cur.length(); ww++)\n              s = s + String.valueOf(cur.charAt(ww));\n            for (int k = 0; k < wordList.size(); k++)\n              if (wordList.get(k).equals(s)) {\n                q.add(s);\n              }\n          }\n      }\n      steps += 1;\n    }\n    return 0;\n  }\n}\n\n'
          },
          {
            language: 'Py',
            content:
              'from collections import defaultdict\n\n\nclass Solution:\n    def ladderLength(self, beginWord: str, endWord: str, wordList: List[str]) -> int:\n        queue = [beginWord]\n        visited = set()\n        steps = 1\n        L = len(beginWord)\n\n        while len(queue) > 0:\n            for _ in range(len(queue)):\n                cur = queue.pop(0)\n                if cur in visited:\n                    continue\n                visited.add(cur)\n                if cur == endWord:\n                    return steps\n                # 这里我们尝试枚举所有可能的转换，并查看是否在wordList中，如果在，我们将其加入队列\n\n                # 单词中的每一位都进行变换\n                for i in range(L):\n                    # cur[i] 依次变成26个小写字母中的每一个\n                    for j in range(26):\n                        s = list(cur)\n                        s[i] = chr(ord("a") + j)\n                        for word in wordList:\n                            if word == "".join(s):\n                                queue.append(word)\n            steps += 1\n        return 0\n\n'
          }
        ]
      },
      {
        title: '代码20.2.5',
        codes: [
          {
            language: 'Cpp',
            content:
              '#include <vector>\n#include <string>\n#include <map>\n#include <queue>\n#include <set>\nusing namespace std;\n\nclass Solution {\npublic:\n  int ladderLength(string beginWord, string endWord,\n      vector<string>& wordList) {\n    queue<string> q;\n    q.push(beginWord);\n    set<string> visited;\n    int steps = 1, n = wordList.size(), L = beginWord.length();\n    map<string, vector<string> > wizards;\n    for (int i = 0; i < n; i++) {\n      string word = wordList[i];\n      for (int j = 0; j < L; j++) {\n        string key = word.substr(0, j) + string("*") + \\\n                     word.substr(j + 1,\n                         word.length() - j - 1);\n        if (!wizards.count(key))\n          wizards[key] = vector<string>();\n        wizards[key].push_back(word);\n      }\n    }\n    while (!q.empty()) {\n      int last_q_size = q.size();\n      for (int flg = 0; flg < last_q_size; flg++) {\n        string cur = q.front();\n        q.pop();\n        if (visited.count(cur)) continue;\n        visited.insert(cur);\n        if (cur == endWord) return steps;\n        for (int i = 0; i < L; i++) {\n          string key = cur.substr(0, i) + string("*") + \\\n                       cur.substr(i + 1,\n                           cur.length() - i - 1);\n          if (!wizards.count(key)) continue;\n          for (int j = 0; j < wizards[key].size(); j++)\n            q.push(wizards[key][j]);\n        }\n      }\n      steps += 1;\n    }\n    return 0;\n  }\n};\n\n'
          },
          {
            language: 'Java',
            content:
              'import java.util.*;\n\nclass Solution {\n  public int ladderLength(String beginWord, String endWord,\n      List<String> wordList) {\n    Queue<String> q = new LinkedList<String>();\n    q.add(beginWord);\n    Set<String> visited = new HashSet<String>();\n    int steps = 1, n = wordList.size(),\n        L = beginWord.length();\n    Map<String, List<String> > wizards =\n      new HashMap<String, List<String> >();\n    for (int i = 0; i < n; i++) {\n      String word = wordList.get(i);\n      for (int j = 0; j < L; j++) {\n        String key = word.substring(0, j) + "*"\n          + word.substring(j + 1, word.length());\n        if (wizards.get(key) == null) {\n          List<String> magic = new ArrayList<>();\n          wizards.put(key, magic);\n        }\n        List<String> magic = wizards.get(key);\n        magic.add(word);\n        wizards.put(key, magic);\n      }\n    }\n    while (q.size() != 0) {\n      int last_q_size = q.size();\n      for (int flg = 0; flg < last_q_size; flg++) {\n        String cur = q.poll();\n        if (visited.contains(cur)) continue;\n        visited.add(cur);\n        if (cur.equals(endWord)) return steps;\n        for (int i = 0; i < L; i++) {\n          String key = cur.substring(0, i) + "*"\n            + cur.substring(i + 1, cur.length());\n          if (wizards.get(key) == null) continue;\n          for (int j = 0; j < wizards.get(key).size(); j++)\n            q.add(wizards.get(key).get(j));\n        }\n      }\n      steps += 1;\n    }\n    return 0;\n  }\n}\n\n'
          },
          {
            language: 'Py',
            content:
              'from collections import defaultdict\n\n\nclass Solution:\n    def ladderLength(self, beginWord: str, endWord: str, wordList: List[str]) -> int:\n        queue = [beginWord]\n        visited = set()\n        steps = 1\n        n = len(wordList)\n        L = len(beginWord)\n        wizards = defaultdict(list)\n        for i in range(n):\n            word = wordList[i]\n            for j in range(L):\n                wizards[word[:j] + "*" + word[j + 1 :]].append(word)\n\n        while len(queue) > 0:\n            for _ in range(len(queue)):\n                cur = queue.pop(0)\n                if cur in visited:\n                    continue\n                visited.add(cur)\n                if cur == endWord:\n                    return steps\n                for i in range(L):\n                    for word in wizards.get(cur[:i] + "*" + cur[i + 1 :], []):\n                        queue.append(word)\n\n            steps += 1\n        return 0\n\n'
          }
        ]
      },
      {
        title: '代码20.3.1',
        codes: [
          {
            language: 'Cpp',
            content:
              '#include <vector>\n#include <cstdlib>\n#include <algorithm>\nusing namespace std;\n\nclass Solution {\npublic:\n  int countSquares(vector<vector<int> >& matrix) {\n    int res = 0, m = matrix.size(), n = matrix[0].size();\n    int **dp = (int **)malloc((m + 1) * sizeof(int *));\n    for (int i = 0; i <= m; i++) {\n      dp[i] = (int *)malloc((n + 1) * sizeof(int));\n      for (int j = 0; j <= n; j++) dp[i][j] = 0;\n    }\n    for (int i = 1; i <= m; i++)\n      for (int j = 1; j <= n; j++) {\n        if (matrix[i - 1][j - 1] == 1)\n          dp[i][j] = min(min(dp[i - 1][j], dp[i][j - 1]),\\\n              dp[i - 1][j - 1]) + 1;\n        res += dp[i][j];\n      }\n    for (int i = 0; i <= m; i++) free(dp[i]);\n    free(dp);\n    return res;\n  }\n};\n\n'
          },
          {
            language: 'Java',
            content:
              'import java.lang.Math;\n\npublic class Solution {\n  public int countSquares(int[][] matrix) {\n    int res = 0, m = matrix.length,\n        n = matrix[0].length;\n    int[][] dp = new int[m + 1][n + 1];\n    for (int i = 0; i <= m; i++)\n      for (int j = 0; j <= n; j++) dp[i][j] = 0;\n    for (int i = 1; i <= m; i++)\n      for (int j = 1; j <= n; j++) {\n        if (matrix[i - 1][j - 1] == 1)\n          dp[i][j] = Math.min(Math.min(dp[i - 1][j],\n              dp[i][j - 1]), dp[i - 1][j - 1]) + 1;\n        res += dp[i][j];\n      }\n    return res;\n  }\n}\n\n'
          },
          {
            language: 'Py',
            content:
              'class Solution:\n    def countSquares(self, matrix: List[List[int]]) -> int:\n        res = 0\n        m = len(matrix)\n        n = len(matrix[0])\n        dp = [[0] * (n + 1) for _ in range(m + 1)]\n        for i in range(1, m + 1):\n            for j in range(1, n + 1):\n                if matrix[i - 1][j - 1] == 1:\n                    dp[i][j] = min(dp[i - 1][j], dp[i][j - 1], dp[i - 1][j - 1]) + 1\n                res += dp[i][j]\n        return res\n\n'
          }
        ]
      },
      {
        title: '代码20.3.2',
        codes: [
          {
            language: 'Cpp',
            content:
              "#include <string>\n#include <map>\n#include <algorithm>\n#include <cstring>\nusing namespace std;\n\nclass Solution {\npublic:\n  int maxFreq(string s, int maxLetters, int minSize,\n      int maxSize) {\n    map<string, int> counter;\n    int res = 0;\n    for (int i = 0; i < s.size() - minSize + 1; i++)\n      for (int length = minSize; length <= maxSize; length++) {\n        if (i + length > s.length()) break;\n        bool alpha[26];\n        memset(alpha, 0, sizeof(alpha));\n        int cnt = 0;\n        string sub(\"\");\n        for (int ww = 0; ww < length; ww++) {\n          sub.push_back(s[i + ww]);\n          if (!alpha[s[i + ww] - 'a']) {\n            ++cnt;\n            alpha[s[i + ww] - 'a'] = true;\n          }\n        }\n        if (cnt <= maxLetters) {\n          int buf_val;\n          buf_val = counter[sub] = (counter.count(sub) ? \\\n              counter[sub] : 0) + 1;\n          res = max(res, buf_val);\n        }\n      }\n    return res;\n  }\n};\n\n"
          },
          {
            language: 'Java',
            content:
              "import java.util.*;\nimport java.lang.Math;\n\nclass Solution {\n  public int maxFreq(String s, int maxLetters,\n      int minSize, int maxSize) {\n    Map<String, Integer> counter =\n      new HashMap<String, Integer>();\n    int res = 0;\n    for (int i = 0; i < s.length() - minSize + 1; i++)\n      for (int length = minSize; length <= maxSize;\n          length++) {\n        if (i + length > s.length()) break;\n        String sub = s.substring(i, i + length);\n        boolean[] alpha = new boolean[26];\n        int cnt = 0;\n        for (int ww = 0; ww < sub.length(); ww++)\n          if (!alpha[sub.charAt(ww) - 'a']) {\n            cnt += 1;\n            alpha[sub.charAt(ww) - 'a'] = true;\n          }\n        if (cnt <= maxLetters) {\n          if (counter.get(sub) == null)\n            counter.put(sub, 0);\n          counter.put(sub, counter.get(sub) + 1);\n          res = Math.max(res, counter.get(sub));\n        }\n      }\n    return res;\n  }\n}\n\n"
          },
          {
            language: 'Py',
            content:
              'class Solution:\n    def maxFreq(self, s: str, maxLetters: int, minSize: int, maxSize: int) -> int:\n        counter, res = {}, 0\n        for i in range(0, len(s) - minSize + 1):\n            for length in range(minSize, maxSize + 1):\n                if i + length > len(s):\n                    break\n                sub = s[i : i + length]\n                if len(set(sub)) <= maxLetters:\n                    counter[sub] = counter.get(sub, 0) + 1\n                    res = max(res, counter[sub])\n        return res\n\n'
          }
        ]
      },
      {
        title: '代码20.3.3',
        codes: [
          {
            language: 'Cpp',
            content:
              "#include <string>\n#include <algorithm>\n#include <map>\n#include <cstring>\nusing namespace std;\n\nclass Solution {\npublic:\n  int maxFreq(string s, int maxLetters, int minSize, \\\n      int maxSize) {\n    map<string, int> counter;\n    int res = 0;\n    for (int i = 0; i <= s.length() - minSize; i++) {\n      string sub = s.substr(i, minSize);\n      bool alpha[26];\n      memset(alpha, 0, sizeof(alpha));\n      int cnt = 0;\n      for (int ww = 0; ww < sub.length(); ww++)\n        if (!alpha[sub[ww] - 'a']) {\n          ++cnt;\n          alpha[sub[ww] - 'a'] = true;\n        }\n      if (cnt <= maxLetters) {\n        counter[sub] = (counter.count(sub) ? \\\n            counter[sub] : 0);\n        counter[sub] += 1;\n        res = max(res, counter[sub]);\n      }\n    }\n    return res;\n  }\n};\n\n"
          },
          {
            language: 'Java',
            content:
              "import java.util.*;\nimport java.lang.Math;\n\nclass Solution {\n  public int maxFreq(String s, int maxLetters,\n      int minSize, int maxSize) {\n    Map<String, Integer> counter =\n      new HashMap<String, Integer>();\n    int res = 0;\n    for (int i = 0; i <= s.length() - minSize; i++) {\n      String sub = s.substring(i, i + minSize);\n      boolean[] alpha = new boolean[26];\n      int cnt = 0;\n      for (int ww = 0; ww < sub.length(); ww++)\n        if (!alpha[sub.charAt(ww) - 'a']) {\n          ++cnt;\n          alpha[sub.charAt(ww) - 'a'] = true;\n        }\n      if (cnt <= maxLetters) {\n        if (counter.get(sub) == null)\n          counter.put(sub, 0);\n        counter.put(sub, counter.get(sub) + 1);\n        res = Math.max(res, counter.get(sub));\n      }\n    }\n    return res;\n  }\n}\n\n"
          },
          {
            language: 'Py',
            content:
              'class Solution:\n    def maxFreq(self, s: str, maxLetters: int, minSize: int, maxSize: int) -> int:\n        counter, res = {}, 0\n        for i in range(0, len(s) - minSize + 1):\n            sub = s[i : i + minSize]\n            if len(set(sub)) <= maxLetters:\n                counter[sub] = counter.get(sub, 0) + 1\n                res = max(res, counter[sub])\n        return res\n\n'
          }
        ]
      },
      {
        title: '代码20.4.1',
        codes: [
          {
            language: 'Cpp',
            content:
              '#include <vector>\nusing namespace std;\n\nclass Solution {\npublic:\n  int cntLiveCell(int i, int j, \\\n      const vector<vector<int> >& old) {\n    int cnt = 0, m = old.size(), n = old[0].size();\n    int directions[8][2] = {\n      {0, 1},\n      {0, -1},\n      {-1, 0},\n      {1, 0},\n      {1, 1},\n      {1, -1},\n      {-1, 1},\n      {-1, -1}\n    };\n    for (int p = 0; p < 8; p++) {\n      int dx = directions[p][0], dy = directions[p][1];\n      if (i + dx >= 0 && i + dx < m && j + dy >= 0 && \\\n          j + dy < n)\n        cnt += old[i + dx][j + dy];\n    }\n    return cnt;\n  }\n  void gameOfLife(vector<vector<int> >& board) {\n    int m = board.size();\n    if (m <= 0) return;\n    int n = board[0].size();\n    if (n <= 0) return;\n    vector<vector<int> > old = board;\n    for (int i = 0; i < m; i++)\n      for (int j = 0; j < n; j++) {\n        int cnt = cntLiveCell(i, j, old);\n        if (old[i][j] == 0 && cnt == 3)\n          board[i][j] = 1;\n        if (old[i][j] == 1 && (cnt > 3 || cnt < 2))\n          board[i][j] = 0;\n      }\n  }\n};\n\n'
          },
          {
            language: 'Java',
            content:
              'public class Solution {\n  public int cntLiveCell(int i, int j,\n      int[][] old) {\n    int cnt = 0, m = old.length, n = old[0].length;\n    int[][] directions = {\n      {0,1},\n      {0,-1},\n      {-1,0},\n      {1,0},\n      {1,1},\n      {1,-1},\n      {-1,1},\n      {-1,-1}\n    };\n    for (int p = 0; p < 8; p++) {\n      int dx = directions[p][0], dy = directions[p][1];\n      if (i + dx >= 0 && i + dx < m && j + dy >= 0 &&\n          j + dy < n)\n        cnt += old[i + dx][j + dy];\n    }\n    return cnt;\n  }\n  void gameOfLife(int[][] board) {\n    int m = board.length;\n    if (m <= 0) return;\n    int n = board[0].length;\n    if (n <= 0) return;\n    int[][] old = new int[m][n];\n    for (int i = 0; i < m; i++)\n      for (int j = 0; j < n; j++) old[i][j] = board[i][j];\n    for (int i = 0; i < m; i++)\n      for (int j = 0; j < n; j++) {\n        int cnt = cntLiveCell(i, j, old);\n        if (old[i][j] == 0 && cnt == 3)\n          board[i][j] = 1;\n        if (old[i][j] == 1 && (cnt > 3 || cnt < 2))\n          board[i][j] = 0;\n      }\n  }\n}\n\n'
          },
          {
            language: 'Py',
            content:
              'import copy\n\n\nclass Solution:\n    def gameOfLife(self, board: List[List[int]]) -> None:\n        m = len(board)\n        n = len(board[0])\n        if m <= 0 or n <= 0:\n            return []\n        old = copy.deepcopy(board)\n\n        def cntLiveCell(i: int, j: int) -> int:\n            cnt = 0\n            directions = [\n                (0, 1),\n                (0, -1),\n                (-1, 0),\n                (1, 0),\n                (1, 1),\n                (1, -1),\n                (-1, 1),\n                (-1, -1),\n            ]\n            for (dx, dy) in directions:\n                if i + dx >= 0 and i + dx < m and j + dy >= 0 and j + dy < n:\n                    cnt += old[i + dx][j + dy]\n\n            return cnt\n\n        for i in range(m):\n            for j in range(n):\n                # 八个方向有几个活细胞\n                cnt = cntLiveCell(i, j)\n                if old[i][j] == 0 and cnt == 3:\n                    board[i][j] = 1\n                if old[i][j] == 1 and (cnt > 3 or cnt < 2):\n                    board[i][j] = 0\n\n'
          }
        ]
      },
      {
        title: '代码20.4.2',
        codes: [
          {
            language: 'Cpp',
            content:
              '#include <vector>\nusing namespace std;\n\nclass Solution {\npublic:\n  int cntLiveCell(int i, int j,\n      const vector<vector<int> >& board) {\n    int cnt = 0, directions[8][2] = {\n      {0, 1},\n      {0, -1},\n      {-1, 0},\n      {1, 0},\n      {1, 1},\n      {1, -1},\n      {-1, 1},\n      {-1, -1}\n    };\n    int m = board.size(), n = board[0].size();\n    for (int p = 0; p < 8; p++) {\n      int dx = directions[p][0], dy = directions[p][1];\n      if (i + dx >= 0 && i + dx < m && j + dy >= 0 && \\\n          j + dy < n)\n        cnt += board[i + dx][j + dy] & 1;\n    }\n    return cnt;\n  }\n  void gameOfLife(vector<vector<int> >& board) {\n    int m = board.size();\n    if (m <= 0) return;\n    int n = board[0].size();\n    if (n <= 0) return;\n    for (int i = 0; i < m; i++)\n      for (int j = 0; j < n; j++) {\n        int cnt = cntLiveCell(i, j, board);\n        board[i][j] |= cnt << 1;\n      }\n    for (int i = 0; i < m; i++)\n      for (int j = 0; j < n; j++) {\n        int cell = board[i][j] & 1;\n        int cnt = board[i][j] >> 1;\n        if (cell == 0 && cnt == 3) board[i][j] = 1;\n        else if (cell == 1 && (cnt > 3 || cnt < 2))\n          board[i][j] = 0;\n        else board[i][j] = cell;\n      }\n  }\n};\n\n'
          },
          {
            language: 'Java',
            content:
              'public class Solution {\n  public int cntLiveCell(int i, int j,\n      int[][] board) {\n    int cnt = 0;\n    int[][] directions = {\n      {0, 1},\n      {0, -1},\n      {-1, 0},\n      {1, 0},\n      {1, 1},\n      {1, -1},\n      {-1, 1},\n      {-1, -1}\n    };\n    int m = board.length, n = board[0].length;\n    for (int p = 0; p < 8; p++) {\n      int dx = directions[p][0], dy = directions[p][1];\n      if (i + dx >= 0 && i + dx < m && j + dy >= 0 &&\n          j + dy < n)\n        cnt += board[i + dx][j + dy] & 1;\n    }\n    return cnt;\n  }\n  public void gameOfLife(int[][] board) {\n    int m = board.length;\n    if (m <= 0) return;\n    int n = board[0].length;\n    if (n <= 0) return;\n    for (int i = 0; i < m; i++)\n      for (int j = 0; j < n; j++) {\n        int cnt = cntLiveCell(i, j, board);\n        board[i][j] = board[i][j] | (cnt << 1);\n      }\n    for (int i = 0; i < m; i++)\n      for (int j = 0; j < n; j++) {\n        int cell = board[i][j] & 1;\n        int cnt = board[i][j] >> 1;\n        if (cell == 0 && cnt == 3) board[i][j] = 1;\n        else if (cell == 1 && (cnt > 3 || cnt < 2))\n          board[i][j] = 0;\n        else board[i][j] = cell;\n      }\n  }\n}\n\n'
          },
          {
            language: 'Py',
            content:
              'import copy\n\n\nclass Solution:\n    def gameOfLife(self, board: List[List[int]]) -> None:\n        m = len(board)\n        n = len(board[0])\n        if m <= 0 or n <= 0:\n            return []\n\n        def cntLiveCell(i: int, j: int) -> int:\n            cnt = 0\n            directions = [\n                (0, 1),\n                (0, -1),\n                (-1, 0),\n                (1, 0),\n                (1, 1),\n                (1, -1),\n                (-1, 1),\n                (-1, -1),\n            ]\n            for (dx, dy) in directions:\n                if i + dx >= 0 and i + dx < m and j + dy >= 0 and j + dy < n:\n                    cnt += board[i + dx][j + dy] & 1\n            return cnt\n\n        for i in range(m):\n            for j in range(n):\n                # 八个方向有几个活细胞\n                cnt = cntLiveCell(i, j)\n                board[i][j] |= cnt << 1\n        for i in range(m):\n            for j in range(n):\n                # 变化之前当前cell的值\n                cell = board[i][j] & 1\n                cnt = board[i][j] >> 1\n                if cell == 0 and cnt == 3:\n                    board[i][j] = 1\n                elif cell == 1 and (cnt > 3 or cnt < 2):\n                    board[i][j] = 0\n                else:\n                    board[i][j] = cell\n\n'
          }
        ]
      }
    ]
  }
]
