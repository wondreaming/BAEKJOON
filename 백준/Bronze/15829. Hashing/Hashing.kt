fun main() {
    val L = readln().toInt()
    val str = readln()
    val r = 31L

    var num = 1L
    var result = 0L
    val M = 1234567891L
    var currentR = 1L

    val alphabet = mutableMapOf<Char, Long>()

    for (char in 'a'..'z') {
        alphabet.put(char, num)
        num++
    }

    for (idx in 0 until str.length) {
        val num1 = alphabet.getValue(str[idx])
        result = (result + num1 * currentR % M) % M
        currentR = (currentR * r) % M
    }
    println(result)
}