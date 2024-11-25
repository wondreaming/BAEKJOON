import java.io.BufferedReader
import java.io.InputStreamReader
import kotlin.math.pow

//TIP To <b>Run</b> code, press <shortcut actionId="Run"/> or
// click the <icon src="AllIcons.Actions.Execute"/> icon in the gutter.
fun main() {
    val L = readln().toInt()
    val str = readln()
    val r = 31.0

    var num = 1L
    var result = 0L

    val alphabet = mutableMapOf<Char, Long>()

    for (char in 'a'..'z') {
        alphabet.put(char, num)
        num++
    }

    for (idx in 0 until str.length) {
        val num1 = alphabet.getValue(str[idx])
        val num2 = r.pow(idx).toLong()
        result += num1 * num2
    }
    println(result)
}