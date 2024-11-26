fun main() {
    val result = mutableListOf<String>()

    while (true) {
        val nums = readln()

        if (nums == "0") {
            println(result.joinToString("\n"))
            return
        }

        for (idx in 0..(nums.length / 2)) {
            if (nums[idx] != nums[nums.length - idx - 1]) {
                result.add("no")
                break;
            }

            if (idx == nums.length / 2) {
                result.add("yes")
            }
        }
    }
}