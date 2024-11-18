fun main() {
    val A = readln().toInt()
    val B = readln().toInt()
    val C = readln().toInt()

    val result = mutableMapOf<Int, Int>()
    for (i in 0..9) {
        result[i] = 0
    }

    val num = (A * B * C).toString()

    val splitNum = num.split("").filter { it.isNotEmpty() }

    for (num in splitNum) {
        result[num.toInt()] = result[num.toInt()]!! + 1
    }

    for (i in 0..9) {
        println(result[i])
    }
}